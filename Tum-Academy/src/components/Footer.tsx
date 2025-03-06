import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Twitter 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12 mt-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">
            <span className="text-blue-600">TUM</span>
            <span className="text-foreground">-Academy</span>
          </h3>
          <p className="text-sm text-muted-foreground">
            Ihre Ausbildungsplattform für den Taxi- und 
            Mietwagen-Unternehmer-Schein.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-semibold">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                Startseite
              </Link>
            </li>
            <li>
              <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                Kurse
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                Über uns
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-semibold">Rechtliches</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                AGB
              </Link>
            </li>
            <li>
              <Link to="/imprint" className="text-muted-foreground hover:text-primary transition-colors">
                Impressum
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-semibold">Kontakt</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
              <span className="text-muted-foreground">
                Rendsburger Str. 37<br />
                24537 Neumünster
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-primary shrink-0" />
              <a href="tel:+4915678421380" className="text-muted-foreground hover:text-primary transition-colors">
                +49 156 784 213 80
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-primary shrink-0" />
              <a href="mailto:info@tum-academy.de" className="text-muted-foreground hover:text-primary transition-colors">
                info@tum-academy.de
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>© {currentYear} <span className="text-blue-600">TUM</span><span>-Academy</span>. Alle Rechte vorbehalten.</p>
        <p className="mt-2 md:mt-0">
          Designed with <span className="text-primary">♥</span> by Sohail
        </p>
      </div>
    </footer>
  );
};

export default Footer;
