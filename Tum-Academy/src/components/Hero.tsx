import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0"></div>
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1452441271666-5d998aa2f6cc?q=80&w=2070" 
          alt="Taxi background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center text-center px-4 py-20">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
          <span>Spezialist für Taxi- und Mietwagen-Unternehmer-Schein</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Ihre <span className="text-primary">Karriere</span> im Transportwesen beginnt hier
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Die <span className="text-blue-600 font-semibold">TUM</span><span className="font-semibold">-Academy</span> bietet einen umfassenden Online-Kurs, der angehende Taxi- und Mietwagenunternehmer auf ihre Selbstständigkeit vorbereitet.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <Button asChild size="lg" className="group">
            <Link to="/courses" className="flex items-center gap-2">
              <span>Kurse entdecken</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Kontakt aufnehmen</Link>
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-primary">34</div>
            <p className="text-sm text-muted-foreground mt-2">Stunden Video</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-primary">100%</div>
            <p className="text-sm text-muted-foreground mt-2">Online</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-primary">500+</div>
            <p className="text-sm text-muted-foreground mt-2">Absolventen</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-primary">95%</div>
            <p className="text-sm text-muted-foreground mt-2">Erfolgsquote</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse">
        <div className="w-5 h-10 rounded-full border-2 border-primary/50 flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-slide-up"></div>
        </div>
        <span className="text-xs text-muted-foreground mt-2">Scrollen Sie nach unten</span>
      </div>
    </div>
  );
};

export default Hero;
