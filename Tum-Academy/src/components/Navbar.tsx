import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogIn, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Check if user is logged in (would be replaced with actual auth logic)
  const isLoggedIn = localStorage.getItem("user") !== null;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/90 backdrop-blur-md py-3 shadow-md" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-xl">
            <span className="text-blue-600">TUM</span>
            <span className="text-foreground">-Academy</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              isActive("/") ? "text-primary" : "text-foreground/80"
            }`}
          >
            Startseite
          </Link>
          <Link
            to="/courses"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              isActive("/courses") ? "text-primary" : "text-foreground/80"
            }`}
          >
            Kurse
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              isActive("/about") ? "text-primary" : "text-foreground/80"
            }`}
          >
            Über uns
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-medium hover:text-primary transition-colors ${
              isActive("/contact") ? "text-primary" : "text-foreground/80"
            }`}
          >
            Kontakt
          </Link>
        </nav>

        {/* Auth/Profile Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <Button asChild variant="ghost" size="sm">
              <Link to="/dashboard" className="flex items-center gap-2">
                <User size={16} />
                <span>Dashboard</span>
              </Link>
            </Button>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm">
                <Link to="/login">Anmelden</Link>
              </Button>
              <Button asChild size="sm">
                <Link to="/register" className="flex items-center gap-2">
                  <LogIn size={16} />
                  <span>Registrieren</span>
                </Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-b border-border animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className={`text-sm font-medium px-4 py-2 rounded-md hover:bg-accent ${
                isActive("/") ? "bg-accent text-primary" : ""
              }`}
            >
              Startseite
            </Link>
            <Link
              to="/courses"
              className={`text-sm font-medium px-4 py-2 rounded-md hover:bg-accent ${
                isActive("/courses") ? "bg-accent text-primary" : ""
              }`}
            >
              Kurse
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium px-4 py-2 rounded-md hover:bg-accent ${
                isActive("/about") ? "bg-accent text-primary" : ""
              }`}
            >
              Über uns
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium px-4 py-2 rounded-md hover:bg-accent ${
                isActive("/contact") ? "bg-accent text-primary" : ""
              }`}
            >
              Kontakt
            </Link>
            <div className="pt-2 border-t border-border flex flex-col space-y-2">
              {isLoggedIn ? (
                <Button asChild size="sm">
                  <Link to="/dashboard" className="w-full">
                    Dashboard
                  </Link>
                </Button>
              ) : (
                <>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/login" className="w-full">
                      Anmelden
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link to="/register" className="w-full">
                      Registrieren
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
