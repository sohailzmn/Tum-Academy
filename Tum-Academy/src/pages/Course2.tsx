import { ArrowLeft, BookOpen, Clock, Users, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Course2 = () => {
  const courseModules = [
    {
      id: "1",
      title: "Betriebswirtschaftliche Grundlagen",
      description: "Grundlegende betriebswirtschaftliche Konzepte für Taxi- und Mietwagenunternehmer",
      subModules: [
        {
          id: "1.1",
          title: "Kostenrechnung und Kalkulation",
          content: [
            "Kostenarten und Kostenstellen",
            "Fixkosten und variable Kosten",
            "Kalkulation von Fahrpreisen",
            "Break-Even-Analyse"
          ],
          sources: [
            "Betriebswirtschaftliche Grundlagen",
            "Kalkulationshandbuch",
            "Praxisbeispiele"
          ]
        },
        {
          id: "1.2",
          title: "Preisgestaltung",
          content: [
            "Tarifgestaltung im Taxigewerbe",
            "Preisstrategien für Mietwagen",
            "Rabattsysteme",
            "Sonderfahrten und Pauschalen"
          ],
          sources: [
            "Preiskalkulationsmodelle",
            "Marktstudien",
            "Tarifverordnungen"
          ]
        },
        {
          id: "1.3",
          title: "Wirtschaftlichkeitsanalyse",
          content: [
            "Break-Even-Berechnung",
            "Rentabilitätsanalyse",
            "Liquiditätsplanung",
            "Kennzahlenanalyse"
          ],
          sources: [
            "BWL-Handbuch",
            "Controllinginstrumente",
            "Praxisbeispiele"
          ]
        }
      ]
    },
    {
      id: "2",
      title: "Finanzierung und Investition",
      description: "Finanzierungsmöglichkeiten und Investitionsplanung",
      subModules: [
        {
          id: "2.1",
          title: "Investitionsplanung",
          content: [
            "Fahrzeugfinanzierung",
            "Investitionsrechnung",
            "Amortisationsberechnung",
            "Vergleich verschiedener Finanzierungsmodelle"
          ],
          sources: [
            "Investitionshandbuch",
            "Finanzierungsleitfaden",
            "Praxisbeispiele"
          ]
        },
        {
          id: "2.2",
          title: "Finanzierungsarten",
          content: [
            "Eigenkapitalfinanzierung",
            "Fremdkapitalfinanzierung",
            "Leasing vs. Kauf",
            "Alternative Finanzierungsmodelle"
          ],
          sources: [
            "Finanzierungsratgeber",
            "Bankenvergleiche",
            "Leasingkonzepte"
          ]
        },
        {
          id: "2.3",
          title: "Fördermöglichkeiten",
          content: [
            "Öffentliche Förderprogramme",
            "Zuschüsse für E-Mobilität",
            "Regionale Förderungen",
            "Antragstellung und Dokumentation"
          ],
          sources: [
            "Förderdatenbank",
            "Förderrichtlinien",
            "Antragsunterlagen"
          ]
        }
      ]
    },
    {
      id: "3",
      title: "Marketing und Kundengewinnung",
      description: "Strategien zur Kundenakquise und -bindung",
      subModules: [
        {
          id: "3.1",
          title: "Marketingstrategien",
          content: [
            "Zielgruppenanalyse",
            "Marketingmix",
            "Online-Marketing",
            "Lokale Werbung"
          ],
          sources: [
            "Marketinghandbuch",
            "Branchenanalysen",
            "Best Practices"
          ]
        },
        {
          id: "3.2",
          title: "Kundenservice",
          content: [
            "Servicequalität",
            "Kundenkommunikation",
            "Beschwerdemanagement",
            "Kundenbindungsprogramme"
          ],
          sources: [
            "Servicestandards",
            "Kommunikationsleitfaden",
            "Fallstudien"
          ]
        },
        {
          id: "3.3",
          title: "Digitales Marketing",
          content: [
            "Social Media Marketing",
            "Website-Optimierung",
            "Online-Buchungssysteme",
            "App-Marketing"
          ],
          sources: [
            "Online-Marketing-Guide",
            "Social Media Leitfaden",
            "Digitale Tools"
          ]
        }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="py-16 mt-8">
        <div className="container">
          {/* Breadcrumb & Back Button */}
          <div className="flex items-center gap-4 mb-8">
            <Button asChild variant="outline" size="sm" className="hover:bg-gray-100 focus:ring-2 focus:ring-primary">
              <Link to="/courses" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                <span>Zurück zur Kursübersicht</span>
              </Link>
            </Button>
          </div>

          {/* Development Status Alert */}
          <Alert className="mb-8">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Dieser Kurs befindet sich noch in der Entwicklung und ist derzeit kostenlos verfügbar.
            </AlertDescription>
          </Alert>
          
          {/* Course Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-4">Betriebswirtschaft für Taxi- und Mietwagenunternehmer</h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-primary" />
                  <span>6.5 Stunden</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={20} className="text-primary" />
                  <span>3 Module</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-primary" />
                  <span>Für Einsteiger und Fortgeschrittene</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>Betriebswirtschaft</Badge>
                <Badge variant="secondary">Finanzierung</Badge>
                <Badge variant="secondary">Marketing</Badge>
              </div>
            </div>

            {/* Course Card */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="text-3xl font-bold text-primary">
                      Kostenlos
                    </div>
                    <Button className="w-full" asChild>
                      <Link to="/courses/course2/content">
                        Kostenlos einschreiben
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Course Description */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Kursbeschreibung</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Dieser Kurs vermittelt Ihnen das notwendige betriebswirtschaftliche Know-how für die erfolgreiche Führung eines Taxi- oder Mietwagenunternehmens. Sie lernen die wichtigsten Aspekte der Unternehmensführung, von der Kostenrechnung bis zum Marketing.
              </p>
              <p className="mb-4">
                Der Kurs ist speziell auf die Anforderungen der IHK-Prüfung für Taxi- und Mietwagenunternehmer ausgerichtet und behandelt alle relevanten betriebswirtschaftlichen Themen.
              </p>
              <h3 className="text-xl font-semibold mb-3">Das erwartet Sie:</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Praxisnahe Beispiele aus dem Taxi- und Mietwagengewerbe</li>
                <li>Konkrete Berechnungsbeispiele für Ihre Kalkulation</li>
                <li>Aktuelle Marketingstrategien für Ihr Unternehmen</li>
                <li>Übungsaufgaben und Prüfungsvorbereitung</li>
              </ul>
            </div>
          </section>

          {/* Course Content */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Kursinhalt</h2>
            <div className="grid gap-4">
              {courseModules.map((module) => (
                <Accordion key={module.id} type="single" collapsible className="bg-card">
                  <AccordionItem value={module.id}>
                    <AccordionTrigger className="px-4">
                      <div>
                        <div className="text-left font-semibold">
                          {module.title}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {module.description}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4">
                      <div className="grid gap-4">
                        {module.subModules.map((subModule) => (
                          <div key={subModule.id}>
                            <h4 className="font-medium mb-2">{subModule.title}</h4>
                            <div className="grid gap-4 pl-4">
                              <div>
                                <h5 className="text-sm font-medium text-muted-foreground mb-2">Inhalte:</h5>
                                <ul className="list-disc list-inside text-sm pl-2">
                                  {subModule.content.map((item, index) => (
                                    <li key={index}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="text-sm font-medium text-muted-foreground mb-2">Quellen:</h5>
                                <ul className="list-disc list-inside text-sm pl-2">
                                  {subModule.sources.map((source, index) => (
                                    <li key={index}>{source}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Häufig gestellte Fragen</h2>
            <div className="grid gap-4">
              <Accordion type="single" collapsible className="bg-card">
                <AccordionItem value="faq-1">
                  <AccordionTrigger className="px-4">
                    Wie lange habe ich Zugriff auf den Kurs?
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    Sie haben unbegrenzten Zugriff auf alle Kursinhalte, sobald Sie sich eingeschrieben haben.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-2">
                  <AccordionTrigger className="px-4">
                    Erhalte ich ein Zertifikat?
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    Nach erfolgreichem Abschluss des Kurses erhalten Sie ein digitales Zertifikat.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="faq-3">
                  <AccordionTrigger className="px-4">
                    Wie sind die Kurse aufgebaut?
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    Die Kurse bestehen aus Video-Lektionen, Lesematerial und interaktiven Quizzes. Sie können in Ihrem eigenen Tempo lernen.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* Contact Form */}
          <section className="mb-12">
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
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Course2; 