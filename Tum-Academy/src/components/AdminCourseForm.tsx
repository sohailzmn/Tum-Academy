
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, Trash2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: {
    id: string;
    title: string;
    duration: string;
  }[];
}

interface CourseFormData {
  title: string;
  description: string;
  price: number;
  duration: string;
  level: string;
  imageUrl: string;
}

const AdminCourseForm = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CourseFormData>();

  const addModule = () => {
    const newModule: Module = {
      id: Date.now().toString(),
      title: "",
      description: "",
      duration: "",
      lessons: []
    };
    setModules([...modules, newModule]);
  };

  const removeModule = (moduleId: string) => {
    setModules(modules.filter(module => module.id !== moduleId));
  };

  const addLesson = (moduleId: string) => {
    const updatedModules = modules.map(module => {
      if (module.id === moduleId) {
        return {
          ...module,
          lessons: [
            ...module.lessons,
            {
              id: Date.now().toString(),
              title: "",
              duration: ""
            }
          ]
        };
      }
      return module;
    });
    setModules(updatedModules);
  };

  const removeLesson = (moduleId: string, lessonId: string) => {
    const updatedModules = modules.map(module => {
      if (module.id === moduleId) {
        return {
          ...module,
          lessons: module.lessons.filter(lesson => lesson.id !== lessonId)
        };
      }
      return module;
    });
    setModules(updatedModules);
  };

  const updateModule = (moduleId: string, field: string, value: string) => {
    const updatedModules = modules.map(module => {
      if (module.id === moduleId) {
        return { ...module, [field]: value };
      }
      return module;
    });
    setModules(updatedModules);
  };

  const updateLesson = (moduleId: string, lessonId: string, field: string, value: string) => {
    const updatedModules = modules.map(module => {
      if (module.id === moduleId) {
        const updatedLessons = module.lessons.map(lesson => {
          if (lesson.id === lessonId) {
            return { ...lesson, [field]: value };
          }
          return lesson;
        });
        return { ...module, lessons: updatedLessons };
      }
      return module;
    });
    setModules(updatedModules);
  };

  const onSubmit = (data: CourseFormData) => {
    // Here we would typically call an API to save the course
    
    const courseData = {
      ...data,
      modules: modules
    };
    
    console.log("Course created:", courseData);
    toast.success("Kurs erfolgreich erstellt!");
    
    // Reset form and modules
    reset();
    setModules([]);
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Neuen Kurs erstellen</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Kurstitel</Label>
                <Input
                  id="title"
                  placeholder="z.B. Taxi-Unternehmer Komplettkurs"
                  {...register("title", { required: "Titel ist erforderlich" })}
                />
                {errors.title && <p className="text-xs text-destructive">{errors.title.message}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="price">Preis (€)</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="z.B. 499"
                  {...register("price", { required: "Preis ist erforderlich", min: 0 })}
                />
                {errors.price && <p className="text-xs text-destructive">{errors.price.message}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="duration">Dauer</Label>
                <Input
                  id="duration"
                  placeholder="z.B. 34 Stunden"
                  {...register("duration", { required: "Dauer ist erforderlich" })}
                />
                {errors.duration && <p className="text-xs text-destructive">{errors.duration.message}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="level">Schwierigkeitsgrad</Label>
                <select
                  id="level"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  {...register("level", { required: "Schwierigkeitsgrad ist erforderlich" })}
                >
                  <option value="">Wählen Sie einen Schwierigkeitsgrad</option>
                  <option value="Beginner">Anfänger</option>
                  <option value="Intermediate">Fortgeschritten</option>
                  <option value="Advanced">Experte</option>
                </select>
                {errors.level && <p className="text-xs text-destructive">{errors.level.message}</p>}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="imageUrl">Bild-URL</Label>
              <Input
                id="imageUrl"
                placeholder="URL des Kursbildes"
                {...register("imageUrl", { required: "Bild-URL ist erforderlich" })}
              />
              {errors.imageUrl && <p className="text-xs text-destructive">{errors.imageUrl.message}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Beschreibung</Label>
              <Textarea
                id="description"
                placeholder="Detaillierte Beschreibung des Kurses"
                rows={4}
                {...register("description", { required: "Beschreibung ist erforderlich" })}
              />
              {errors.description && <p className="text-xs text-destructive">{errors.description.message}</p>}
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Module</h3>
          
          {modules.map((module, moduleIndex) => (
            <Card key={module.id} className="mb-4">
              <CardHeader className="flex flex-row items-center justify-between py-4">
                <CardTitle className="text-base">Modul {moduleIndex + 1}</CardTitle>
                <Button 
                  type="button" 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => removeModule(module.id)}
                >
                  <Trash2 size={16} />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`module-${module.id}-title`}>Titel</Label>
                    <Input
                      id={`module-${module.id}-title`}
                      value={module.title}
                      onChange={(e) => updateModule(module.id, "title", e.target.value)}
                      placeholder="Modultitel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`module-${module.id}-duration`}>Dauer</Label>
                    <Input
                      id={`module-${module.id}-duration`}
                      value={module.duration}
                      onChange={(e) => updateModule(module.id, "duration", e.target.value)}
                      placeholder="z.B. 3 Stunden"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`module-${module.id}-description`}>Beschreibung</Label>
                  <Textarea
                    id={`module-${module.id}-description`}
                    value={module.description}
                    onChange={(e) => updateModule(module.id, "description", e.target.value)}
                    placeholder="Modulbeschreibung"
                    rows={2}
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Lektionen</Label>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm" 
                      onClick={() => addLesson(module.id)}
                    >
                      <Plus size={16} className="mr-1" /> Lektion hinzufügen
                    </Button>
                  </div>
                  
                  <div className="space-y-3 mt-3">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div 
                        key={lesson.id} 
                        className="flex items-center gap-3 p-3 rounded-md bg-accent/50"
                      >
                        <div className="w-6">{lessonIndex + 1}.</div>
                        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-3">
                          <Input
                            value={lesson.title}
                            onChange={(e) => updateLesson(module.id, lesson.id, "title", e.target.value)}
                            placeholder="Lektionstitel"
                            className="bg-background"
                          />
                          <Input
                            value={lesson.duration}
                            onChange={(e) => updateLesson(module.id, lesson.id, "duration", e.target.value)}
                            placeholder="Dauer"
                            className="bg-background"
                          />
                        </div>
                        <Button 
                          type="button" 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => removeLesson(module.id, lesson.id)}
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    ))}
                    
                    {module.lessons.length === 0 && (
                      <p className="text-sm text-muted-foreground p-3">
                        Noch keine Lektionen vorhanden.
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Button type="button" variant="outline" onClick={addModule} className="w-full mt-2">
            <Plus size={16} className="mr-2" /> Modul hinzufügen
          </Button>
        </div>
        
        <div className="mt-8 flex justify-end">
          <Button type="submit" className="flex items-center gap-2">
            <Save size={16} />
            <span>Kurs speichern</span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminCourseForm;
