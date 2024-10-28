let indexPergunta = 0;
let pontuacaoInicial = 0;

const perguntas = [
    {
        tema:"Capitais do mundo",
        pergunta:"Qual é a capital da França?",
        respostas: ["Paris", "Londres", "Berlim", "Madrid"],
        respostaCorreta: 0
    },
    {
        tema:"Geografia Geral",
        pergunta:"Quantos continentes existem?",
        respostas: ["5", "6", "7", "8"],
        respostaCorreta: 2
    },
    {
        tema:"Astronomia",
        pergunta:"Qual planeta é conhecido como Planeta Vermelho?",
        respostas: ["Vênus", "Terra", "Júpiter", "Marte"],
        respostaCorreta: 3
    },
    {
        tema:"Oceanos e Mares",
        pergunta:"Qual é o maior oceano da Terra?",
        respostas: ["Atlântico", "Pacífico", "Índico", "Ártico"],
        respostaCorreta: 1
    },
]

function carregarPergunta() {
    const perguntaObj = perguntas[indexPergunta];

    document.getElementById("tema").textContent = perguntaObj.tema;

    document.getElementById("pergunta").textContent = perguntaObj.pergunta;    

    perguntaObj.respostas.forEach((resposta, index) => {
        const button = document.getElementById(`resposta-${index}`);
        button.textContent = resposta;
    })
}

function checarPergunta(perguntaSelecionada) {
    const respostaCorreta = perguntas[indexPergunta].respostaCorreta;

    if(perguntaSelecionada === respostaCorreta) {
        alert("Correto!");
        pontuacaoInicial++
        document.getElementById("pontuacao").textContent = pontuacaoInicial;
        
    } else {
        alert("Errado!");
    }

    indexPergunta++;

    if(indexPergunta < perguntas.length) {
        carregarPergunta();
    } else {
        alert("Fim de Jogo");
    }
}

function pularPergunta() {
    indexPergunta++;
    
    if(indexPergunta < perguntas.length) {
        carregarPergunta();
    } else {
        alert("Fim de Jogo");
    }
}