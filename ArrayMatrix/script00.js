// Array and Matrix (vetores e matrizes)
//declarar um array => []
let Array = [];
let numberArray =[1,2,3,4,5,6,7,8,9];
let texteArray = ["Sapato", "Bola", "cachorro"];
let mixArray = [1, "Nome", true];

// como faço para acessar os elementos (indice)
console.log(texteArray[1]);  //Indice
console.log(numberArray[8]);  //9

//Contar elemntos de uma array (lengt)
console.log(numberArray.length); //9
console.log(texteArray.length); //3

// Adicionar elementos em uma Array
// no começo  (0)
texteArray.unshift("Cachorrro");
console.log(texteArray);
// no final - push
texteArray.push("Casa");
console.log(texteArray);

//Alterar o valor de Array
texteArray[2] = "Carro" ;
console.log(texteArray);

//Remover elementos Array
//do começo - shift
texteArray.shift();
console.log(texteArray);

//do meio - splice(indice,quantidade,)
texteArray.splice(1,1);
console.log(texteArray); //imprimir

//do fim
texteArray.pop();
console.log(texteArray); //remove a ultima palvra(indice)

// Percorrer um Allay
for(let i=0; i<numberArray.length; i++){
    console.log(
        "Numero ["+i+"]="+numberArray[i]
    );
}
//forEach
numberArray.forEach(element => {
    console.log(element)
    
});

//indexOF == Retorna o Indice do Elemento
console.log(mixArray.indexOf("Nome"));
console.log(numberArray.indexOf(10));
