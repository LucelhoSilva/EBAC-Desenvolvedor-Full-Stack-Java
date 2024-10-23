"use strict";
function calculaArea(largura, altura) {
    return largura * altura;
}
// Arrow Function
const calculaArea2 = (largura, altura) => largura * altura;
// Operador Rest
function somar(...numeros) {
    // numeros.reduce()
    console.log(numeros);
}
// Union Types
function teste() {
    if (10 > 5) {
        return "Dez é maior que cinco";
    }
    else {
        return 5;
    }
}
const resultadoDeTeste = teste();
