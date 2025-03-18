// Situação de aprendizado 01 -Array de Matrix
// Calculadora De   Media
const prompt = require("prompt-sync")

var notas = []; //declaração de um vetor

//função para adicionar nota -> media
function AdiciaonarNota(){
    let nota = Number(prompt("Informe a Nota: "))
    notas.push(nota);
    console.log("Nota Adicionda com Sucesso");
}
//função para calcular a media
function calcularmedia(){
    if(notas.length === 0) return;
    let soma = notas.reduce((s,y)=>x=y);
    let mediaFinal = (soma / notas.length);
    console.log("A media é "+mediafinal);
}

// menu de opções
function menuOpcoes(){
    let continuar = true
    while(continuar){
    console.log("===Calculadora Média===");
    console.log("|1. Adiconar Nota     |");
    console.log("|2. Adiconar Media    |");
    console.log("|3. Sair              |");
    console.log("========================");
    let operacao = prompt("Informe a Opção Desejada");
    switch(operacao) {
            case "1": adiciaonarNota();
        break; 
            case "2": CalcularMedia();
        break; 
            case "3": continuar = false;
        break; 
            default: console.log("Opççao Invalida");
        break;
    }//fim do switch
    }//fim do while
    console.log("Saindo...")
}// fim da function

menuOpcoes();
