import React, { useState, useRef, useEffect } from "react";
import { Course, SubTopic } from "@/data/courses";
import { courses } from "@/data/courses";
import { toast } from "sonner";
import { Card, CardContent } from "./ui/card";

const KnowledgeGraph = () => {
  const [completedCourses, setCompletedCourses] = useState<Set<string>>(new Set());
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dragging, setDragging] = useState<string | null>(null);
  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>(
    Object.fromEntries(courses.map(course => [course.id, course.position]))
  );
  const [progressPercentages, setProgressPercentages] = useState<Record<string, number>>(
    Object.fromEntries(courses.map(course => [course.id, 0]))
  );

  useEffect(() => {
    updateProgressPercentages();
  }, [completedCourses]);

  const updateProgressPercentages = () => {
    const newPercentages: Record<string, number> = {};
    
    courses.forEach(course => {
      newPercentages[course.id] = 0;
    });

    completedCourses.forEach(completedId => {
      const course = courses.find(c => c.id === completedId);
      if (course?.certificationProgress?.contributesTo) {
        Object.entries(course.certificationProgress.contributesTo).forEach(([targetId, contribution]) => {
          newPercentages[targetId] = (newPercentages[targetId] || 0) + contribution;
        });
      }
      newPercentages[completedId] = 100;
    });

    setProgressPercentages(newPercentages);
  };

  const handleTopicClick = (topicId: string, course: Course) => {
    setSelectedTopic(selectedTopic === topicId ? null : topicId);
    
    // Find related topics across all courses
    const relatedTopics: { courseId: string; topic: SubTopic }[] = [];
    courses.forEach(c => {
      c.sections.forEach(section => {
        section.subtopics.forEach(topic => {
          if (topic.relatedTopics?.includes(topicId) || topic.id === topicId) {
            relatedTopics.push({ courseId: c.id, topic });
          }
        });
      });
    });

    // Show toast with related topics
    if (relatedTopics.length > 1) {
      toast(`Related topics found in ${relatedTopics.length} courses`, {
        description: relatedTopics.map(rt => 
          `${rt.courseId.toUpperCase()}: ${rt.topic.title}`
        ).join('\n'),
        duration: 5000,
      });
    }
  };

  const handleNodeClick = (course: Course) => {
    setSelectedCourse(course);
    const currentProgress = progressPercentages[course.id];
    const dependencies = course.dependencies.map(depId => {
      const dep = courses.find(c => c.id === depId);
      return dep?.title;
    }).filter(Boolean).join(", ");
    
    const subtopicsList = course.subtopics.map(topic => `• ${topic}`).join("\n");
    const progressText = `Current Progress: ${Math.round(currentProgress)}%\n\n${dependencies ? `Prerequisites: ${dependencies}\n\n` : ''}Topics covered:\n${subtopicsList}`;
    
    toast(course.title, {
      description: progressText,
      duration: 5000,
    });
  };

  const toggleCompletion = (courseId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const newCompleted = new Set(completedCourses);
    if (completedCourses.has(courseId)) {
      newCompleted.delete(courseId);
    } else {
      const course = courses.find(c => c.id === courseId);
      const missingDependencies = course?.dependencies.filter(depId => !completedCourses.has(depId));
      
      if (missingDependencies && missingDependencies.length > 0) {
        const missingCourses = missingDependencies
          .map(depId => courses.find(c => c.id === depId)?.title)
          .filter(Boolean)
          .join(", ");
        
        toast.error(`Complete prerequisites first: ${missingCourses}`);
        return;
      }
      
      newCompleted.add(courseId);
    }
    setCompletedCourses(newCompleted);
  };

  const handleMouseDown = (courseId: string) => {
    setDragging(courseId);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!dragging || !svgRef.current) return;

    const svg = svgRef.current;
    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const svgPoint = point.matrixTransform(svg.getScreenCTM()?.inverse());

    setPositions(prev => ({
      ...prev,
      [dragging]: { x: svgPoint.x, y: svgPoint.y },
    }));
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  const renderConnections = () => {
    return courses.flatMap(course =>
      course.dependencies.map(depId => {
        const start = positions[depId];
        const end = positions[course.id];
        return (
          <line
            key={`${depId}-${course.id}`}
            x1={start.x}
            y1={start.y}
            x2={end.x}
            y2={end.y}
            stroke="currentColor"
            className="text-graph-line stroke-2 opacity-50"
            strokeDasharray="4"
          />
        );
      })
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="w-full h-[400px] bg-black rounded-lg shadow-inner relative overflow-hidden">
        <svg
          ref={svgRef}
          className="w-full h-full"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {renderConnections()}
          {courses.map(course => (
            <g
              key={course.id}
              transform={`translate(${positions[course.id].x},${positions[course.id].y})`}
              onClick={() => handleNodeClick(course)}
              onMouseDown={(e) => {
                e.stopPropagation();
                handleMouseDown(course.id);
              }}
              className="cursor-pointer"
            >
              <circle
                r="40"
                className={`${
                  completedCourses.has(course.id)
                    ? "fill-blue-600"
                    : "fill-blue-500"
                } transition-colors duration-300 hover:fill-blue-400 stroke-2 stroke-blue-300`}
              />
              <text
                className="text-lg fill-white font-bold"
                textAnchor="middle"
                dy="-5"
              >
                {course.title}
              </text>
              <text
                className="text-xs fill-gray-300"
                textAnchor="middle"
                dy="15"
              >
                {Math.round(progressPercentages[course.id])}%
              </text>
              <foreignObject
                x="-12"
                y="20"
                width="24"
                height="24"
                className="overflow-visible"
              >
                <div className="flex justify-center items-center">
                  <input
                    type="checkbox"
                    checked={completedCourses.has(course.id)}
                    onChange={(e) => toggleCompletion(course.id, e as any)}
                    className="w-4 h-4 rounded border-white border-2 checked:bg-white checked:border-transparent focus:ring-0 focus:ring-offset-0"
                  />
                </div>
              </foreignObject>
            </g>
          ))}
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {courses.map(course => (
          <Card key={course.id} className="bg-black/50 text-white">
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-4">{course.title}</h3>
              {course.sections.map((section, idx) => (
                <div key={idx} className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-300 mb-2">{section.title}</h4>
                  <ul className="space-y-1">
                    {section.subtopics.map(topic => (
                      <li
                        key={topic.id}
                        onClick={() => handleTopicClick(topic.id, course)}
                        className={`cursor-pointer p-1 rounded transition-colors ${
                          selectedTopic === topic.id || topic.relatedTopics?.includes(selectedTopic || '')
                            ? "bg-blue-500"
                            : "hover:bg-blue-500/30"
                        }`}
                      >
                        {topic.title}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeGraph;
