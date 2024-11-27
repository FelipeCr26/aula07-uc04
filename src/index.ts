//crie um programa que valida se uma pessoa pode entrar em uma festa
//as regras para a pessoa entrar são:
//necessario ter mais de 18 anos
//ou estar junto de um responsavel se for menor de idade

//ENTRADA

const idadePessoa = 18

const estaComResponsavel = true

const estaComRG = true



//PROCESSAMENTO

if (estaComRG){
if (idadePessoa >= 18){
//SAIDA
    console.log("Entrada liberada")
} else {console.log("Entrada Bloqueada")}
if (estaComResponsavel){
    console.log("Entrada Liberada")
} else {console.log("Entrada Bloqueada")}}



if (estaComRG && (idadePessoa >= 18 || estaComResponsavel)) {

    console.log("Entrada liberada")
} else {console.log("entrada bloqueada")}
