let nomeUsuario = document.getElementById("nomeUsuario") ; // Puxa o dado do input -nomeUsuario- do html.
let botao = document.getElementById("botao");
let conteudoDoTexto = document.getElementById("conteudoDoTexto")
let botaoNota = document.getElementById("botaoNota")

botao.addEventListener("click", () => {
    /* alert(nomeUsuario.value) */
    conteudoDoTexto.innerHTML = nomeUsuario.value;

})

botaoNota.addEventListener("click", () => {
    
    let nota1 = parseInt(document.getElementById("nota1").value)
    let nota2 = parseInt(document.getElementById("nota2").value)
    let nota3 = parseInt(document.getElementById("nota3").value)
    let nota4 = parseInt(document.getElementById("nota4").value)
    
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    let resultado = document.getElementById("conteudoBoletim")

    resultado.innerHTML = `Oi ${nomeUsuario.value}, sua media foi ${media}`
    

})
