import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoPlayer from '@/components/ui/video-player';
import Quiz from '@/components/ui/quiz';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Download, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const modules = [
  {
    id: 1,
    title: "Einführung in das Taxi- und Mietwagengewerbe",
    videoUrls: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "https://www.youtube.com/embed/jNQXAC9IVRw"
    ],
    learningObjectives: [
      "Verstehen der grundlegenden Struktur des Taxi- und Mietwagengewerbes",
      "Kenntnis der wichtigsten rechtlichen Grundlagen",
      "Einblick in die Anforderungen an Unternehmer im Personenbeförderungsgewerbe"
    ],
    summary: "In diesem Modul lernen Sie die grundlegenden Aspekte des Taxi- und Mietwagengewerbes kennen. Wir behandeln die wichtigsten rechtlichen Rahmenbedingungen und geben einen Überblick über die Anforderungen an Unternehmer in diesem Bereich.",
    downloads: [
      {
        title: "Vorlesungsfolien",
        icon: "📄",
        filename: "modul1-vorlesungsfolien.pdf",
        size: "2.4 MB"
      },
      {
        title: "Gesetzestexte",
        icon: "📚",
        filename: "modul1-gesetzestexte.pdf",
        size: "1.8 MB"
      },
      {
        title: "Übungsaufgaben",
        icon: "✍️",
        filename: "modul1-uebungsaufgaben.pdf",
        size: "1.2 MB"
      }
    ]
  },
  {
    id: 2,
    title: "Rechtliche Grundlagen",
    videoUrls: [
      "https://www.youtube.com/embed/VIDEO_ID_1",
      "https://www.youtube.com/embed/VIDEO_ID_2"
    ],
    learningObjectives: [
      "Verständnis des Personenbeförderungsgesetzes (PBefG)",
      "Kenntnis der wichtigsten Vorschriften der BOKraft",
      "Überblick über relevante arbeits- und sozialrechtliche Bestimmungen",
      "Verständnis der steuerrechtlichen Anforderungen"
    ],
    summary: "Dieses Modul vermittelt Ihnen die wichtigsten rechtlichen Grundlagen für den Betrieb eines Taxi- oder Mietwagenunternehmens. Sie lernen die relevanten Gesetze und Verordnungen kennen und verstehen deren praktische Anwendung im Unternehmensalltag.",
    downloads: [
      {
        title: "Gesetzestexte PBefG",
        icon: "⚖️",
        filename: "modul2-pbefg.pdf",
        size: "3.1 MB"
      },
      {
        title: "BOKraft Übersicht",
        icon: "📋",
        filename: "modul2-bokraft.pdf",
        size: "2.2 MB"
      },
      {
        title: "Arbeitsrecht Zusammenfassung",
        icon: "👥",
        filename: "modul2-arbeitsrecht.pdf",
        size: "1.9 MB"
      },
      {
        title: "Steuerrechtliche Pflichten",
        icon: "📊",
        filename: "modul2-steuerrecht.pdf",
        size: "2.5 MB"
      }
    ]
  }
];

const CourseContent = () => {
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [currentModule, setCurrentModule] = useState(0);

  const handleQuizComplete = (passed: boolean) => {
    if (passed && !completedModules.includes(currentModule)) {
      setCompletedModules([...completedModules, currentModule]);
    }
  };

  const isModuleLocked = (moduleIndex: number) => {
    if (moduleIndex === 0) return false;
    return !completedModules.includes(moduleIndex - 1);
  };

  const handleModuleChange = (moduleIndex: number) => {
    if (!isModuleLocked(moduleIndex)) {
      setCurrentModule(moduleIndex);
    }
  };

  return (
    <>
      <Navbar />
      <main className="py-16 mt-8">
        <div className="container">
          {/* Navigation Bar */}
          <div className="flex items-center justify-between mb-8">
            <Button asChild variant="outline" size="sm" className="hover:bg-gray-100 focus:ring-2 focus:ring-primary">
              <Link to="/courses/course1" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                <span>Zurück zum Kurs</span>
              </Link>
            </Button>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => handleModuleChange(currentModule - 1)}
                disabled={currentModule === 0}
              >
                <ChevronLeft size={16} />
                Vorheriges Modul
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => handleModuleChange(currentModule + 1)}
                disabled={currentModule === modules.length - 1 || isModuleLocked(currentModule + 1)}
              >
                Nächstes Modul
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>

          {/* Module Selection */}
          <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
            {modules.map((module, index) => (
              <Button
                key={module.id}
                variant={currentModule === index ? "default" : "outline"}
                className="flex items-center gap-2 whitespace-nowrap"
                onClick={() => handleModuleChange(index)}
                disabled={isModuleLocked(index)}
              >
                {isModuleLocked(index) && <Lock size={16} />}
                Modul {module.id}: {module.title}
              </Button>
            ))}
          </div>

          <h1 className="text-4xl font-bold mb-8">
            Modul {modules[currentModule].id}: {modules[currentModule].title}
          </h1>
          
          {/* Video Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Vorlesung</h2>
            <div className="grid gap-6">
              {modules[currentModule].videoUrls.map((url, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video">
                    <iframe 
                      className="w-full h-full"
                      src={url}
                      title={`Video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </Card>
              ))}
            </div>
            
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Lernziele</h3>
                <ul className="list-disc list-inside space-y-2">
                  {modules[currentModule].learningObjectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Additional Information Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Zusätzliche Materialien</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Zusammenfassung</h3>
                  <p className="text-muted-foreground">
                    {modules[currentModule].summary}
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Downloads</h3>
                  <ul className="space-y-4">
                    {modules[currentModule].downloads.map((item) => (
                      <li key={item.filename} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span>{item.icon}</span>
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-muted-foreground">{item.size}</p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex items-center gap-2"
                        >
                          <a
                            href={`/course-materials/module${modules[currentModule].id}/${item.filename}`}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Download size={16} />
                            Download
                          </a>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Quiz Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Wissenstest</h2>
            <Quiz 
              onComplete={handleQuizComplete} 
              onNextModule={() => handleModuleChange(currentModule + 1)}
              isLastModule={currentModule === modules.length - 1}
              moduleId={modules[currentModule].id}
            />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CourseContent; 