import { BookOpen, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface CourseType {
  id: string;
  title: string;
  description: string;
  duration: string;
  students: number;
  modules: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  image: string;
  price: number;
}

const CourseCard = ({ course }: { course: CourseType }) => {
  return (
    <Card className="overflow-hidden hover-scale glass-card h-full flex flex-col">
      <div className="h-48 overflow-hidden relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-background/60 backdrop-blur-sm">
            {course.level === "Beginner" ? "Anfänger" : 
             course.level === "Intermediate" ? "Fortgeschritten" : "Experte"}
          </Badge>
        </div>
      </div>
      
      <CardHeader className="p-5">
        <h3 className="text-xl font-semibold">{course.title}</h3>
      </CardHeader>
      
      <CardContent className="p-5 pt-0 flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-2 mb-5">
          {course.description}
        </p>
        
        <div className="flex justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen size={14} />
            <span>{course.modules} Module</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>{course.students} Teilnehmer</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0 flex justify-between items-center">
        <div className="font-bold text-lg">
          {course.price} €
        </div>
        <Button asChild size="sm">
          <Link to={`/courses/${course.id}`}>Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
