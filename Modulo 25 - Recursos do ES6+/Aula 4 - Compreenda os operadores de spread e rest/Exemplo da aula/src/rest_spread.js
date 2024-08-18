function somar() {
  let soma = 0;
  for (let i = 0; i < arguments.length; i++) { // arguments e interavel mas nao é um array
    soma += arguments[i];
  }
    return soma;
    // [Arguments] { '0': 10, '1': 20 } oque chamamos de dicionario
    // return a + b;
}
console.log(somar(10, 20, 30)); // 60

// no ES6+ temos o rest operator
// ela tem algumas restricoes nao pode ter 2 argumentos usando rest operator (...numeros, ...letra) e ele tem que ser o ultimo parametro (nome, sobrenome, ..numeros)
// o rest seria como se tivsse pegando o restante dos argumentos, oque sobrou dos argumentos
function somarComRest1(...numeros) {
  const soma = numeros.reduce((total, numeroAtual) => {
    total += numeroAtual;
    return total
  }, 0);
  return soma;
}

console.log(somarComRest1(10, 20, 30)); // 60

function somarComRest(...numeros) {
  return numeros.reduce((total, numeroAtual) => total + numeroAtual, 0);
}

console.log(somarComRest(10, 20, 30)); // 60

// Oque vai diferenciar o spread de um rest é o contexto que ele é usado, o seu caso de uso, agente utiliza o rest como argumento de uma função e o spread pra fazer concatencao de arrays ou objetos, prrencher um objeto com outro objeto, etc

// spread operator
// ele é usado para desmembrar(espalhar) elementos de um array ou objeto
const numeros = [1, 2, 3, 4];
console.log(...numeros); // 10 20 30

const timesDeFutebolDeSp = ['São Paulo', 'Corinthians', 'Palmeiras', 'Santos'];
const timesDeFutebolDoRJ = ['Flamengo', 'Vasco', 'Fluminense', 'Botafogo'];
const timesDeFutebolDeMG = ['Cruzeiro', 'Atlético', 'América'];

// usando o concat

// const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRJ).concat(timesDeFutebolDeMG);
// const timesDeFutebol = [].concat(timesDeFutebolDeSp, timesDeFutebolDoRJ, timesDeFutebolDeMG);
// console.log(timesDeFutebol);

// ou com spred operator

const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRJ, ...timesDeFutebolDeMG];
console.log(timesDeFutebol);

// A partir do spred operator conseguimos esta reaproveitar as propriedades de um objeto e criar um novo objeto com as propriedades do objeto anterior e adicionar novas propriedades ou sobrescrever propriedades existentes
const carroDaJulia = {
  marca: 'gol',
  modelo: 'vw',
  motor: 1.6
};

const carroDaAna = {
  ...carroDaJulia,
  motor: 2.0,
};


// desestruturacao de objetos com a gente pode esta aplicando oque a gente chama de aliases(apelidos ás variaveis) ou renomear as propriedades
// const motorDoCarroDaAna = carroDaAna.motor;
const { motor: motorDoCarroDaAna} = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia; // oque esta acontecendo aqui é que estamos pegando a propriedade motor do objeto carroDaJulia e atribuindo a variavel motorDoCarroDaJulia

console.log(motorDoCarroDaAna); // 2
console.log(motorDoCarroDaJulia); // 1.6

// desestruturacao de arrays
// o reste seria como tivese pegando o restante dos elementos
const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;

console.log(item1); // São Paulo
console.log(item2); // Corinthians
console.log(item3); // Palmeiras
console.log(outrosTimes); // [ 'Santos', 'Flamengo', 'Vasco', 'Fluminense', 'Botafogo', 'Cruzeiro', 'Atlético', 'América' ]