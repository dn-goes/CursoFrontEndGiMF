// DOM -> Jogo QUIZ interativo

let perguntas = [];
let proximaPergunta = 0;

//DOM -> elementoss

let perguntaElement = document.getElementById("pergunta");
let opcoesElement = document.getElementById("opcoes");
let proximaElement = document.getElementById("proxima")
let respostaElement = documentById("resposta");

//fetch -> pegar as perguntas do arquivo Json
fetch("perguntas.json")
    .then(response => response.json())
    .then(data => {
        perguntas = data;
        carregarPerguntas();//funcao para carregar no html
    })

//DOM-> funcoes
function carregarPerguntas(){}