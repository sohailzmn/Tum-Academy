
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "sonner";
import { CourseType } from "@/components/CourseCard";
import { ModuleType } from "@/components/ModuleCard";

interface CourseContextType {
  courses: CourseType[];
  userCourses: CourseType[];
  isLoading: boolean;
  error: string | null;
  getCourseById: (id: string) => CourseType | undefined;
  getCourseModules: (courseId: string) => ModuleType[];
  enrollInCourse: (courseId: string) => void;
  startLesson: (courseId: string, moduleId: string, lessonId: string) => void;
  completeLesson: (courseId: string, moduleId: string, lessonId: string) => void;
  createCourse: (course: Omit<CourseType, "id">) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

// Mock data for courses
const mockCourses: CourseType[] = [
  {
    id: "course1",
    title: "Taxi-Unternehmer Komplettkurs",
    description: "Umfassende Vorbereitung auf den Taxi-Unternehmer-Schein mit allen rechtlichen und betriebswirtschaftlichen Grundlagen.",
    duration: "34 Stunden",
    students: 328,
    modules: 8,
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=2070",
    price: 499
  },
  {
    id: "course2",
    title: "Mietwagen-Unternehmer Basiskurs",
    description: "Grundlegende Kenntnisse für angehende Mietwagen-Unternehmer, fokussiert auf die spezifischen Anforderungen des Marktes.",
    duration: "28 Stunden",
    students: 205,
    modules: 6,
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=2031",
    price: 399
  },
  {
    id: "course3",
    title: "Betriebswirtschaft für Transportgewerbe",
    description: "Vertiefte betriebswirtschaftliche Kenntnisse speziell für die Taxi- und Mietwagenbranche.",
    duration: "12 Stunden",
    students: 147,
    modules: 4,
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
    price: 249
  }
];

// Mock data for modules
const mockModules: Record<string, ModuleType[]> = {
  "course1": [
    {
      id: "module1",
      title: "Einführung in die Taxi- und Mietwagenbranche",
      description: "Überblick über die aktuelle Marktsituation, Trends und gesetzliche Rahmenbedingungen.",
      duration: "4 Stunden",
      isUnlocked: true,
      isCompleted: false,
      progress: 0,
      lessons: [
        {
          id: "lesson1",
          title: "Marktanalyse und Trends",
          duration: "45 Min",
          isCompleted: false
        },
        {
          id: "lesson2",
          title: "Rechtliche Grundlagen im Überblick",
          duration: "60 Min",
          isCompleted: false
        },
        {
          id: "lesson3",
          title: "Anforderungen an Unternehmer",
          duration: "75 Min",
          isCompleted: false
        },
        {
          id: "lesson4",
          title: "Q&A zur Einführung",
          duration: "30 Min",
          isCompleted: false
        }
      ]
    },
    {
      id: "module2",
      title: "Gesetzliche Grundlagen",
      description: "Detaillierte Informationen zu den rechtlichen Anforderungen für Taxi- und Mietwagenunternehmer.",
      duration: "6 Stunden",
      isUnlocked: false,
      isCompleted: false,
      progress: 0,
      lessons: [
        {
          id: "lesson1",
          title: "Personenbeförderungsgesetz",
          duration: "90 Min",
          isCompleted: false
        },
        {
          id: "lesson2",
          title: "Verordnungen und Richtlinien",
          duration: "60 Min",
          isCompleted: false
        },
        {
          id: "lesson3",
          title: "Rechte und Pflichten",
          duration: "90 Min",
          isCompleted: false
        },
        {
          id: "lesson4",
          title: "Versicherungen und Haftung",
          duration: "60 Min",
          isCompleted: false
        },
        {
          id: "lesson5",
          title: "Q&A zu rechtlichen Grundlagen",
          duration: "30 Min",
          isCompleted: false
        }
      ]
    },
    {
      id: "module3",
      title: "Betriebswirtschaftliche Kenntnisse",
      description: "Grundlagen der Unternehmensführung, Finanzplanung und Buchhaltung für Transportdienstleister.",
      duration: "8 Stunden",
      isUnlocked: false,
      isCompleted: false,
      progress: 0,
      lessons: [
        {
          id: "lesson1",
          title: "Businessplan erstellen",
          duration: "90 Min",
          isCompleted: false
        },
        {
          id: "lesson2",
          title: "Finanzierungsmodelle",
          duration: "60 Min",
          isCompleted: false
        },
        {
          id: "lesson3",
          title: "Buchhaltung Grundlagen",
          duration: "120 Min",
          isCompleted: false
        },
        {
          id: "lesson4",
          title: "Steuerrecht für Transportunternehmer",
          duration: "90 Min",
          isCompleted: false
        },
        {
          id: "lesson5",
          title: "Kostenmanagement",
          duration: "60 Min",
          isCompleted: false
        },
        {
          id: "lesson6",
          title: "Q&A zur Betriebswirtschaft",
          duration: "30 Min",
          isCompleted: false
        }
      ]
    }
  ],
  "course2": [
    // Mock modules for course 2 would be defined here
    {
      id: "module1",
      title: "Grundlagen des Mietwagengewerbes",
      description: "Einführung in die spezifischen Anforderungen und Rahmenbedingungen für Mietwagenunternehmer.",
      duration: "5 Stunden",
      isUnlocked: true,
      isCompleted: false,
      progress: 0,
      lessons: [
        {
          id: "lesson1",
          title: "Unterschiede zum Taxigewerbe",
          duration: "60 Min",
          isCompleted: false
        },
        {
          id: "lesson2",
          title: "Gesetzliche Grundlagen",
          duration: "75 Min",
          isCompleted: false
        },
        {
          id: "lesson3",
          title: "Marktpotenzial analysieren",
          duration: "90 Min",
          isCompleted: false
        },
        {
          id: "lesson4",
          title: "Q&A Session",
          duration: "30 Min",
          isCompleted: false
        }
      ]
    }
  ],
  "course3": [
    // Mock modules for course 3 would be defined here
    {
      id: "module1",
      title: "Finanzmanagement für Transportgewerbe",
      description: "Fortgeschrittene Methoden zur Finanz- und Liquiditätsplanung in Transport- und Taxiunternehmen.",
      duration: "4 Stunden",
      isUnlocked: true,
      isCompleted: false,
      progress: 0,
      lessons: [
        {
          id: "lesson1",
          title: "Cashflow-Management",
          duration: "60 Min",
          isCompleted: false
        },
        {
          id: "lesson2",
          title: "Investitionsplanung",
          duration: "60 Min",
          isCompleted: false
        },
        {
          id: "lesson3",
          title: "Finanzierung optimieren",
          duration: "75 Min",
          isCompleted: false
        },
        {
          id: "lesson4",
          title: "Praxisbeispiele",
          duration: "45 Min",
          isCompleted: false
        }
      ]
    }
  ]
};

export const CourseProvider = ({ children }: { children: ReactNode }) => {
  const [courses, setCourses] = useState<CourseType[]>(mockCourses);
  const [modules, setModules] = useState<Record<string, ModuleType[]>>(mockModules);
  const [userProgress, setUserProgress] = useState<Record<string, Record<string, Record<string, boolean>>>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get user info for enrolled courses
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null;
  const enrolledCourseIds = user?.enrolledCourses || [];

  // Get user courses
  const userCourses = courses.filter(course => enrolledCourseIds.includes(course.id));

  useEffect(() => {
    // Simulate loading courses from an API
    const loadData = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Load saved progress from localStorage
        const savedProgress = localStorage.getItem("userProgress");
        if (savedProgress) {
          setUserProgress(JSON.parse(savedProgress));
        }
        
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load courses");
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);

  // Calculate module progress and unlock states based on user progress
  useEffect(() => {
    if (!isLoading && Object.keys(userProgress).length > 0) {
      const updatedModules = { ...modules };
      
      Object.keys(updatedModules).forEach(courseId => {
        const courseProgress = userProgress[courseId] || {};
        let prevModuleCompleted = true; // First module is always unlocked
        
        updatedModules[courseId] = updatedModules[courseId].map((module, index) => {
          // Set unlocked state based on previous module completion
          const isUnlocked = index === 0 || prevModuleCompleted;
          
          const moduleProgress = courseProgress[module.id] || {};
          const totalLessons = module.lessons.length;
          const completedLessons = module.lessons.filter(lesson => 
            moduleProgress[lesson.id] === true
          ).length;
          
          const progress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
          const isCompleted = totalLessons > 0 && completedLessons === totalLessons;
          
          // Update the lessons completion status
          const updatedLessons = module.lessons.map(lesson => ({
            ...lesson,
            isCompleted: moduleProgress[lesson.id] === true
          }));
          
          // Remember if this module is completed for the next module's unlock state
          prevModuleCompleted = isCompleted;
          
          return {
            ...module,
            isUnlocked,
            isCompleted,
            progress,
            lessons: updatedLessons
          };
        });
      });
      
      setModules(updatedModules);
    }
  }, [isLoading, userProgress, modules]);

  const getCourseById = (id: string) => {
    return courses.find(course => course.id === id);
  };

  const getCourseModules = (courseId: string) => {
    return modules[courseId] || [];
  };

  const enrollInCourse = (courseId: string) => {
    if (!user) {
      toast.error("Bitte melden Sie sich an, um einen Kurs zu buchen");
      return;
    }

    // In a real app, this would call an API to handle enrollment and payment
    const updatedUser = {
      ...user,
      enrolledCourses: [...(user.enrolledCourses || []), courseId]
    };
    
    localStorage.setItem("user", JSON.stringify(updatedUser));
    toast.success("Erfolgreich für den Kurs angemeldet!");
  };

  const startLesson = (courseId: string, moduleId: string, lessonId: string) => {
    // In a real app, this would update the user's current lesson and potentially
    // navigate to a lesson view component
    toast.success("Lektion gestartet");
    console.log(`Starting lesson: courseId=${courseId}, moduleId=${moduleId}, lessonId=${lessonId}`);
  };

  const completeLesson = (courseId: string, moduleId: string, lessonId: string) => {
    // Update user progress
    const updatedProgress = { ...userProgress };
    
    if (!updatedProgress[courseId]) {
      updatedProgress[courseId] = {};
    }
    
    if (!updatedProgress[courseId][moduleId]) {
      updatedProgress[courseId][moduleId] = {};
    }
    
    updatedProgress[courseId][moduleId][lessonId] = true;
    
    // Save to state and localStorage
    setUserProgress(updatedProgress);
    localStorage.setItem("userProgress", JSON.stringify(updatedProgress));
    
    toast.success("Lektion als abgeschlossen markiert");
  };

  const createCourse = (course: Omit<CourseType, "id">) => {
    const newCourse: CourseType = {
      ...course,
      id: `course_${Date.now()}`
    };
    
    setCourses(prevCourses => [...prevCourses, newCourse]);
    toast.success("Kurs erfolgreich erstellt");
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        userCourses,
        isLoading,
        error,
        getCourseById,
        getCourseModules,
        enrollInCourse,
        startLesson,
        completeLesson,
        createCourse
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error("useCourses must be used within a CourseProvider");
  }
  return context;
};
