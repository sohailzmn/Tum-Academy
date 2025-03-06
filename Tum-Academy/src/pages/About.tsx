import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Über <span className="text-blue-600">TUM</span>-Academy
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Wir sind Ihre spezialisierte Bildungsplattform für die Vorbereitung auf den Taxi- und Mietwagen-Unternehmer-Schein.
            </p>
          </div>
          
          {/* Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-bold mb-4">Unsere Mission</h2>
              <p className="text-muted-foreground mb-6">
                Die <span className="text-blue-600 font-semibold">TUM</span>-Academy wurde mit dem Ziel gegründet, angehenden Unternehmern im Transportgewerbe eine fundierte, praxisnahe Ausbildung zu bieten. Wir glauben daran, dass gut ausgebildete Unternehmer den Grundstein für eine qualitativ hochwertige Transportbranche legen.
              </p>
              <p className="text-muted-foreground">
                Durch unsere spezialisierten Online-Kurse ermöglichen wir es Ihnen, flexibel und selbstbestimmt zu lernen und sich optimal auf die Herausforderungen der Selbstständigkeit vorzubereiten.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4">Unsere Kernwerte</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Praxisnähe</span>
                    <p className="text-sm text-muted-foreground">Unsere Inhalte sind direkt auf die Anforderungen in der Praxis ausgerichtet.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Qualität</span>
                    <p className="text-sm text-muted-foreground">Wir legen größten Wert auf hochwertige, aktuelle und verständliche Lehrmaterialien.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Flexibilität</span>
                    <p className="text-sm text-muted-foreground">Lernen Sie in Ihrem eigenen Tempo, wann und wo es für Sie am besten passt.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Persönliche Betreuung</span>
                    <p className="text-sm text-muted-foreground">Wir unterstützen Sie durch Q&A-Sessions und individuelle Beratung.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-2">Unser Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ein Team aus erfahrenen Branchenexperten und Pädagogen sorgt dafür, dass Sie optimal auf Ihre Zukunft als Unternehmer vorbereitet sind.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="https://randomuser.me/api/portraits/men/41.jpg" 
                    alt="Dr. Thomas Müller" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Dr. Thomas Müller</h3>
                <p className="text-sm text-primary mb-2">Gründer & Leiter</p>
                <p className="text-sm text-muted-foreground">
                  Ehemaliger Taxiunternehmer mit über 15 Jahren Erfahrung in der Branche und Doktor der Wirtschaftswissenschaften.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="https://randomuser.me/api/portraits/women/65.jpg" 
                    alt="Sabine Weber" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Sabine Weber</h3>
                <p className="text-sm text-primary mb-2">Rechtsexpertin</p>
                <p className="text-sm text-muted-foreground">
                  Fachanwältin für Verkehrsrecht mit Spezialisierung auf das Personenbeförderungsgesetz.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Markus Schmidt" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">Markus Schmidt</h3>
                <p className="text-sm text-primary mb-2">BWL-Dozent</p>
                <p className="text-sm text-muted-foreground">
                  Steuerberater und Unternehmensberater mit Fokus auf kleine und mittelständische Unternehmen im Transportsektor.
                </p>
              </div>
            </div>
          </div>
          
          {/* Our Approach Section */}
          <div className="bg-muted/30 rounded-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Unser Ansatz</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Wir glauben an die Verbindung von theoretischem Wissen und praktischer Anwendung.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold mb-2">Praxisorientierte Inhalte</h3>
                <p className="text-muted-foreground">
                  Unsere Kursinhalte basieren auf realen Erfahrungen und praktischen Beispielen. Sie lernen nicht nur die Theorie, sondern auch deren Anwendung im Alltag eines Taxi- oder Mietwagenunternehmers.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold mb-2">Flexibles Lernkonzept</h3>
                <p className="text-muted-foreground">
                  Durch unsere Online-Plattform können Sie in Ihrem eigenen Tempo lernen. Die Module bauen aufeinander auf und werden erst freigeschaltet, wenn Sie bereit für den nächsten Schritt sind.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold mb-2">Persönliche Betreuung</h3>
                <p className="text-muted-foreground">
                  Nach jedem Modul haben Sie die Möglichkeit, in Q&A-Sessions Fragen zu stellen. Im Premium-Kurs bieten wir zusätzlich individuelle Beratungstermine an.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold mb-2">Aktuelles Wissen</h3>
                <p className="text-muted-foreground">
                  Die Transportbranche unterliegt ständigen Veränderungen. Wir aktualisieren unsere Inhalte regelmäßig, damit Sie immer auf dem neuesten Stand sind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default About; 