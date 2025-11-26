/* let mesadaUsuario = parseInt(prompt("Qual valor da sua mesada?"))
let escolhaUsuario = parseInt(prompt("selecione a opção desejada: \n1 - Comprar \n2 - Apenas olhar "));

switch(escolhaUsuario){
    case 1:
        let escolhaProduto = parseInt(prompt("selecione a opção desejada: \n1 - Boneco do woody = 20R$ \n2 - Bola de Futball = 30 R$ \n3 - Tênis = 60 R$ "));

        switch(escolhaProduto){
            case 1:
                if(mesadaUsuario > 20){
                    alert(`Parabens pela compra. sua agora é ${mesadaUsuario - 20}`)
                }else{
                    alert("Você não detem do saldo.")
                }
            break;
            case 2:
                if(mesadaUsuario > 30){
                    alert(`Parabens pela compra. sua agora é ${mesadaUsuario - 30}`)
                }else{
                    alert("Você não detem do saldo.")
                }
            break;
            case 3:
                if(mesadaUsuario > 60){
                    alert(`Parabens pela compra. sua agora é ${mesadaUsuario - 60}`)
                }else{
                    alert("Você não detem do saldo.")
                }
            break;
            default:
            alert("Valor invalido")
        }
    break; 

    case 2:
        alert("Fique a vontade")

        break;

    default:
        alert("Opção invalida")       
} */


// Valor Produto 

/* 
let produtoUm = 20
let produtoDois = 30
let produtoTres = 40

let escolhaUsuario = parseInt(prompt("selecione a opção que se refere ao produtos desejado: \n1 - Kitkat \n2 - Fini \n3 - Halls "));
let desconto = produtoUm * 0.05
let descontoAv = produtoUm * 0.03
let quantidadeProduto =  parseInt(prompt("quantos Produto desse você gostaria?"))


    switch(escolhaUsuario){
        
        case 1:
           
            let pagamento = parseInt(prompt("selecione a opção de pagamento: \n1 - Parcela \n2 - A vista "));

            switch(pagamento){
                case 1:
                let parcela1 = parseInt(prompt("quantas parcelas "));
                let valorUm = produtoUm * quantidadeProduto
                let resultado1 = valorUm - desconto
                let parcelaSemD1 = valorUm / parcela1
                let calculoParcela1 = resultado1 / parcela1 

                if(quantidadeProduto > 6){
                alert(`O valor da sua compra foi ${resultado1.toFixed(2)} \n em ${parcela1} vezes de ${calculoParcela1.toFixed(2)}` )
                }else {
                alert(`O valor da sua compra foi ${valorUm.toFixed(2)} \n em ${parcela1} vezes de ${parcelaSemD1.toFixed(2)}` )
                }
                break;

                case 2:
                let descontoMax = produtoUm * quantidadeProduto - desconto - descontoAv 
                let descontoMin = produtoUm * quantidadeProduto - descontoAv

                if(quantidadeProduto > 6){
                alert(`O valor da sua compra foi ${descontoMax.toFixed(2)}` )
                }else {
                alert(`O valor da sua compra foi ${descontoMin.toFixed(2)}` )
                }
                break;    

            }
        break;

        case 2:
             let pagamento2 = parseInt(prompt("selecione a opção de pagamento: \n1 - Parcela \n2 - A vista "));

            switch(pagamento2){

                case 1:
                let parcela2 = parseInt(prompt("quantas parcelas "));
                let valorDois = produtoDois * quantidadeProduto
                let resultado2 = valorDois - desconto
                let parcelaSemD2 = valorDois / parcela2
                let calculoParcela2 = resultado2 / parcela2 

                if(quantidadeProduto > 6){
                alert(`O valor da sua compra foi ${resultado2.toFixed(2)} \n em ${parcela2.toFixed(2)} vezes de ${calculoParcela2.toFixed(2)}` )
                }else {
                alert(`O valor da sua compra foi ${valorDois.toFixed(2)} \n em ${parcela2.toFixed(2)} vezes de ${parcelaSemD2.toFixed(2)}` )
                }
                break;

                case 2:
                let descontoMax = produtoDois * quantidadeProduto - desconto - descontoAv 
                let descontoMin = produtoDois * quantidadeProduto - descontoAv

                if(quantidadeProduto > 6){
                alert(`O valor da sua compra foi ${descontoMax.toFixed(2)}` )
                }else {
                alert(`O valor da sua compra foi ${descontoMin.toFixed(2)}` )
                }
                break;    

            }
        break;
        case 3:
            let pagamento3 = parseInt(prompt("selecione a opção de pagamento: \n1 - Parcela \n2 - A vista "));
            switch(pagamento3){
                case 1:
                let parcela3 = parseInt(prompt("quantas parcelas "));
                let valorTres = produtoTres * quantidadeProduto
                let resultado3 = valorTres - desconto
                let parcelaSemD3 = valorTres / parcela3
                let calculoParcela3 = resultado3 / parcela3 

                if(quantidadeProduto > 6){
                alert(`O valor da sua compra foi ${resultado3.toFixed(2)} \n em ${parcela3.toFixed(2)} vezes de ${calculoParcela3.toFixed(2)}` )
                }else {
                alert(`O valor da sua compra foi ${valorTres.toFixed(2)} \n em ${parcela3.toFixed(2)} vezes de ${parcelaSemD3.toFixed(2)}` )
                }
                break;

                case 2:
                let descontoMax = produtoTres * quantidadeProduto - desconto - descontoAv 
                let descontoMin = produtoTres * quantidadeProduto - descontoAv

                if(quantidadeProduto > 6){
                alert(`O valor da sua compra foi ${descontoMax.toFixed(2)}` )
                }else {
                alert(`O valor da sua compra foi ${descontoMin.toFixed(2)}` )
                }
                break;    

            }
        break;





    }
 */



let conta = parseInt(prompt("Ola qual valor da sua conta"))
let escolha = parseInt(prompt("Oque vc faz por essas bandas \n 1-Saque \n 2-Depósito \n 3- Tranferencias"))
 
    switch(escolha){
        case 1:
            let valorSaque = parseInt(prompt("Quanto vc gostaria de sacar"))

         if(valorSaque > conta){
                alert(`Vc esta tentando sacar mais do que tem, sua conta possui ${conta} R$`)
            }else{
                alert(`Vc esta sacou ${valorSaque}, sua conta possui ${conta - valorSaque} R$`)
            }
        break;

        case 2:
            let valorDepósito = parseInt(prompt("Qual valor vc gostaria de depositar"))
            alert(`Parabens seu valor atual é ${valorDepósito + conta}`)

        break;

        case 3:
            let transferencia = parseInt(prompt("qual forma de tranferencia? \n 1-Pix \n 2-TED"
            ))
            let valorTransferencia = parseInt(prompt("qual valor vc deseja tranferir"
            ))
            let descontoTED = 9.80

            switch(transferencia){
                case 1:
                    if(valorTransferencia <= conta ){
                        alert(`parabens pela trnaferencia, vc tem ${conta - valorTransferencia}`)
                    }else{
                        alert("não tem saldo sulficiente na conta")
                    }
                break;

                case 2:
                    if(valorTransferencia + descontoTED <= conta){
                        alert(`parabens pela transferencia, foi rertirado 9,80 de descontos \n seu saldo é ${(conta - valorTransferencia - descontoTED).toFixed(2)}`)
                    }else{
                        alert("não tem saldo sulficiente na conta")
                    }

                break

            }
        break
    
        default :
        alert("teste")

    }


