//while

/* let opcaoUsuario = 1 */
/* let numeroUsuario = 0;

while (numeroUsuario <= 100) {
    alert(`seu numero é: ${numeroUsuario}`);
    numeroUsuario += 5;   
} */

/* while (opcaoUsuario != 2) {

    opcaoUsuario = parseInt(prompt(`deseja encerrar \n -1 nao \n -2 sim`))
} */

/* while (opcaoUsuario != 1){
    opcaoUsuario ++
    alert("foi")
} */

/* do {
    opcaoUsuario = parseInt(prompt("Deseja encerrar? \n1-sim \n 2-nao")
    )
}while (opcaoUsuario = 0) */

/* 
------------------------------------------------------------------------------------------------------------------ */


// Caixa padaria 
/* 
let totalCompra = 0;
let encerrarCompra = 0 

while(encerrarCompra != 2){
    let precoProduto = parseInt(prompt("qual preço do bagulhete?"))
    totalCompra = precoProduto + totalCompra

    encerrarCompra = parseInt(prompt("vc esta satisfeito? \n1-não \n2-sim"))

}

alert(`o total da sua compra foi ${totalCompra}`) */

/* 
------------------------------------------------------------------------------------------------------------------- */

// Maior numero
/* 
let totalNumero = 0
let maiorNumero = 0

while (totalNumero != 5) {
    num1  = parseInt(prompt("Digite um numero"))
    
    if (num1 > maiorNumero){
        maiorNumero = num1
    }
    
    totalNumero ++
}

alert(`O maior numero foi: ${maiorNumero}`)
 */

/* 
------------------------------------------------------------------------------------------------------------------- */

// Tabuada 
/* let opcaoUsuario2 = 0
let resultado = 0

while (opcaoUsuario2 != 1) {
    let num1 = parseInt(prompt("Digite um numero"))
    let operacao = parseInt(prompt("Digite a operação \n1- + \n2- - \n3- * \n 4- / "))
    let num2 = parseInt(prompt("Digite um numero"))

    switch(operacao){
        case 1:
            resultado = num1 + num2
        break;

        case 2:
            resultado = num1 - num2
        break;

        case 3:
            resultado = num1 * num2
        break;

        case 4:
            resultado = num1 / num2
        break;
        
    }
    alert(`Seu resultado foi ${resultado}`)

    opcaoUsuario2 = parseInt(prompt("Quer encerrar? \n1-sim \n 2-Não"))

} */

/* 
------------------------------------------------------------------------------------------------------------------- */

// ScripParaBaixinhos

let numPatos = parseInt(prompt("Quantos patinhos tinham la na lagoinha?"))
let patinhosVoltaram = numPatos - 1
let patinhosVoltaramFinal = numPatos

while (numPatos != 0){

    if(patinhosVoltaram >= 2){
        alert(`${numPatos} patinhos saíram para passear \n Depois das montanhas \nPara brincar \n A mamãe chamou: Quá, quá, quá, quá… `)
        alert(`Mas somente ${patinhosVoltaram} patinhos voltaram de lá.`)
    }else if(patinhosVoltaram == 1){
        alert(`${numPatos} patinhos saíram para passear \n Depois das montanhas \nPara brincar \n A mamãe chamou: Quá, quá, quá, quá… `)
        alert(`Mas somente ${patinhosVoltaram} patinho voltou de lá.`) 
    }else{
        alert(`${numPatos} patinho foi passear \n Depois das montanhas \nPara brincar \n A mamãe chamou: Quá, quá, quá, quá… `)
        alert(`Mas nenhum patinho voltaram de lá.`)
    }
    console.log(patinhosVoltaram)

        numPatos -- 
        patinhosVoltaram --
}
alert(`A mamãe patinha saiu procurar\nDepois das montanhas\nPerto do mar\nA mamãe chamou: Quá, quá, quá, quá\nE os ${patinhosVoltaramFinal} patinhos voltaram de lá.`)
