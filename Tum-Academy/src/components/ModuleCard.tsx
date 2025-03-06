
import { useState } from "react";
import { ChevronDown, ChevronRight, CheckCircle, LockClosed, Play } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export interface ModuleType {
  id: string;
  title: string;
  description: string;
  duration: string;
  isUnlocked: boolean;
  isCompleted: boolean;
  progress: number;
  lessons: {
    id: string;
    title: string;
    duration: string;
    isCompleted: boolean;
  }[];
}

const ModuleCard = ({ 
  module, 
  index, 
  handleStartLesson 
}: { 
  module: ModuleType; 
  index: number;
  handleStartLesson: (moduleId: string, lessonId: string) => void;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className={`overflow-hidden ${!module.isUnlocked ? 'opacity-80' : ''}`}>
      <CardHeader className="p-5 pb-0 flex justify-between cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-sm font-medium">
            {index + 1}
          </div>
          <div>
            <h3 className="font-medium flex items-center">
              {module.title}
              {module.isCompleted && <CheckCircle size={16} className="ml-2 text-green-500" />}
              {!module.isUnlocked && <LockClosed size={16} className="ml-2 text-muted-foreground" />}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{module.duration}</p>
          </div>
        </div>
        <div>
          {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="p-5">
          <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
          
          {module.isUnlocked && !module.isCompleted && (
            <div className="mb-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Fortschritt</span>
                <span>{module.progress}%</span>
              </div>
              <Progress value={module.progress} className="h-2" />
            </div>
          )}
          
          <div className="space-y-3 mt-4">
            {module.lessons.map((lesson) => (
              <div 
                key={lesson.id} 
                className="flex items-center justify-between p-3 rounded-md bg-accent/50"
              >
                <div className="flex items-center gap-2">
                  {lesson.isCompleted ? (
                    <CheckCircle size={16} className="text-green-500" />
                  ) : (
                    <Play size={16} className="text-primary" />
                  )}
                  <span className="text-sm">{lesson.title}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                  {module.isUnlocked && (
                    <Button 
                      size="sm" 
                      variant={lesson.isCompleted ? "outline" : "default"}
                      onClick={() => handleStartLesson(module.id, lesson.id)}
                    >
                      {lesson.isCompleted ? "Wiederholen" : "Starten"}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default ModuleCard;
