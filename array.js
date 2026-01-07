// Laço de repetição

/* let numero = parseInt(prompt("qual numero vc quer tabuar?"))

for (let i = 0; i <= 10; i++){
    let resultados = numero * i
    
    console.log(`${numero} x ${i} = ${resultados} e é ${((resultados % 2 === 0) ? "par": "impar")} `)
} */
/* 
let aluno = ["wallys", "Felipe", "Agatha","Victor"]
let idades = [31, 18, 17,19]

for(let i = 0; i < aluno.length; i++){
    console.log(`${aluno[i]} tem ${idades[i]} anos`)
} */

let whi = 1

while(whi != 0){
let temp = parseInt(prompt("Quantos segundos pro BUUUUMMMMM?"))
let contador = temp
if ( temp < 0){
    alert("Numero Invalido")
}else{
    for (let i = 0; i < temp; i++){
        alert(`Faltam ${contador} segundos para explodir`)
        contador --
    }alert("BUUUUMMM!!!")
    whi = 0

}}