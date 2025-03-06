import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CourseProvider } from "@/context/CourseContext";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Course1 from "./pages/Course1";
import Course2 from "./pages/Course2";
import Course3 from "./pages/Course3";
import CourseContent from "./pages/CourseContent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CourseProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/course1" element={<Course1 />} />
            <Route path="/courses/course1/content" element={<CourseContent />} />
            <Route path="/courses/course2" element={<Course2 />} />
            <Route path="/courses/course2/content" element={<CourseContent />} />
            <Route path="/courses/course3" element={<Course3 />} />
            <Route path="/courses/course3/content" element={<CourseContent />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CourseProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
