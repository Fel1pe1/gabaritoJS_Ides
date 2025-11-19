

let botaoMaca = document.getElementById("calculoMaca")


botaoMaca.addEventListener("click", () => {
    
let quantidadeMaca = parseInt(document.getElementById("numeroMaca").value)

let valorCompleto = 0.30
let valorDesconto = 0.25

let resultadoMaca = document.getElementById("resultadoMaca");
let resultado = 0;

    if(quantidadeMaca < 12){
     resultado = quantidadeMaca * valorCompleto

    }else{
     resultado = quantidadeMaca * valorDesconto
    }

    resultadoMaca.innerHTML = (`Olá, o valor de sua compra foi ${resultado}`)

})

   
     
