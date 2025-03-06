import { useState } from "react";
import { SearchIcon, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard, { CourseType } from "@/components/CourseCard";
import { useCourses } from "@/context/CourseContext";

type LevelFilter = "all" | "Beginner" | "Intermediate" | "Advanced";

const Courses = () => {
  const { courses, isLoading } = useCourses();
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<LevelFilter>("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter courses based on search, level, and price
  const filteredCourses = courses.filter(course => {
    // Search filter
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Level filter
    const matchesLevel = levelFilter === "all" || course.level === levelFilter;
    
    // Price filter
    const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1];
    
    return matchesSearch && matchesLevel && matchesPrice;
  });

  return (
    <>
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-blue-600">TUM</span>-Academy Kurse
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Entdecken Sie unsere spezialisierten Kurse für den Taxi- und Mietwagen-Unternehmer-Schein und erweitern Sie Ihre Kenntnisse im Transportgewerbe.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-grow">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <Input 
                  type="text"
                  placeholder="Kurse durchsuchen..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                variant="outline" 
                className="md:w-auto"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={18} className={showFilters ? "text-primary mr-2" : "mr-2"} />
                <span className="md:inline">Filter</span>
              </Button>
            </div>
            
            {showFilters && (
              <div className="bg-card p-6 rounded-lg mb-6 animate-fade-in border border-border">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-medium mb-3">Schwierigkeitsgrad</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Checkbox 
                          id="all" 
                          checked={levelFilter === "all"}
                          onCheckedChange={() => setLevelFilter("all")}
                        />
                        <Label htmlFor="all" className="ml-2">Alle</Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox 
                          id="beginner" 
                          checked={levelFilter === "Beginner"}
                          onCheckedChange={() => setLevelFilter("Beginner")}
                        />
                        <Label htmlFor="beginner" className="ml-2">Anfänger</Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox 
                          id="intermediate" 
                          checked={levelFilter === "Intermediate"}
                          onCheckedChange={() => setLevelFilter("Intermediate")}
                        />
                        <Label htmlFor="intermediate" className="ml-2">Fortgeschritten</Label>
                      </div>
                      <div className="flex items-center">
                        <Checkbox 
                          id="advanced" 
                          checked={levelFilter === "Advanced"}
                          onCheckedChange={() => setLevelFilter("Advanced")}
                        />
                        <Label htmlFor="advanced" className="ml-2">Experte</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <h3 className="font-medium mb-3">Preisbereich</h3>
                    <div className="px-2 mb-6">
                      <Slider 
                        defaultValue={[0, 1000]} 
                        max={1000} 
                        step={10} 
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>{priceRange[0]}€</span>
                      <span>{priceRange[1]}€</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Courses Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-accent h-48 rounded-t-lg mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-6 bg-accent rounded w-3/4"></div>
                    <div className="h-4 bg-accent rounded w-full"></div>
                    <div className="h-4 bg-accent rounded w-5/6"></div>
                    <div className="h-10 bg-accent rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <div 
                  key={course.id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-background rounded-lg border border-border mt-6">
              <h3 className="text-xl font-medium mb-2">Keine Kurse gefunden</h3>
              <p className="text-muted-foreground">
                Bitte passen Sie Ihre Suche oder Filter an, um Ergebnisse zu sehen.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setLevelFilter("all");
                  setPriceRange([0, 1000]);
                }}
              >
                Alle Filter zurücksetzen
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Courses;
