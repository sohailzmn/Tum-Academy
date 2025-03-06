import { ArrowLeft, BookOpen, Clock, Users, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Course3 = () => {
  const courseModules = [
    {
      id: "1",
      title: "Qualitätsmanagement",
      description: "Qualitätssicherung und Serviceoptimierung im Taxi- und Mietwagengewerbe",
      subModules: [
        {
          id: "1.1",
          title: "Servicestandards",
          content: [
            "Definition von Qualitätsstandards",
            "Kundenorientierung",
            "Serviceabläufe und -prozesse",
            "Qualitätskontrolle"
          ],
          sources: [
            "Qualitätsmanagement-Handbuch",
            "Servicestandards im Personenverkehr",
            "Best Practices"
          ]
        },
        {
          id: "1.2",
          title: "Beschwerdemanagement",
          content: [
            "Professionelle Beschwerdebearbeitung",
            "Konfliktlösung",
            "Dokumentation von Beschwerden",
            "Präventive Maßnahmen"
          ],
          sources: [
            "Beschwerdemanagement-Leitfaden",
            "Konfliktlösungsstrategien",
            "Fallbeispiele"
          ]
        },
        {
          id: "1.3",
          title: "Qualitätsverbesserung",
          content: [
            "Feedback-Systeme",
            "Kontinuierlicher Verbesserungsprozess",
            "Mitarbeiterschulung",
            "Qualitätsaudits"
          ],
          sources: [
            "Prozessoptimierung",
            "Qualitätsmanagement-Tools",
            "Auditierung"
          ]
        }
      ]
    },
    {
      id: "2",
      title: "Personalmanagement",
      description: "Effektive Mitarbeiterführung und Personalentwicklung",
      subModules: [
        {
          id: "2.1",
          title: "Mitarbeiterführung",
          content: [
            "Führungsstile und -techniken",
            "Motivation und Anreizsysteme",
            "Teambuilding",
            "Konfliktmanagement"
          ],
          sources: [
            "Personalführung",
            "Motivationstheorien",
            "Führungsleitfaden"
          ]
        },
        {
          id: "2.2",
          title: "Personalentwicklung",
          content: [
            "Schulungskonzepte",
            "Weiterbildungsprogramme",
            "Leistungsbeurteilung",
            "Karriereplanung"
          ],
          sources: [
            "Personalentwicklungskonzepte",
            "Schulungshandbuch",
            "Beurteilungssysteme"
          ]
        },
        {
          id: "2.3",
          title: "Einsatzplanung",
          content: [
            "Schichtplanung",
            "Urlaubsmanagement",
            "Vertretungsregelungen",
            "Arbeitszeitmodelle"
          ],
          sources: [
            "Personaleinsatzplanung",
            "Arbeitszeitgesetze",
            "Planungstools"
          ]
        }
      ]
    },
    {
      id: "3",
      title: "Digitalisierung",
      description: "Moderne Technologien und digitale Transformation",
      subModules: [
        {
          id: "3.1",
          title: "Digitale Buchungssysteme",
          content: [
            "Online-Buchungsplattformen",
            "App-basierte Vermittlung",
            "Schnittstellen und Integration",
            "Digitale Abrechnung"
          ],
          sources: [
            "Digitale Buchungssysteme",
            "API-Dokumentationen",
            "Implementierungsleitfaden"
          ]
        },
        {
          id: "3.2",
          title: "Flottenmanagement",
          content: [
            "GPS-Tracking",
            "Routenoptimierung",
            "Fahrzeugtelematik",
            "Wartungsmanagement"
          ],
          sources: [
            "Flottenmanagement-Systeme",
            "GPS-Technologien",
            "Telematik-Lösungen"
          ]
        },
        {
          id: "3.3",
          title: "Digitale Zahlungssysteme",
          content: [
            "EC- und Kreditkartenzahlung",
            "Mobile Payment",
            "Digitale Rechnungsstellung",
            "Abrechnungssysteme"
          ],
          sources: [
            "Payment-Systeme",
            "Digitale Bezahllösungen",
            "Sicherheitsstandards"
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
              <h1 className="text-4xl font-bold mb-4">Qualitätsmanagement und moderne Technologien</h1>
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
                <Badge>Qualitätsmanagement</Badge>
                <Badge variant="secondary">Personalführung</Badge>
                <Badge variant="secondary">Digitalisierung</Badge>
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
                      <Link to="/courses/course3/content">
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
                Dieser Kurs konzentriert sich auf die praktischen Aspekte der modernen Unternehmensführung im Taxi- und Mietwagengewerbe. Sie lernen, wie Sie durch effektives Qualitätsmanagement und den Einsatz moderner Technologien Ihr Unternehmen zukunftsfähig gestalten.
              </p>
              <p className="mb-4">
                Der Kurs vermittelt praxisnahes Wissen für die erfolgreiche Führung eines modernen Taxi- oder Mietwagenunternehmens und bereitet Sie auf die entsprechenden Teile der IHK-Prüfung vor.
              </p>
              <h3 className="text-xl font-semibold mb-3">Das erwartet Sie:</h3>
              <ul className="list-disc list-inside mb-4">
                <li>Moderne Methoden des Qualitätsmanagements</li>
                <li>Effektive Personalführung und -entwicklung</li>
                <li>Einführung in digitale Technologien und Systeme</li>
                <li>Praktische Übungen und Fallstudien</li>
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

export default Course3; 