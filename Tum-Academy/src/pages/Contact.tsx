import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <>
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Kontakt <span className="text-blue-600">TUM</span>-Academy
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Wir sind für Sie da. Kontaktieren Sie uns bei Fragen zu unseren Kursen oder Ihrer Unternehmerausbildung.
            </p>
          </div>
          
          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card rounded-lg p-6 border border-border flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Telefon</h3>
              <p className="text-muted-foreground mb-4">
                Unsere Experten stehen Ihnen gerne telefonisch zur Verfügung.
              </p>
              <a 
                href="tel:+4989123456789" 
                className="text-primary hover:underline mt-auto"
              >
                +49 89 123 456 789
              </a>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">E-Mail</h3>
              <p className="text-muted-foreground mb-4">
                Senden Sie uns Ihre Anfrage per E-Mail. Wir antworten in der Regel innerhalb von 24 Stunden.
              </p>
              <a 
                href="mailto:info@tum-academy.de" 
                className="text-primary hover:underline mt-auto"
              >
                info@tum-academy.de
              </a>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Adresse</h3>
              <p className="text-muted-foreground mb-4">
                Besuchen Sie uns nach Terminvereinbarung in unserem Büro in München.
              </p>
              <address className="not-italic text-foreground mt-auto">
                Musterstraße 123<br />
                80331 München
              </address>
            </div>
          </div>
          
          
          
          {/* FAQ Section */}
          <div className="mt-20 mb-24">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-2">Häufig gestellte Fragen</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hier finden Sie Antworten auf die am häufigsten gestellten Fragen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold mb-2">Wie melde ich mich für einen Kurs an?</h3>
                <p className="text-sm text-muted-foreground">
                  Sie können sich direkt über unsere Website für einen Kurs anmelden. Wählen Sie den gewünschten Kurs, klicken Sie auf "Jetzt buchen" und folgen Sie den Anweisungen zur Registrierung und Zahlung.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold mb-2">Wie lange habe ich Zugriff auf die Kursinhalte?</h3>
                <p className="text-sm text-muted-foreground">
                  Sie erhalten lebenslangen Zugriff auf alle Kursinhalte, für die Sie sich angemeldet haben. So können Sie jederzeit auf das Material zurückgreifen, auch nach Abschluss des Kurses.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold mb-2">Werden die Kurse regelmäßig aktualisiert?</h3>
                <p className="text-sm text-muted-foreground">
                  Ja, wir aktualisieren unsere Kursinhalte regelmäßig, um sicherzustellen, dass sie den aktuellen gesetzlichen Bestimmungen und Branchenstandards entsprechen.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold mb-2">Wie funktionieren die Q&A-Sessions?</h3>
                <p className="text-sm text-muted-foreground">
                  Nach jedem Modul haben Sie die Möglichkeit, an einer Online-Fragerunde teilzunehmen. Hier können Sie Fragen stellen und erhalten Antworten von unseren Experten. Die Termine werden rechtzeitig bekannt gegeben.
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-bold mb-6">Schreiben Sie uns</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full h-10 px-3 py-2 text-sm border border-input rounded-md bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Ihr Name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      E-Mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full h-10 px-3 py-2 text-sm border border-input rounded-md bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Ihre E-Mail"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Betreff
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full h-10 px-3 py-2 text-sm border border-input rounded-md bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Betreff Ihrer Anfrage"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    className="w-full min-h-32 px-3 py-2 text-sm border border-input rounded-md bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Ihre Nachricht an uns"
                    required
                  />
                </div>
                
                <div className="text-right">
                  <Button type="submit">
                    Nachricht senden
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact; 