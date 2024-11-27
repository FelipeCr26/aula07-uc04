// 3 - Escreva um programa que resolva o seguinte problema:
// uma cópia "xerox" custa 0,25 por folha.
// mas acima de 100 folhas esse valor cai para 0,20 por folha.
// Dado o total de copias, informe o valor a ser pago.

//Entrada
const numeroCopias = 100;

//Processamento
let valorTotal = 0;

if (numeroCopias < 100) {
  valorTotal = numeroCopias * 0.25;
} else {
  valorTotal = numeroCopias * 0.20;
}

//Saida
console.log("O valor total para " + numeroCopias + " é R$ " + valorTotal)
