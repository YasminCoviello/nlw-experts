const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Document Object Model",
        "Data Object Model",
        "Dynamic Object Model",
      ],
      correta: 0
    },
    {
      pergunta: "Como você adiciona um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "# Este é um comentário",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Atribuição",
        "Comparação estrita",
        "Concatenação",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "JavaScript Object Notation",
        "JavaScript Object Naming",
        "JavaScript Object Navigation",
      ],
      correta: 0
    },
    {
      pergunta: "Como você converte uma string em número em JavaScript?",
      respostas: [
        "parseInt()",
        "stringToNumber()",
        "convertToNumber()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o evento 'click' em JavaScript?",
      respostas: [
        "Um evento de teclado",
        "Um evento de mouse",
        "Um evento de tempo",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "removeLast()",
        "deleteLast()",
      ],
      correta: 0
    },
    {
      pergunta: "O que significa a sigla 'AJAX' em JavaScript?",
      respostas: [
        "Asynchronous JavaScript and XML",
        "Automated JavaScript and XML",
        "Advanced JavaScript and XHTML",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a finalidade do método 'querySelector' em JavaScript?",
      respostas: [
        "Selecionar o primeiro elemento de uma lista",
        "Selecionar todos os elementos de uma lista",
        "Selecionar elementos com base em um seletor CSS",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
     const estaCorreta = event.target.value == item.correta
  
     corretas.delete(item)
     if(estaCorreta) {
       corretas.add(item)
     }
  
      mostrarTotal.textContent = corretas.size + ' de' + totalDePerguntas
    }
   
   
   
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  
  quizItem.querySelector('dl dt').remove()
  
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }