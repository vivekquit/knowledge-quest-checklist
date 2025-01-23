import React, { useState, useRef, useEffect } from "react";
import { Course, SubTopic, topicRelationships } from "@/data/courses";
import { courses } from "@/data/courses";
import { toast } from "sonner";
import { Card, CardContent } from "./ui/card";

// Add the getRandomColor function
const getRandomColor = () => {
  const colors = [
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#96CEB4',
    '#FFEEAD',
    '#D4A5A5',
    '#9B59B6',
    '#3498DB',
    '#1ABC9C'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const KnowledgeGraph = () => {
  const [completedCourses, setCompletedCourses] = useState<Set<string>>(new Set());
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(new Set());
  const svgRef = useRef<SVGSVGElement>(null);
  const [dragging, setDragging] = useState<string | null>(null);
  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>(
    Object.fromEntries(courses.map(course => [course.id, course.position]))
  );
  const [progressPercentages, setProgressPercentages] = useState<Record<string, number>>(
    Object.fromEntries(courses.map(course => [course.id, 0]))
  );

  const [relatedLines, setRelatedLines] = useState<Array<{
    from: { x: number; y: number };
    to: { x: number; y: number };
    color: string;
  }>>([]);

  useEffect(() => {
    // Update related lines when topics are selected
    const newLines: Array<{ from: { x: number; y: number }; to: { x: number; y: number }; color: string }> = [];
    
    selectedTopics.forEach(topicId => {
      const relatedTopicIds = topicRelationships[topicId] || [];
      relatedTopicIds.forEach(relatedId => {
        // Find courses containing these topics
        const sourceCourse = findCourseByTopicId(topicId);
        const targetCourse = findCourseByTopicId(relatedId);
        
        if (sourceCourse && targetCourse) {
          newLines.push({
            from: positions[sourceCourse.id],
            to: positions[targetCourse.id],
            color: getRandomColor() // Implement a function to get different colors for different relationships
          });
        }
      });
    });
    
    setRelatedLines(newLines);
  }, [selectedTopics, positions]);

  // Helper function to find course containing a topic
  const findCourseByTopicId = (topicId: string): Course | undefined => {
    return courses.find(course =>
      course.sections.some(section =>
        section.subtopics.some(topic => topic.id === topicId)
      )
    );
  };

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
    const newSelectedTopics = new Set(selectedTopics);
    if (selectedTopics.has(topicId)) {
      newSelectedTopics.delete(topicId);
    } else {
      newSelectedTopics.add(topicId);
    }
    setSelectedTopics(newSelectedTopics);
    
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

  const getAllSubtopics = (course: Course): string[] => {
    return course.sections.flatMap(section => 
      section.subtopics.map(topic => topic.id)
    );
  };

  const handleNodeClick = (course: Course) => {
    setSelectedCourse(course);
    
    // Get all subtopics for the course
    const allSubtopics = getAllSubtopics(course);
    const newSelectedTopics = new Set(selectedTopics);
    
    // Toggle all subtopics
    const allTopicsSelected = allSubtopics.every(id => selectedTopics.has(id));
    if (allTopicsSelected) {
      allSubtopics.forEach(id => newSelectedTopics.delete(id));
      if (completedCourses.has(course.id)) {
        toggleCompletion(course.id, new MouseEvent('click') as any);
      }
    } else {
      allSubtopics.forEach(id => newSelectedTopics.add(id));
      if (!completedCourses.has(course.id)) {
        toggleCompletion(course.id, new MouseEvent('click') as any);
      }
    }
    
    setSelectedTopics(newSelectedTopics);
    
    const currentProgress = progressPercentages[course.id];
    const dependencies = course.dependencies.map(depId => {
      const dep = courses.find(c => c.id === depId);
      return dep?.title;
    }).filter(Boolean).join(", ");
    
    const subtopicsList = course.sections
      .flatMap(section => section.subtopics)
      .map(topic => `• ${topic.title}`)
      .join("\n");
      
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
      
      // Only check dependencies for CKS
      if (courseId === 'cks') {
        const missingDependencies = course?.dependencies.filter(depId => !completedCourses.has(depId));
        
        if (missingDependencies && missingDependencies.length > 0) {
          const missingCourses = missingDependencies
            .map(depId => courses.find(c => c.id === depId)?.title)
            .filter(Boolean)
            .join(", ");
          
          toast.error(`Complete prerequisites first: ${missingCourses}`);
          return;
        }
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
          {/* Render related topic lines */}
          {relatedLines.map((line, index) => (
            <line
              key={`related-${index}`}
              x1={line.from.x}
              y1={line.from.y}
              x2={line.to.x}
              y2={line.to.y}
              stroke={line.color}
              strokeWidth="2"
              strokeDasharray="4"
              className="opacity-50"
            />
          ))}
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
                    ? "fill-graph-completed"
                    : "fill-graph-node"
                } transition-colors duration-300 hover:fill-graph-hover stroke-2 stroke-blue-300`}
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
                        className={`cursor-pointer p-1 rounded transition-all duration-300 transform ${
                          selectedTopics.has(topic.id) || topic.relatedTopics?.some(id => selectedTopics.has(id))
                            ? "bg-blue-500 scale-105"
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