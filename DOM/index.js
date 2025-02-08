/*document.body.addEventListener("click", function(){
    alert("VOce clicou no body");
}) */

/* const titulo = document.getElementsByTagName("h1"); */

/* const titulo = document.getElementById("titulo");

console.log(titulo);

titulo.addEventListener("mouseover" , function(){
    alert("Voce passou o mouse no titulo");
}) */

/*
const titulo = document.querySelectorAll("#titulo"); // possivel utilizar a class (h1.titulo)

console.log(titulo); */

/*const titulo = document.querySelector("h1");

titulo.addEventListener("click", function(){
    titulo.innerHTML = "Voce clicou no titulo, <em>Aula de DOM</em>"; // possivel tbm usar o textContent
})*/

/*
const titulo = document.querySelector("h1");

console.log(titulo);

titulo.addEventListener("click", function(){
    titulo.setAttribute("class","bg-blue");
}) */

    /*
    const titulo = document.querySelector("h1");

    console.log(titulo);
    
    titulo.addEventListener("click", function(){
        titulo.id = "titulo";
        titulo.className = "bg-blue";
    }) */

    /*
        const titulo = document.querySelector("h1");

        console.log(titulo);
        
        titulo.addEventListener("click", function(){
            titulo.id = "titulo";
            titulo.classList.remove("bg-blue");
        })
    */
    /*
        const titulo = document.querySelector("h1");

        console.log(titulo);
        
        titulo.addEventListener("click", function(){
            titulo.id = "titulo";
            titulo.classList.toggle("bg-blue");
        })
    */

        /*

    function toKebabCase(str) {
        return str.split(" ").join("-").toLowerCase();
    }
    function removerLi(id){
        const liParaRemover = document.getElementById(id);
        liParaRemover.remove();
    }

    function adicionarLi(){
        const jogo = prompt("Insira o nome do jogo que deseja colocar na lista");

        const liElement = document.createElement("li");
        liElement.innerHTML = jogo;
        liElement.id = toKebabCase(jogo);

        const btnRemover = document.createElement("button");
        btnRemover.innerText = "Remover Jogo";

        btnRemover.addEventListener("click", function() {
            removerLi(liElement.id);
        })

        liElement.appendChild(btnRemover);

        const ulElement = document.getElementById("ListaDeJogos");

        ulElement.appendChild(liElement);

    }

    document.getElementById("adicionarJogo").addEventListener("click",adicionarLi) */

    function toKebabCase(str) {
        return str.split(" ").join("-").toLowerCase();
    }
    
    function removerLi(id) {
        const liParaRemover = document.getElementById(id);
        if (liParaRemover) {
            liParaRemover.remove();
        }
    }
    
    function adicionarLi(jogo) {
        const liElement = document.createElement("li");
        liElement.id = toKebabCase(jogo.nome);
        liElement.textContent = `Nome: ${jogo.nome} | Ano: ${jogo.ano} | Genero: ${jogo.genero}`;
        
        const btnRemover = document.createElement("button");
        btnRemover.innerText = "Remover Jogo";
    
        btnRemover.addEventListener("click", function() {
            removerLi(liElement.id);
        });
    
        liElement.appendChild(btnRemover);
        document.getElementById("ListaDeJogos").appendChild(liElement);
    }
    
    const form = document.getElementById("cadastrarJogo");
    
    form.addEventListener("submit", function(evento) {
        evento.preventDefault();
    
        const inputNome = document.getElementById("nome");
        const inputAno = document.getElementById("ano");
        const inputGenero = document.getElementById("genero");
    
        const jogo = {
            nome: inputNome.value,
            ano: inputAno.value,
            genero: inputGenero.value
        };
    
        adicionarLi(jogo);
        evento.target.reset(); // Limpa os campos do formulário
    });