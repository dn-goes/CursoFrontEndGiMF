// Funções de data e hora
// Classe DAte () -> Obejto

let agora = new Date(); //Obejeto => Date()
console.log(agora.toDateString());
console.log(agora.toLocaleTimeString());

// get 
console.log(agora.getFullYear()); //2025 puxa o ano

//Set()
agora.setFullYear(2030);
console.log(agora.toLocaleDateString());

//Operacões de data
let data1 = new Date('2025-02-04');
let data2 = new Date('2025-12-17');

let diferenca = data2 - data1;

console.log(diferenca/(1000*60*60*24));

