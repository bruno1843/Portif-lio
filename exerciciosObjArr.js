/* EXERCICIO 2
let veiculo = {
    tipo : "Corsa",
    passageiros : 1,
    maxPassageiros : 4 ,
    velocidade : 0 ,
    aumentarVelocidade : function(valor){
        return this.velocidade += valor;
    } , 
    diminuirVelocidade : function(valor){
        if(this.velocidade === 0){
            return 0;
        }
        return this.velocidade -= valor;
    } ,
    adicionarPassageiro : function(passageiro){
        if(this.passageiros === this.maxPassageiros){
            alert("O carro esta cheio");
        }if(this.velocidade !== 0){
            alert("O carro esta em movimento, pare o carro para adicionar passageiro");
        }if(this.passageiros + passageiro > this.maxPassageiros){
            alert("O carro está cheio , diminua a pessoas dentro carro");
        }else{
            return this.passageiros += passageiro;
        }
    }

}//         testes 
//veiculo.adicionarPassageiro(1);
//alert(veiculo.passageiros);

//veiculo.aumentarVelocidade(10)
//veiculo.adicionarPassageiro(2)

//veiculo.adicionarPassageiro(5)

*/

/*Exercicio 3 */

let estoque = [
    { cadastro: 1, nomeProduto: "Nissin", quantidade: 1 },
];

let continuar = true;

do {
    // Solicita a escolha do menu no início do loop
    let menuEscolha = prompt("1 - Adicionar item no estoque \n 2 - Excluir item do estoque \n 0 - Sair");

    //RegEx para disponibilizar apenas letras na digitação do nome do produto
    let regex = /^[a-zA-Z]+$/;

    switch (menuEscolha) {
        case "1":
            let adicionarProduto = []; // Array para armazenar novos produtos

            let getCadastro = parseInt(prompt("Digite o número do cadastro do produto: "));
            let getNomeProduto = prompt("Digite o nome do produto");
            let quantidadeProduto = parseInt(prompt("Digite a quantidade do produto"));
            //Lembrete: aqui pode-se usar o tipo do produto , para se adicionar em outro array, para setorizar se é alimento,roupa,limpeza.

            if (isNaN(getCadastro) || isNaN(quantidadeProduto) || regex.test(getNomeProduto === false) || getCadastro.trim() === "") {
                alert("Digite um número válido para o cadastro e a quantidade, e um nome para o produto. Tente novamente.");
                break; // Sai do case se os dados forem inválidos
            }

            // Adiciona o novo produto ao array
            adicionarProduto.push({
                cadastro: getCadastro,
                nomeProduto: getNomeProduto,
                quantidade: quantidadeProduto,
            });

            // Adiciona os novos produtos ao estoque
            adicionarProduto.forEach(function (produto) {
                estoque.push(produto);
            });

            // Exibe o estoque atualizado
            alert("Esses são os produtos no Estoque:");
            for (let j = 0; j < estoque.length; j++) {
                alert(JSON.stringify(estoque[j]));
            }

            break; // Retorna ao menu principal

        case "2":
            let posicaoExcluirProduto = parseInt(prompt("Digite qual a posição do produto(número) que deseja excluir: "));
            if (isNaN(posicaoExcluirProduto)) {
                alert("Digite um número, valor digitado inválido. Tente novamente");
            } else {
                posicaoExcluirProduto -= 1;
                estoque.splice(posicaoExcluirProduto, 1);
            }

            alert("Produtos que sobraram no estoque:");
            for (let j = 0; j < estoque.length; j++) {
                alert(JSON.stringify(estoque[j]));
            }

            break; // Retorna ao menu principal

        case "0":
            alert("Saindo...");
            continuar = false; // Encerra o loop
            break;

        default:
            alert("Opção inválida! Tente novamente.");
            break; // Retorna ao menu principal
    }
} while (continuar);