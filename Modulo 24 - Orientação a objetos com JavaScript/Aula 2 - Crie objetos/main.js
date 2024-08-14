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