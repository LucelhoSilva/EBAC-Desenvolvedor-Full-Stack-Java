"use strict";
// Função de multiplicação
function multiplicar(num1, num2) {
    return num1 * num2;
}
// Função de multiplicação com arrow function
const multiplicars = (num1, num2) => num1 * num2;
// Função de saudação
function saudacao(nome) {
    return `Olá, ${nome}`;
}
// Função de saudação com arrow function
const saudacaos = (nome) => `Olá ${nome}`;
console.log(multiplicar(2, 3));
console.log(saudacao("Lucelho"));
console.log(multiplicars(5, 3));
console.log(saudacaos("Lucelho Silva"));
