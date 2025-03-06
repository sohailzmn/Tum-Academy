import { ArrowLeft, BookOpen, Clock, Users, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Course1 = () => {
  const courseModules = [
    {
      id: "1",
      title: "Recht",
      description: "Umfassende rechtliche Grundlagen für Taxi- und Mietwagenunternehmer",
      subModules: [
        {
          id: "1.1",
          title: "Personenbeförderungsrecht",
          content: [
            "Ordnungsrahmen für den Taxen- und Mietwagenverkehr",
            "Regelungen für den Zugang zum Beruf",
            "Kontrollen und Änderung von Zuwiderhandlungen",
            "Regelungen für die Tarifbildung"
          ],
          sources: [
            "Personenbeförderungsgesetz (PBefG)",
            "Berufszugangsverordnung (PBZugV)",
            "BOKraft",
            "Allgemeine Verwaltungsvorschrift zur PBefG"
          ]
        },
        {
          id: "1.2",
          title: "Gewerberecht",
          content: [
            "Allgemeine Regelungen zur Unternehmensgründung",
            "Gewerbeanmeldung und -ausübung",
            "Voraussetzungen und Pflichten"
          ],
          sources: ["Gewerbeordnung (GewO)"]
        },
        {
          id: "1.3",
          title: "Straßenverkehrsrecht",
          content: [
            "Qualifikationen des Fahrpersonals",
            "Führerschein und Fahrerlaubnis",
            "Ärztliche Bescheinigungen",
            "Fahrlehrbefähigung zur Fahrgastbeförderung",
            "Kindersicherungspflicht"
          ],
          sources: [
            "Fahrerlaubnis-Verordnung (FeV)",
            "Straßenverkehrsgesetz (StVG)",
            "StVZO",
            "SIVO"
          ]
        },
        {
          id: "1.4",
          title: "Arbeitsrecht",
          content: [
            "Arbeitsverträge im Taxen- und Mietwagengewerbe",
            "Arbeitsbedingungen und -zeiten",
            "Urlaubsanspruch und Vergütung",
            "Lenk- und Ruhezeiten"
          ],
          sources: [
            "Arbeitszeitgesetz (ArbZG)",
            "Fahrpersonalgesetz (FPersG)",
            "Kündigungsschutzgesetz",
            "Bundesurlaubsgesetz"
          ]
        },
        {
          id: "1.5",
          title: "Sozialversicherungsrecht",
          content: [
            "Sozialversicherungspflicht",
            "Arbeitgeberpflichten",
            "Meldepflichten",
            "Beitragsabführung"
          ],
          sources: ["Sozialgesetzbuch (SGB)"]
        },
        {
          id: "1.6",
          title: "Beförderungsvertragsrecht",
          content: [
            "Vertragstypen im Taxen- und Mietwagenverkehr",
            "Vertragsgestaltung und -verhandlung",
            "Haftung und Versicherung"
          ],
          sources: [
            "Bürgerliches Gesetzbuch (BGB)",
            "Personenbeförderungsgesetz (PBefG)"
          ]
        },
        {
          id: "1.7",
          title: "Handelsrecht",
          content: [
            "Rechtsformen von Handelsgesellschaften",
            "Gründungsvorschriften",
            "Unternehmensführung"
          ],
          sources: ["Handelsgesetzbuch (HGB)"]
        },
        {
          id: "1.8",
          title: "Steuerrecht",
          content: [
            "Umsatzsteuer auf Verkehrsleistungen",
            "Rechnungsstellung und Quittungen",
            "Kraftfahrzeugsteuer",
            "Einkommensteuer",
            "Gewerbesteuer"
          ],
          sources: [
            "Umsatzsteuergesetz (UStG)",
            "Einkommensteuergesetz (EStG)",
            "Kraftfahrzeugsteuergesetz"
          ]
        }
      ]
    },
    {
      id: "2",
      title: "Kaufmännische und finanzielle Führung des Unternehmens",
      description: "Betriebswirtschaftliche Grundlagen und Finanzmanagement",
      subModules: [
        {
          id: "2.1",
          title: "Zahlungsverkehr",
          content: [
            "Zahlungsmittel und -verfahren",
            "Kreditformen und Finanzierung",
            "Finanz- und Rentabilitätsanalyse",
            "Liquiditätsplanung"
          ],
          sources: [
            "Verschiedene Zahlungssysteme",
            "Finanzierungsmodelle",
            "Betriebswirtschaftliche Kennzahlen"
          ]
        },
        {
          id: "2.2",
          title: "Kostenrechnung",
          content: [
            "Kostenarten und -strukturen",
            "Fixe und variable Kosten",
            "Betriebskosten und Abschreibungen",
            "Kilometerkostenrechnung"
          ],
          sources: [
            "Kostenrechnungssysteme",
            "Deckungsbeitragsrechnung"
          ]
        },
        {
          id: "2.3",
          title: "Beförderungsentgelte und -bedingungen",
          content: [
            "Tarifkalkulation",
            "Preisgestaltung",
            "Rabattsysteme",
            "Abrechnungsmodalitäten"
          ],
          sources: [
            "Taxitarife",
            "Kalkulationsgrundlagen"
          ]
        },
        {
          id: "2.4",
          title: "Beförderungsdokumente",
          content: [
            "Erforderliche Dokumente",
            "Aufbewahrungsfristen",
            "Dokumentenmanagement"
          ],
          sources: [
            "Gesetzliche Vorschriften",
            "Dokumentationsrichtlinien"
          ]
        },
        {
          id: "2.5",
          title: "Buchführung",
          content: [
            "Geschäftsbücher und Aufbewahrung",
            "Kassenbuchführung",
            "Einnahmen-Überschuss-Rechnung",
            "Bilanzierung"
          ],
          sources: [
            "Handelsgesetzbuch",
            "Abgabenordnung",
            "Steuerrecht"
          ]
        },
        {
          id: "2.6",
          title: "Versicherungswesen",
          content: [
            "Pflichtversicherungen",
            "Kfz-Haftpflichtversicherung",
            "Betriebshaftpflicht",
            "Personenversicherungen"
          ],
          sources: [
            "Versicherungsvertragsgesetz",
            "Pflichtversicherungsgesetz"
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
          
          {/* Course Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold mb-4">Taxi-Unternehmer Komplettkurs</h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-primary" />
                  <span>34 Stunden</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen size={20} className="text-primary" />
                  <span>8 Module</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-primary" />
                  <span>328 Teilnehmer</span>
                </div>
              </div>
              
              <div className="flex gap-2 mb-4">
                <Badge variant="secondary">Anfänger</Badge>
                <Badge variant="secondary">Deutsch</Badge>
                <Badge variant="secondary">Zertifiziert</Badge>
              </div>
              
              <Alert className="mb-6 bg-amber-50 text-amber-800 border-amber-200">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>In Entwicklung</AlertTitle>
                <AlertDescription>
                  Dieser Kurs befindet sich derzeit in der Entwicklungsphase und steht kostenlos zur Verfügung.
                </AlertDescription>
              </Alert>
            </div>
            
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="text-3xl font-bold mb-6 text-primary">Kostenlos</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <BookOpen size={18} className="text-primary" />
                    <span>Lebenslanger Zugriff</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Users size={18} className="text-primary" />
                    <span>Persönliche Betreuung</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock size={18} className="text-primary" />
                    <span>Flexibles Lernen</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link to="/courses/course1/content">Kostenlos einschreiben</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Course Description */}
          <div className="mb-12 bg-card rounded-lg p-8 border">
            <h2 className="text-2xl font-bold mb-4">Kursbeschreibung</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Der <strong>Taxi-Unternehmer Komplettkurs</strong> ist die umfassendste Bildungslösung für alle, die ein erfolgreiches Taxi- oder Mietwagenunternehmen gründen und führen möchten. Dieser Kurs bereitet Sie optimal auf die IHK-Prüfung vor und vermittelt alle notwendigen Kenntnisse für den Betrieb eines erfolgreichen Unternehmens im Personenbeförderungsgewerbe.
              </p>
              <p>
                Der Kurs orientiert sich an den Sachgebieten und Prüfungsinhalten gemäß Anlage 3 der Berufszugangsverordnung für den Straßenpersonenverkehr (PBZugV) und deckt alle relevanten rechtlichen und betriebswirtschaftlichen Bereiche ab.
              </p>
              <p>
                <strong>Was macht diesen Kurs besonders?</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Praxisnaher Unterricht von erfahrenen Branchenexperten</li>
                <li>Umfassendes Kursmaterial inklusive Übungsfragen und Prüfungssimulationen</li>
                <li>Interaktive Lernmodule mit Fallbeispielen aus dem Taxi- und Mietwagengewerbe</li>
                <li>Persönliches Feedback zu Ihren Fortschritten</li>
                <li>Rechtliches und betriebswirtschaftliches Know-how aus einer Hand</li>
                <li>Flexible Lernzeiten dank Online-Zugang zu allen Materialien</li>
              </ul>
              <p>
                Nach Abschluss dieses Kurses sind Sie nicht nur optimal auf die IHK-Prüfung vorbereitet, sondern verfügen auch über das notwendige Wissen, um Ihr eigenes Taxi- oder Mietwagenunternehmen erfolgreich zu führen. Von rechtlichen Grundlagen über finanzielle Planung bis hin zu betrieblichen Abläufen – dieser Kurs macht Sie zum Experten in allen relevanten Bereichen.
              </p>
            </div>
          </div>
          
          {/* Course Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Kursinhalt</h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {courseModules.map((module) => (
                  <AccordionItem key={module.id} value={module.id} className="bg-card rounded-lg border">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex flex-col items-start">
                        <div className="font-semibold">{module.title}</div>
                        <div className="text-sm text-muted-foreground">{module.description}</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-6">
                        {module.subModules.map((subModule) => (
                          <div key={subModule.id} className="space-y-3">
                            <h4 className="font-semibold">{subModule.id} {subModule.title}</h4>
                            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                              {subModule.content.map((item, index) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                            <div className="mt-2">
                              <div className="text-sm font-semibold">Rechtsquellen und Hinweise:</div>
                              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                {subModule.sources.map((source, index) => (
                                  <li key={index}>{source}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Was Sie lernen werden</h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1">✓</div>
                      <div>Umfassendes Verständnis aller relevanten Rechtsgebiete</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1">✓</div>
                      <div>Praktische Anwendung der kaufmännischen Grundlagen</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1">✓</div>
                      <div>Professionelles Finanzmanagement im Taxigewerbe</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1">✓</div>
                      <div>Effiziente Unternehmensführung und -organisation</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1">✓</div>
                      <div>Optimale Vorbereitung auf die IHK-Prüfung</div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Course1; 