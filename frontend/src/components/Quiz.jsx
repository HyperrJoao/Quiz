import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { quizData } from '../data/quizMock';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const question = quizData.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100;

  const handleAnswer = (answer) => {
    if (quizCompleted) return;

    const newAnswers = {
      ...userAnswers,
      [currentQuestion]: answer
    };
    setUserAnswers(newAnswers);

    // Calcular pontuação
    const correct = quizData.questions.filter((q, index) => 
      newAnswers[index] === q.correctAnswer
    ).length;
    setScore(correct);

    // Se é a última pergunta, completar o quiz
    if (currentQuestion === quizData.questions.length - 1) {
      setQuizCompleted(true);
      setShowResults(true);
    } else {
      // Avançar para próxima pergunta após pequeno delay
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
      }, 500);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setShowResults(false);
    setQuizCompleted(false);
    setScore(0);
  };

  const goToQuestion = (index) => {
    if (!quizCompleted) return;
    setCurrentQuestion(index);
    setShowResults(true);
  };

  if (showResults && quizCompleted) {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Header com Score */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-blue-900">
              Quiz Finalizado!
            </CardTitle>
            <div className="text-4xl font-bold text-blue-600 mt-4">
              {score}/{quizData.questions.length}
            </div>
            <p className="text-blue-700 mt-2">
              Você acertou {score} de {quizData.questions.length} questões 
              ({Math.round((score / quizData.questions.length) * 100)}%)
            </p>
            <Button 
              onClick={resetQuiz}
              className="mt-4 bg-blue-600 hover:bg-blue-700"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Refazer Quiz
            </Button>
          </CardHeader>
        </Card>

        {/* Lista de Questões */}
        <div className="grid gap-4">
          {quizData.questions.map((q, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === q.correctAnswer;
            
            return (
              <Card 
                key={q.id} 
                className={`cursor-pointer transition-all hover:shadow-md ${
                  isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                }`}
                onClick={() => goToQuestion(index)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {isCorrect ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Questão {index + 1}: {q.question}
                      </h3>
                      <div className="flex gap-2 mb-2">
                        <Badge variant={userAnswer ? 'default' : 'secondary'}>
                          Sua resposta: {userAnswer ? 'Verdadeiro' : 'Falso'}
                        </Badge>
                        <Badge variant={q.correctAnswer ? 'default' : 'secondary'}>
                          Correto: {q.correctAnswer ? 'Verdadeiro' : 'Falso'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-blue-900">
            {quizData.title}
          </CardTitle>
          <p className="text-blue-700 mt-2">{quizData.description}</p>
          <div className="mt-4">
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-blue-600 mt-2">
              Questão {currentQuestion + 1} de {quizData.questions.length}
            </p>
          </div>
        </CardHeader>
      </Card>

      {/* Questão Atual */}
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg font-semibold text-gray-900">
              Questão {currentQuestion + 1}
            </CardTitle>
            <Badge variant="outline" className="text-blue-600 border-blue-200">
              Verdadeiro ou Falso
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Imagem */}
          <div className="w-full h-48 rounded-lg overflow-hidden bg-gray-100">
            <img 
              src={question.image} 
              alt="Sensor ultrassônico"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Pergunta */}
          <div className="text-center">
            <h2 className="text-xl font-medium text-gray-900 leading-relaxed">
              {question.question}
            </h2>
          </div>

          {/* Botões de Resposta */}
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => handleAnswer(true)}
              disabled={quizCompleted}
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
              size="lg"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Verdadeiro
            </Button>
            <Button
              onClick={() => handleAnswer(false)}
              disabled={quizCompleted}
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
              size="lg"
            >
              <XCircle className="w-5 h-5 mr-2" />
              Falso
            </Button>
          </div>

          {/* Resposta Selecionada */}
          {userAnswers[currentQuestion] !== undefined && (
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-900 font-medium">
                Você respondeu: {userAnswers[currentQuestion] ? 'Verdadeiro' : 'Falso'}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Score Atual */}
      <Card className="bg-gray-50">
        <CardContent className="p-4 text-center">
          <p className="text-gray-700">
            Pontuação atual: <span className="font-bold text-blue-600">{score}/{Object.keys(userAnswers).length}</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Quiz;