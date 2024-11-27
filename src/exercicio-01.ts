// 1 - Escreva um programa que recebe um numero
// e diga que ele está em um intervalo entre 100 e 200.

//ENTRADA
const numero = 8;

//PROCESSAMENTO
let estaNoIntervalo = false;
if (numero >= 100) {
  if (numero <= 200) {
    estaNoIntervalo = true;
  } else {
    estaNoIntervalo = false;
  }
}
else {
  estaNoIntervalo = false;
}


//SAIDA
//SE ESTA OU NÃO NO INTERVALO ENTRE 100 E 200

if (estaNoIntervalo) {
  console.log(numero + "está no intervalo entre 100 e 200" );
} else {
  console.log(numero + "não está no intervalo entre 100 e 200");
}
