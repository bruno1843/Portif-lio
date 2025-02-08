import { dobro, soma, subtrair } from "./funções";

var getFuncao = prompt("1 - soma \n 2 - subtrair \n 3 - dobro \n 4 - Sair");



switch(getFuncao){
    case "1":
        var getNumeroCliente1 = parseFloat(prompt("Digite o primeiro numero a ser somado"));
        var getNumeroCliente2 = parseFloat(prompt("Digite o segundo numero a ser somado"));
        if(!isNaN(getNumeroCliente1) && !isNaN(getNumeroCliente2)){
        var resultado = getNumeroCliente1 + getNumeroCliente2;
        alert(resultado);
    }else{
        alert("Numero 1 ou Numero 2 não é um numero , tente novamente")
    }
        break;
    case "2":
        var getNumeroCliente1 = parseFloat(prompt("Digite o primeiro numero a ser subtraido"));
        var getNumeroCliente2 = parseFloat(prompt("Digite o segundo numero a ser subtraido"));
        if(!isNaN(getNumeroCliente1) && !isNaN(getNumeroCliente2)){
            var resultado = getNumeroCliente1 - getNumeroCliente2;
            alert(resultado);
        }else{
            alert("Numero 1 ou Numero 2 não é um numero , tente novamente")
        }
        break;
    case "3":
        var getNumeroCliente1 = parseFloat(prompt("Digite o  numero a ser dobrado"));
        if(!isNaN(getNumeroCliente1)){
            var resultado = getNumeroCliente1 * 2;
            alert(resultado);
        }else{
            alert("Numero digitado não é um numero , tente novamente")
        }
        alert(resultado);
        break;
    case "4":
        alert("Saindo..")
        break;
    default:
        alert("Opção invalida, tente novamente");
}

//var getNumeroCliente = prompt("Qual numero deseja dobrá-lo");

//alert(dobro(getNumeroCliente));

