// Manipulando Html e CSS pelo JavaScript -> DOM Avançado

// vamos criar um Header -> DOM
let Header = document.createElement("header");
Header.style.backgroundColor = "red";
Header.style.color = "black";
Header.style.textAlign = "center";
Header.style.height = "8vh";
Header.style.width = "100%";
document.body.appendChild(header);//adicionado header -> body
document.body.style.margin - 0;

//NavBAr no header
let NavBAr = document.createElement("div");
navBAr.style.display = "flex"; //adiciona um do lado do outro
navBAr.style.justifyContent = "space-around";
navBAr.style.alignItems = "center";
navBAr.style.heigt = "100%";
navBAr.style.width = "100%";
navBar.style.fontFamily = "Comic Sans MS"
navBAr.style.fontsize = "4vh";
header.appendChild(navBar) //adicionar navBAr -> header

//adicionar elementos a navBar
let menuItens = ["Home", "Sobre", "Produtos", "Contato"];

menuItens.forEach(item => {
    let a = document.createElement("a");
    a.innerText = item;
    navBar.appendChild(a);
});

//footer

let footer = document.createElement ("footer");
footer.style.backgroundColor = "black";
footer.stylle.color = "aliceblue"
footer.style.height = "5hv";
footer.style.width =  "100%";
footer.style.bottom = "0"
footer.style.position = "fixed";
footer.style.alignItems = "center";
header.appendChild(footer)

let navBarFooter = document.createElement("div")
navBarFooter.style.display = "flex";
navBarFooter.style.justifyContent = "space-between";
navBarFooter.style.fontFamily = "Comic Sans MS";
navBarFooter.style.fontsize = "2vh";
navBarFooter.style.width = "100%";
navBarFooter.style.height = "100%";
footer.appendChild(navBarFooter); 

//intens do footer
let footeritens = ["copiRight \u00A9 2025", "DNG Software", "Limeira/sp"];

footeritens.forEach(item => {
    let p  = document.createElement("p");
    p.innerText = item;
    navBarFooter.appendChild(p);
});

// Clonagem de Elemententos no DOM
let btnClonar = document.createElement("button");
btnClonar.innerText = "Clonar";
document.body.appendChild(btnClonar);
//criar os cards
let card = document.createElement("div");
card.style.width = "150px";
card.style.heigt = "200px";
card.style.backgroundColor = "green";
card.style.color = "blue";
card.style.margin = "10px";

//conteinerCards
let containerCards = document.createElement("div");
containerCards.style.display = "flex";
containerCards.style.justifyContent = "center";
containerCards.style.flexWrap = "wrap";
containerCards.style.width = "90%";
containerCards.style.margin = "auto";

document.body.appendChild(containerCards);

//criar a funcao de clonagem 
btnClonar.addEventListener("click", () => {
    let cardClone = card.cloneNode(true);
    containerCards.appendChild(cardClone);
});

// modificacoa de classe com classList
let checkDarkMode = document.createElement("input");
checkDarkMode.type = "checkbox";
checkDarkMode.id = "darkMode";
let divDarkMode = document.createElement("div");
divDarkMode.style.display = "flex";
divDarkMode.style.justifyContent = "center";
divDarkMode.style.top = "0px";
divDarkMode.style.right = "10px";
divDarkMode.style.position = "absolute";
let p = document.createElement("p");
p.innerText = "Dark Mode";
p.style.color = "green";
divDarkMode.appendChild(p);
divDarkMode.appendChild(checkDarkMode);
document.body.appendChild(divDarkMode);

//funcionalidade
checkDarkMode.addEventListener("change", ()=>{
    document.body.classList.toggle("darkMOde");
})


//eventos Avançados
//evento de teclado 
document.addEventListener("keydown", (event)=>{
    console.log("Tecla Pressionada: "+ event.key);
})

//eventos com teclado, input com pesqueisa
let input = document.createElement("input");
input.type = "text";
input.placeholder = "Digite sua pesquisa!";
input.id = "inputPesquisa";
document.bodi.appendChild(input);
let lista = document.createElement("ul");
lista.style.listStyle ="nome";
lista.style.padding = "0";
lista.style.margin = "0";
lista.id = "listaPesquisa";
document.body.appendChild(lista);

let listaItens = ["JavaScript", "HTML", "CSS", "React", "Angular", "Vue", "Node", "Npm"];

//metodo para sugestao de psquisa
input.addEventListener("keyup", () => {
    lista.ineerHTML = "";
    listaItens.forEach(item => {
        let termo = input.value.toLowerCase();
        if(item.toLowerCase().includes(termo)){
            let li = document.createElement("li");
            li.innerText = item;
            lista.appendChild(li);
            //adicionar a funcao de clicar na palavra
            li.style.cursor = "pointer"
            li.addEventListener("click", ()=> {
                input.value = item;
                lista.innerHTML ="";
            })
        }
    })
});

//fazendo verificacao de formulaarios
let form = dpocument.createElement("form");
form.id = "formCadastro";
let inputNome = document.createElement("input");
inputNome.type = "text";
inputNome.placeholder = "Informe o nome";
form.appendChild(inputNome);
let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.placeholder = " Iforme o Email";
form.appendChild(inputEmail);
let inputSenha = document.createElement("input");
inputSenha.type = "password";
inputSenha.placeholder = "informe a senha";
fprm.appendChild(inputSenha);
let btnEnviar = document.createElement("button");
btnEnviar.innerText = "Enviar";
form.appendChild(btnEnviar);
document.body.a(form);


//validacao do formulario
let mensagem = document.createElement("p");
document.body.appendChild(mensagem);

form.addEventListener("submit", (evnt) => {
    event.preventDefault();//nao deixa o submit recarregar a tela
    let nome = inputNome.value;
    let email = inputEmail.value;
    let senha = inputSenha.value;
    if (nome ==="" || email ==="" || senha ===""){
        mensagem.innerText =" Todos os Campos Deve ser Preenchidos!";
        mensagem.style.color = "red";
    }else{
        mensagem.innerTExt = "Cadastrp Realizado com Sucesso";
        mensagem.style.color = "green";
        nome = "";
        email = "";
        senha = "";
        form.reset();
    }
});