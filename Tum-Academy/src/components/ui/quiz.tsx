import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "./label";
import { Button } from "./button";
import { Alert, AlertDescription } from "./alert";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

const quizQuestions = {
  1: [
    {
      id: 1,
      question: "Was ist eine wichtige Voraussetzung für die Erteilung einer Taxikonzession?",
      options: [
        "Mindestens 5 Jahre Führerschein",
        "Fachliche Eignung (IHK-Prüfung)",
        "Ein Hochschulabschluss",
        "Mindestens 10 Jahre Berufserfahrung"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Welches Gesetz regelt die gewerbliche Personenbeförderung in Deutschland?",
      options: [
        "Straßenverkehrsgesetz (StVG)",
        "Personenbeförderungsgesetz (PBefG)",
        "Gewerbeordnung (GewO)",
        "Handelsgesetzbuch (HGB)"
      ],
      correctAnswer: 1
    }
  ],
  2: [
    {
      id: 1,
      question: "Welche Vorschrift regelt die technischen Anforderungen an Taxifahrzeuge?",
      options: [
        "StVZO",
        "BOKraft",
        "PBefG",
        "StVO"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Was ist keine Pflichtversicherung für ein Taxiunternehmen?",
      options: [
        "Kfz-Haftpflichtversicherung",
        "Unfallversicherung für Fahrgäste",
        "Lebensversicherung für Fahrer",
        "Betriebshaftpflichtversicherung"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "Welche maximale Lenkzeit gilt für Taxifahrer laut Arbeitszeitgesetz?",
      options: [
        "8 Stunden",
        "9 Stunden",
        "10 Stunden",
        "12 Stunden"
      ],
      correctAnswer: 2
    }
  ]
};

interface QuizProps {
  onComplete: (passed: boolean) => void;
  onNextModule?: () => void;
  isLastModule?: boolean;
  moduleId: number;
}

const Quiz = ({ onComplete, onNextModule, isLastModule = false, moduleId }: QuizProps) => {
  const questions = quizQuestions[moduleId as keyof typeof quizQuestions];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  // Reset state when moduleId changes
  useEffect(() => {
    setCurrentQuestion(0);
    setAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
  }, [moduleId, questions.length]);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = parseInt(value);
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (answers.every(answer => answer !== null)) {
      setShowResults(true);
      const correctAnswers = answers.filter((answer, index) => 
        answer === questions[index].correctAnswer
      ).length;
      const passed = (correctAnswers / questions.length) >= 0.8;
      onComplete(passed);
    }
  };

  const getScore = () => {
    const correctAnswers = answers.filter((answer, index) => 
      answer === questions[index].correctAnswer
    ).length;
    return {
      correct: correctAnswers,
      total: questions.length,
      percentage: (correctAnswers / questions.length) * 100
    };
  };

  if (showResults) {
    const score = getScore();
    const passed = score.percentage >= 80;

    return (
      <Card>
        <CardHeader>
          <CardTitle>Quiz Ergebnisse</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-2xl font-bold mb-2">
              {score.correct} von {score.total} Fragen richtig
            </div>
            <div className={`text-lg ${passed ? 'text-green-600' : 'text-red-600'} mb-4`}>
              {score.percentage}% - {passed ? 'Bestanden' : 'Nicht bestanden'}
            </div>
            {passed && !isLastModule && (
              <Button 
                onClick={onNextModule} 
                className="flex items-center gap-2"
                size="lg"
              >
                Zum nächsten Modul
                <ArrowRight size={16} />
              </Button>
            )}
          </div>

          <div className="space-y-4 mt-8">
            {questions.map((question, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start gap-2">
                  {answers[index] === question.correctAnswer ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 mt-1" />
                  )}
                  <div>
                    <p className="font-medium">{question.question}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Ihre Antwort: {question.options[answers[index] ?? 0]}
                    </p>
                    {answers[index] !== question.correctAnswer && (
                      <p className="text-sm text-green-600 mt-1">
                        Richtige Antwort: {question.options[question.correctAnswer]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!passed && (
            <Alert variant="destructive">
              <AlertDescription>
                Sie benötigen mindestens 80% richtige Antworten, um das Modul abzuschließen.
                Bitte wiederholen Sie das Modul und versuchen Sie es erneut.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Frage {currentQuestion + 1} von {questions.length}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-lg font-medium">
          {questions[currentQuestion].question}
        </div>
        
        <RadioGroup
          value={answers[currentQuestion]?.toString()}
          onValueChange={handleAnswer}
        >
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <div key={`${currentQuestion}-${index}`} className="flex items-center space-x-2">
                <RadioGroupItem 
                  value={index.toString()} 
                  id={`question-${currentQuestion}-option-${index}`}
                />
                <Label htmlFor={`question-${currentQuestion}-option-${index}`}>
                  {option}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>

        <div className="flex justify-end">
          <Button 
            onClick={handleNext}
            disabled={answers[currentQuestion] === null}
          >
            {currentQuestion < questions.length - 1 ? "Nächste Frage" : "Ergebnisse anzeigen"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Quiz; 