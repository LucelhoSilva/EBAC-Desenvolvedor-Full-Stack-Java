const carroDoJoao = { // Objeto carro essa forma de criar um objeto é chamada de objeto literal
  modelo: 'Fiesta', // Propriedade(atributo) marca
  fabricante: 'Ford', // Propriedade(atributo) modelo
  anoModelo: 2020, // Propriedade(atributo) anoModelo
  anoFabricacao: 2019, // Propriedade(atributo) anoFabricacao
  acelerar: function () { // Método acelerar
    console.log('vruum');
  }
}
const carroDaMaria = { // Objeto carro essa forma de criar um objeto é chamada de objeto literal
  modelo: 'Ka', // Propriedade(atributo) marca
  fabricante: 'Ford', // Propriedade(atributo) modelo
  anoModelo: 2021, // Propriedade(atributo) anoModelo
  anoFabricacao: 2020, // Propriedade(atributo) anoFabricacao
  acelerar: function () { // Método acelerar
    console.log('vruum');
  }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) { // Função construtora
  this.modelo = modelo;
  this.fabricante = fabricante; 
  this.anoModelo = anoModelo; 
  this.anoFabricacao = anoFabricacao; 
  this.acelerar = function () { 
    console.log('vruum');
  }
}


const carroDoJoao2 = new Carro('Fiesta', 'Ford', 2020, 2019); // Instanciando um objeto carroDoJoao
const carroDaMaria2 = new Carro('Ka', 'Ford', 2021, 2020); // Instanciando um objeto carroDaMaria

console.log(carroDoJoao2);
console.log(carroDaMaria2);

const nome = 'gian';
const idade = 30;
const ehMaiorDeIdade = true;
const conhecimentos = ['HTML', 'CSS', 'JavaScript'];

const pessoa = {
  nome: nome,
  idade: idade,
  ehMaiorDeIdade: ehMaiorDeIdade,
  conhecimentos: conhecimentos
}
// se eu usar console.log(typeof) eu consigo verificar o tipo de dado que estou trabalhando,mas ele nao diferencia um objeto de um array, por exemplo
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ehMaiorDeIdade);
console.log(typeof conhecimentos);
console.log(typeof pessoa);
console.log(typeof carroDaMaria2);


// se eu quiser verificar se um objeto é uma instância de uma classe, eu posso usar o instanceof
console.log(carroDaMaria2 instanceof Carro);
console.log(conhecimentos instanceof Carro);
