// 3 - Escreva um programa que informe
// a categoria de um jogador de futebol, considerando sua idade:
// infantil (até 13 anos),
// juvenil (até 17 anos) ou
// sênior (acima de 17 anos).

const idadeJogador = 15;

let categoria = "";

if (idadeJogador <= 13) {
  categoria = "infantil"
} else {
  if (idadeJogador <= 17){
  categoria = "juvenil"
} else {
  categoria = "Bolero"
}
}

console.log ("A categoria do Jogador é " + categoria);