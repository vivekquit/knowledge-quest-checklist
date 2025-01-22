import React, { useState, useRef, useEffect } from "react";
import { Course, courses } from "@/data/courses";
import { toast } from "sonner";

const KnowledgeGraph = () => {
  const [completedCourses, setCompletedCourses] = useState<Set<string>>(new Set());
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
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
    
    // Initialize all percentages to 0
    courses.forEach(course => {
      newPercentages[course.id] = 0;
    });

    // Calculate contributions from completed courses
    completedCourses.forEach(completedId => {
      const course = courses.find(c => c.id === completedId);
      if (course?.certificationProgress?.contributesTo) {
        Object.entries(course.certificationProgress.contributesTo).forEach(([targetId, contribution]) => {
          newPercentages[targetId] = (newPercentages[targetId] || 0) + contribution;
        });
      }
      // Set completed course to 100%
      newPercentages[completedId] = 100;
    });

    setProgressPercentages(newPercentages);
  };

  const handleNodeClick = (course: Course) => {
    setSelectedCourse(course);
    const currentProgress = progressPercentages[course.id];
    const dependencies = course.dependencies.map(depId => {
      const dep = courses.find(c => c.id === depId);
      return dep?.title;
    }).filter(Boolean).join(", ");
    
    const progressText = `Current Progress: ${Math.round(currentProgress)}%${dependencies ? `\nPrerequisites: ${dependencies}` : ''}`;
    
    toast(course.title, {
      description: progressText,
    });
  };

  const toggleCompletion = (courseId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    const newCompleted = new Set(completedCourses);
    if (completedCourses.has(courseId)) {
      newCompleted.delete(courseId);
    } else {
      // Check if dependencies are completed
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
    <div className="w-full h-[800px] bg-black rounded-lg shadow-inner relative overflow-hidden">
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
  );
};

export default KnowledgeGraph;