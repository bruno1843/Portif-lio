/* EX 1
let altParagrafo = "Texto alterado com sucesso";
let valorParagrafo = document.getElementById("meuParagrafo");

valorParagrafo.addEventListener("click",function(){
    valorParagrafo.innerHTML = altParagrafo;
}) */

    /* EX 2
function adicionarFilme(){
    let getInput = document.getElementById("adicionarFilme").value;
    const filmes = document.createElement("li");
    filmes.innerHTML = getInput;
    document.getElementById("filmes").appendChild(filmes);
}



document.getElementById("botaoAdicionar").addEventListener("click",adicionarFilme)
*/

/*
let paragrafo = document.getElementById("paragrafoContagem");
let adicionarClick = 0;

document.getElementById("clickCount").addEventListener("click",function(){
    adicionarClick++;
    paragrafo.innerHTML = 0 + adicionarClick + " Clicks";
}); */

/*EX 4*/
function removerLi(liElement) {
    liElement.remove(); // Remove o elemento diretamente
}

function addConcluir(tarefa) {
    tarefa.classList.add("tarefaFeita"); // Adiciona a classe ao elemento
}

function adicionarTarefa(event) {
    event.preventDefault(); // Evita o recarregamento da página

    let getInput = document.querySelector("input[type='text']").value; // Seleciona o input corretamente
    const setTarefa = document.createElement("li");

    setTarefa.innerHTML = getInput;

    const btnRemover = document.createElement("button");
    btnRemover.innerHTML = "Remover Tarefa";

    btnRemover.addEventListener("click", function() {
        removerLi(setTarefa); // Passa o elemento li diretamente
    });

    setTarefa.appendChild(btnRemover);

    const btnFinalizarTarefa = document.createElement("button");
    btnFinalizarTarefa.innerHTML = "Finalizar Tarefa";

    btnFinalizarTarefa.addEventListener("click", function() {
        addConcluir(setTarefa); // Passa o elemento li diretamente
    });

    setTarefa.appendChild(btnFinalizarTarefa);

    document.getElementById("listaTarefa").appendChild(setTarefa);
}

document.querySelector("form").addEventListener("submit", adicionarTarefa);

    


