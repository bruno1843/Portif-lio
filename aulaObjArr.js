let pessoa = {
    nome : 'Bruno',
    idade : 32 ,
    endereco : {rua: "x" , quadra : "2"},
    ola : function(){
        console.log(`Ola mundo! Aqui é o ${this.nome}`);
    }
}

let calcular = {
    x : 7,
    y : 5,
    somar : function(){
        return console.log(this.x + this.y);
    }
}

let listaDeFrutas = ["Maçã", "Uva", "Morango"]
let numeros = [3 , 4 , 6 , 1 , 15 , 9]
const readLineSync = require('readline-sync') // para se usar prompt no console 
const pessoas = [
    {id: 100, nome: 'Joao', idade: 20},
    {id: 101, nome: 'Juan', idade: 30},
    {id: 102, nome: 'Carla', idade: 27},
    {id: 103, nome: 'Jose', idade: 18},
    {id: 104, nome: 'Bruno', idade: 37}

]

//        Array
//console.log(listaDeFrutas[0]);
//listaDeFrutas.push("Pera");
//console.log(listaDeFrutas);

//listaDeFrutas.pop();
//console.log(listaDeFrutas)

//listaDeFrutas.shift();
//console.log(listaDeFrutas);

//listaDeFrutas.unshift("Banana");
//console.log(listaDeFrutas);

//let novoArray = listaDeFrutas.concat(numeros);
//console.log(novoArray);

//let listaEmTexto = novoArray.join(" - ");
//console.log(listaEmTexto);

//let resultado = listaEmTexto.split(" - ");
//console.log(resultado);

//listaDeFrutas.splice(2);
//let doisPrimeiros = listaDeFrutas;
//console.log(doisPrimeiros);

/*numeros.forEach(function(elementoAtual, indiceAtual, arrayCompleto){
    console.log(`O elemento  no indice  ${indiceAtual} é ${elementoAtual}`);
})*/

/*let dobroNumero = numeros.map(function(elementoAtual,indiceAtual, arrayCompleto){
    console.log(`indice: ${indiceAtual} | valor : ${elementoAtual}`);
    return elementoAtual * 2;
})*/

/*let dobroNumero = numeros.map(function(elementoAtual,indiceAtual, arrayCompleto){
    console.log(`indice: ${indiceAtual} | valor : ${elementoAtual}`);
    return {dobro: elementoAtual * 2, metade: elementoAtual / 2, valorOriginal:elementoAtual}
})*/

//console.log(dobroNumero);

/*const pares = numeros.filter(function(elementoAtual){
    return elementoAtual % 2 === 0; // impar - > elementoAtual % 2 !== 0
})

console.log(numeros,pares);*/

function promptConsole(question){
    return readLineSync.question(question);
}

/*let idadeMax = parseFloat(promptConsole(" Qual idade maxima a ser : "));
console.log(`A idade digitada é : ${idadeMax}`);

const validarIdade = pessoas.filter(function(pessoa){
    return pessoa.idade <= idadeMax
}) */

let pesquisaNome = promptConsole(" Pesquisa por nome :");
console.log(`O nome digitado é : ${pesquisaNome}`);

const pessoaEncontrada = pessoas.find(function(pessoa){
    return pessoa.nome === pesquisaNome;
})

console.log(pessoaEncontrada);

//        Objetos
//console.log(pessoa.nome);
//console.log(pessoa.endereco);
//console.log(pessoa.endereco.rua);

//pessoa.telefone = "99123124124";

//console.log(pessoa);

//pessoa.ola();
//calcular.somar();