import { ArrowRight, BookOpen, CheckCircle, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CourseCard, { CourseType } from "@/components/CourseCard";
import Testimonial, { TestimonialType } from "@/components/Testimonial";
import PricingCard, { PricingType } from "@/components/PricingCard";

const Index = () => {
  // Featured courses
  const featuredCourses: CourseType[] = [
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
      id: "course3",
      title: "Betriebswirtschaft für Transportgewerbe",
      description: "Vertiefte betriebswirtschaftliche Kenntnisse für die Taxi- und Mietwagenbranche.",
      duration: "12 Stunden",
      students: 147,
      modules: 4,
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
      price: 999
    }
  ];

  // Testimonials
  const testimonials: TestimonialType[] = [
    {
      id: "1",
      name: "Michael Schmidt",
      role: "Taxiunternehmer",
      content: "Dank des Komplettkurses der TUM-Academy konnte ich mein Taxi-Unternehmen erfolgreich gründen. Die Inhalte sind praxisnah und verständlich erklärt.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      id: "2",
      name: "Sandra Müller",
      role: "Mietwagenunternehmerin",
      content: "Die persönliche Betreuung im Premium-Kurs war hervorragend. Das Feedback hat mir geholfen, mich optimal auf die Prüfung vorzubereiten.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      id: "3",
      name: "Thomas Becker",
      role: "Taxiunternehmer",
      content: "Die Flexibilität des Online-Kurses hat es mir ermöglicht, neben meinem Job zu lernen. Die Inhalte sind praxisnah und aktuell.",
      avatar: "https://randomuser.me/api/portraits/men/62.jpg",
      rating: 5
    }
  ];

  // Pricing options
  const pricingOptions: PricingType[] = [
    {
      id: "1",
      title: "Einstiegs-Paket",
      price: 399,
      description: "Die kostengünstige Option für den ersten Schritt in die Selbstständigkeit",
      features: [
        "24 Stunden On-Demand-Video",
        "6 Monate Zugriff auf Kursinhalte",
        "Grundlegende Kursunterlagen",
        "Zugang zur Community",
        "E-Mail-Support"
      ]
    },
    {
      id: "2",
      title: "Standard-Kursplan",
      price: 499,
      description: "Der perfekte Einstieg für angehende Taxi- und Mietwagenunternehmer",
      features: [
        "34 Stunden On-Demand-Video",
        "Lebenslanger Zugriff auf alle Kursinhalte",
        "Q&A-Sitzungen nach jedem Modul",
        "Downloadbare Kursunterlagen",
        "Zugang zur Community"
      ]
    },
    {
      id: "3",
      title: "Premium-Paket",
      price: 999,
      description: "Umfassende Vorbereitung mit persönlicher Betreuung",
      features: [
        "Alles aus dem Standard-Kursplan",
        "Persönliche 1:1 Beratung (3 Stunden)",
        "Prüfungsvorbereitung & Feedback",
        "Geschäftsplanvorlage & Überprüfung",
        "Vorrang-Support"
      ],
      isPopular: true
    }
  ];

  // Course features
  const courseFeatures = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Umfassende Inhalte",
      description: "34 Stunden Videoinhalt, der alle relevanten Themen für Taxi- und Mietwagenunternehmer abdeckt."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Praxisnahe Beispiele",
      description: "Lernmaterialien mit realen Fallstudien und praktischen Anwendungsbeispielen."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Flexibles Lernen",
      description: "Lernen Sie in Ihrem eigenen Tempo und greifen Sie jederzeit auf die Inhalte zu."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Investition in die Zukunft",
      description: "Erwerben Sie die Fähigkeiten und Kenntnisse, um ein erfolgreiches Unternehmen zu führen."
    }
  ];

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <section className="py-20 bg-card">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Warum <span className="text-blue-600">TUM</span>-Academy wählen?</h2>
              <p className="text-muted-foreground">
                Unsere Kurse bieten eine umfassende Vorbereitung mit Fokus auf praxisnahe Inhalte und flexibles Lernen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Umfassende Bildung</h3>
                <p className="text-muted-foreground">
                  Unsere Kurse vermitteln rechtliche, betriebswirtschaftliche und praktische Kenntnisse für Ihren Erfolg.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexibles Lernen</h3>
                <p className="text-muted-foreground">
                  Lernen Sie in Ihrem eigenen Tempo mit 34 Stunden On-Demand-Videos und lebenslangem Zugriff.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Persönliche Betreuung</h3>
                <p className="text-muted-foreground">
                  Q&A-Sitzungen nach jedem Modul und optionale persönliche Meetings für individuelles Feedback.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Courses Section */}
        <section className="py-20">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">Unsere Kurse</h2>
                <p className="text-muted-foreground">
                  Entdecken Sie unsere spezialisierten Kurse für die Taxi- und Mietwagenbranche
                </p>
              </div>
              <Button asChild variant="outline" className="mt-4 md:mt-0 group">
                <Link to="/courses" className="flex items-center gap-2">
                  <span>Alle Kurse anzeigen</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course, index) => (
                <div 
                  key={course.id} 
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-20 bg-card">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Preise & Optionen</h2>
              <p className="text-muted-foreground">
                Wählen Sie den Plan, der am besten zu Ihren Bedürfnissen passt
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingOptions.map((pricing, index) => (
                <div 
                  key={pricing.id} 
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PricingCard pricing={pricing} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Was unsere Teilnehmer sagen</h2>
              <p className="text-muted-foreground">
                Erfahrungen von Absolventen, die mit unseren Kursen erfolgreich wurden
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Testimonial testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-20 bg-primary/10">
          <div className="container text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Starten Sie Ihre Karriere als Unternehmer</h2>
            <p className="text-muted-foreground mb-8">
              Melden Sie sich noch heute an und machen Sie den ersten Schritt zu Ihrem eigenen erfolgreichen Taxi- oder Mietwagenunternehmen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="group">
                <Link to="/courses" className="flex items-center gap-2">
                  <span>Jetzt mit Kurs beginnen</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Beratungsgespräch vereinbaren</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
