// Funções de Texto  (String)

let Texto = "Aula de JavaScript";

//contar o numero de carcteres (length)
console.log(Texto.length); //18

//MAIUSCULAS E minusculas
console.log(Texto.toUpperCase()); //   MAIUSCULAS
console.log(Texto.toLowerCase()); //  minusculas

// Partes do texto
//Substring
console.log(Texto.substring(0,4)); //4 caracteres (aula)
//slice(Quantidade)
console.log(Texto.slice(-10)) // Pega de traz para frente (JavaScript) 

//Substituir Parte do texto

console.log(Texto.replace("Java", "type"));

//Tesoura (Trim)
let texto1 = "  JavaScript  ";
console.log(texto1); //"JavaScript"
console.group(texto1.trim());

//Separar texto (split) - Caracter

let linguagens = "JavaScript, Paython, PHP, Java, C# ";

let vetorLinguagens = linguagens.split (" , ");
console.log (Linguagens);
console.log (vetorLinguagens);

//desafio
let carcater = "Bom Dia Com Muita Alegria";
let carcaterSemEspaço = carcater.replaceAll(" ", "");
console.log(carcater);
console.log(carcater.length);
console.log(carcaterSemEspaço);
console.log(carcaterSemEspaço.length);
