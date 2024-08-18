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
  // A arrow function não tem o this, então ela não consegue acessar o objeto carro
  // this dentro de uma arrow function depende do contexto em que ela foi criada, e quem chama a função 
  frear: function frear() {
    _this.velocidadeAtual -= 10;
  }
};

// O recomendado é sempre que formos trabalhar com orientação a objeto aonde temos que acessar esse this, a gente deve optar pela forma convecional de criar funções, com toda aquela estrutura de function, mas quando precisamos fazer coisas mais sucintas e rápidas, a arrow function é uma ótima opção, como por exemplo um retorno de uma função ou um map, filter, reduce, etc. Podemos usar a arrow function sem problemas.

carro.acelerar();
console.log(carro.velocidadeAtual); // 50
carro.frear();
console.log(carro.velocidadeAtual); // undefined