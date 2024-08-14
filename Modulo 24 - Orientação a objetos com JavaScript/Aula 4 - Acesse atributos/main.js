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

const nome = 'Lucelho';
const idade = 30;
const ehMaiorDeIdade = true;
const conhecimentos = ['HTML', 'CSS', 'JavaScript'];

const pessoa = {
  nome: nome,
  idade: idade,
  ehMaiorDeIdade: ehMaiorDeIdade,
  conhecimentos: conhecimentos
}

// Para acessar um atributo de um objeto, utilizamos a notação de ponto
console.log(pessoa.nome);

// Para acessar um atributo de um objeto, também podemos utilizar a notação de colchetes
console.log(pessoa['nome']);


// 
function exibirAtributos(nomeAtributo) {
    console.log(pessoa[nomeAtributo]);
}

//apesar de ser constante os atributos do objeto podem ser alterados
pessoa[sobrenome] = undefined;
pessoa.nome = 'Lucas';

// para fazer que essa constante seja imutavel tenha seu verdadeiramente constante a gente congela o objeto usando o Object.freeze
Object.freeze(pessoa);

exibirAtributos('nome');

if (pessoa[sobrenome]) {
    console.log('a pessoa tem um sobrenome');
}

// o in verifica se a propriedade existe no objeto
if ('sobrenome' in pessoa) {
    console.log('a pessoa tem um sobrenome');
}

console.log(Object.keys(pessoa)); // retorna um array com as chaves do objeto, muito util para saber a quantidade de atributos que um objeto tem
console.log(Object.values(pessoa)); // retorna um array com os valores do objeto
console.log(Object.entries(pessoa)); // retorna um array com arrays de chave e valor
console.log(Object.keys(pessoa).length); // retorna a quantidade de atributos que um objeto tem