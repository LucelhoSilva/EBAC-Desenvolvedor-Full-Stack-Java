"use strict";

var _this = void 0;
var minhaFuncao2 = function minhaFuncao2() {
  return "Diz ola";
};

// Os parenteses são obrigatórios quando a função não recebe parâmetros ou recebe mais de um parâmetro
var retornaUmCarro = function retornaUmCarro() {
  return {
    marca: "Fiat",
    modelo: "Uno"
  };
};
console.log(retornaUmCarro());
console.log(minhaFuncao2());
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    _this.velocidadeAtual -= 10;
  }
};
carro.acelerar();
console.log(carro.velocidadeAtual); // 50
carro.frear();
console.log(carro.velocidadeAtual); // NaN