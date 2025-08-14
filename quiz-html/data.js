// Dados do Quiz de Sensores de Distância (Ultrassom)
const quizData = {
  title: "Quiz: Sensores de Distância (Ultrassom)",
  description: "Teste seus conhecimentos sobre sensores ultrassônicos e medição de distância",
  questions: [
    {
      id: 1,
      question: "Os sensores ultrassônicos funcionam emitindo ondas sonoras de alta frequência para medir distâncias.",
      correctAnswer: true,
      explanation: "Correto! Os sensores ultrassônicos emitem ondas sonoras com frequência acima de 20kHz (ultrassom) e calculam a distância com base no tempo que a onda leva para retornar após refletir em um objeto.",
      image: "https://images.unsplash.com/photo-1631378297854-185cff6b0986?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxhcmR1aW5vfGVufDB8fHx8MTc1NTE3MTc3MXww&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 2,
      question: "A precisão de um sensor ultrassônico não é afetada pela temperatura do ambiente.",
      correctAnswer: false,
      explanation: "Incorreto! A velocidade do som varia com a temperatura do ar. Em temperaturas mais altas, o som viaja mais rápido, afetando os cálculos de distância. Por isso, sensores mais precisos compensam essas variações.",
      image: "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxhcmR1aW5vfGVufDB8fHx8MTc1NTE3MTc3MXww&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 3,
      question: "Um sensor ultrassônico típico pode medir distâncias de poucos centímetros até vários metros.",
      correctAnswer: true,
      explanation: "Correto! A maioria dos sensores ultrassônicos como o HC-SR04 pode medir distâncias de 2cm até 4 metros aproximadamente, sendo ideais para robótica e automação residencial.",
      image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwc2Vuc29yfGVufDB8fHx8MTc1NTE3MTc2Nnww&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 4,
      question: "Os sensores ultrassônicos funcionam perfeitamente com qualquer tipo de superfície, incluindo tecidos macios.",
      correctAnswer: false,
      explanation: "Incorreto! Superfícies macias como tecidos, espuma ou materiais que absorvem som podem não refletir adequadamente as ondas ultrassônicas, causando leituras imprecisas ou falhas na detecção.",
      image: "https://images.unsplash.com/photo-1638734254958-4a11c989e9bb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxzZW5zb3J8ZW58MHx8fHwxNzU1MTcxNzc3fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 5,
      question: "Um sensor ultrassônico precisa de pelo menos dois componentes: um transmissor e um receptor.",
      correctAnswer: true,
      explanation: "Correto! O transmissor (transducer) emite as ondas ultrassônicas e o receptor capta as ondas refletidas. O tempo entre emissão e recepção é usado para calcular a distância.",
      image: "https://images.unsplash.com/photo-1577962144759-8dec6b55c952?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxlbGVjdHJvbmljJTIwc2Vuc29yfGVufDB8fHx8MTc1NTE3MTc2Nnww&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 6,
      question: "A frequência ultrassônica usada nos sensores é sempre superior a 20.000 Hz (20 kHz).",
      correctAnswer: true,
      explanation: "Correto! Por definição, ultrassom são ondas sonoras com frequência acima do limite da audição humana (20 kHz). Sensores típicos usam frequências entre 40-50 kHz.",
      image: "https://images.unsplash.com/photo-1719244395193-bf7f119728ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxkaXN0YW5jZSUyMG1lYXN1cmVtZW50fGVufDB8fHx8MTc1NTE3MTc0OHww&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 7,
      question: "Os sensores ultrassônicos podem detectar objetos transparentes como vidro com a mesma eficiência de objetos opacos.",
      correctAnswer: false,
      explanation: "Incorreto! Vidro e outros materiais transparentes podem transmitir parte das ondas ultrassônicas ao invés de refleti-las completamente, resultando em detecção menos confiável comparado a superfícies opacas.",
      image: "https://images.unsplash.com/photo-1703486501151-47ba6af82a43?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxzZW5zb3J8ZW58MHx8fHwxNzU1MTcxNzc3fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 8,
      question: "O ângulo de detecção de um sensor ultrassônico é geralmente muito estreito, formando um cone de aproximadamente 15-30 graus.",
      correctAnswer: true,
      explanation: "Correto! A maioria dos sensores ultrassônicos tem um cone de detecção relativamente estreito (15-30°), o que os torna bons para medições direcionais precisas, mas podem não detectar objetos fora desse cone.",
      image: "https://images.pexels.com/photos/33373082/pexels-photo-33373082.jpeg"
    },
    {
      id: 9,
      question: "Sensores ultrassônicos são imunes a interferências de luz e podem funcionar perfeitamente no escuro.",
      correctAnswer: true,
      explanation: "Correto! Como usam ondas sonoras ao invés de luz, os sensores ultrassônicos não são afetados por condições de iluminação, funcionando igualmente bem no escuro ou sob luz intensa.",
      image: "https://images.unsplash.com/photo-1631378297854-185cff6b0986?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxhcmR1aW5vfGVufDB8fHx8MTc1NTE3MTc3MXww&ixlib=rb-4.1.0&q=85"
    },
    {
      id: 10,
      question: "A distância máxima que um sensor ultrassônico pode medir é limitada principalmente pela potência do sinal e pela sensibilidade do receptor.",
      correctAnswer: true,
      explanation: "Correto! A distância máxima depende da intensidade do sinal emitido e da capacidade do receptor de detectar ecos fracos. Sinais mais fracos retornam de objetos distantes, limitando o alcance máximo do sensor.",
      image: "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxhcmR1aW5vfGVufDB8fHx8MTc1NTE3MTc3MXww&ixlib=rb-4.1.0&q=85"
    }
  ]
};