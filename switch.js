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
    
                if(quantidadeProduto > 6){
                alert(produtoUm * quantidadeProduto - desconto )
                }else {
                alert(produtoUm * quantidadeProduto)
                }
                break;

                case 2:

                if(quantidadeProduto > 6){
                alert(produtoUm * quantidadeProduto - desconto - descontoAv )
                }else {
                alert(produtoUm * quantidadeProduto)
                }
                break;    

            }
        break;

        case 2:
             let pagamento2 = parseInt(prompt("selecione a opção de pagamento: \n1 - Parcela \n2 - A vista "));
            switch(pagamento){


                case 1:
                
    
                if(quantidadeProduto > 6){
                alert(produtoUm * quantidadeProduto - desconto )
                }else {
                alert(produtoUm * quantidadeProduto)
                }
                break;

                case 2:

                if(quantidadeProduto > 6){
                alert(produtoUm * quantidadeProduto - desconto - descontoAv )
                }else {
                alert(produtoUm * quantidadeProduto)
                }
                break;    

            }
        break;
        case 3:
            switch(pagamento){
                case 1:
    
                if(quantidadeProduto > 6){
                alert(produtoUm * quantidadeProduto - desconto )
                }else {
                alert(produtoUm * quantidadeProduto)
                }
                break;

                case 2:

                if(quantidadeProduto > 6){
                alert(produtoUm * quantidadeProduto - desconto - descontoAv )
                }else {
                alert(produtoUm * quantidadeProduto)
                }
                break;    

            }
        break;





    }
