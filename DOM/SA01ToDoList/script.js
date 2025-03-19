// construção da aplicação do ToDoList -> DOM (HTML/CSS)
//style do body

document.body.style.backgroundColor = "lightgray";
document.body.style.margin = "0";
document.body.style.textAlign = "center";
document.body.style.fontFamily = "Arial";

//style do container
let container = document.querySelector (".container"); //está selecionando uma variavel simples
container.style.width = "50%";
container.style.backgroundColor = "aliceblue";
container.style.margin = "auto";
container.style.padding = "30px";
container.style.borderRadius = "15px";

//logica do funcionamento

let tarefa = document.getElementById("tarefa"); // pega as insformações iput tarefa
document.getElementById("btnEnviar").addEventListener(
    "click", criarTarefa 
)//ouvintepara o botão

function criarTarefa () { //ação apos apertar o botão 
    let texto = tarefa.value.trim();
    if(texto ==="") return;  // interrompe a function
    //criar iten da lsita
    let li = document.createElement("li");
    li.innerHTML = texto+'<button class="btnRemover" onclick="removerTarefa(this)">Remover</button>';
    //dicionar tarefa na lista de tarefas
        let ul = document.getElementById("listaTarefas");
        ul.appendChild(li);
        tarefa.value = "";
}

//botao remover -

function removerTarefa(botao){
    botao.parentElement.remove();
}