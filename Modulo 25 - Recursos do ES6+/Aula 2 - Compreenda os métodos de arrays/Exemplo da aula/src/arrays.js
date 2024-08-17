// Usado para manipular arrays antes da versão ES6
const redesSociais = ['Facebook', 'instagram', 'twitter'];
for (let i = 0; i < redesSociais.length; i++) {
  console.log(`eu tenho perfil na redesocial: ${redesSociais[i]}`);
}
//__________________________________________________________________________________________________________________________________________________________________________________

//__________________________________________________________________________________________________________________________________________________________________________________
// forEach é um método de array que executa uma função uma vez para cada elemento do array e nao retorna nada é o unico metodo que nao retorna nada
redesSociais.forEach(function (nomeDaRedeSocial, indice) { // Esse tipo recebe o nome de funçao anonima
  console.log(`#${indice} eu tenho perfil na redesocial: ${nomeDaRedeSocial}`);
});
const alunos = ['João', 'Maria', 'José', 'Antônio'];
//__________________________________________________________________________________________________________________________________________________________________________________

//__________________________________________________________________________________________________________________________________________________________________________________
// map é um método de array que cria um novo array com os resultados da chamada de uma função para cada elemento do array
const alunos2 = alunos.map(function (itemAtual) { // Esse tipo recebe o nome de funçao anonima
  return {
    nome: itemAtual,
    curso: 'Front-end',
    presente: false
  }
});
console.log(alunos2);
//__________________________________________________________________________________________________________________________________________________________________________________

//__________________________________________________________________________________________________________________________________________________________________________________
// O find é usado para retorna o item que você está procurando
const encontre = alunos2.find(function (aluno) { // Esse tipo recebe o nome de funçao anonima
  return aluno.nome == 'José'; // quando nao tem o item ele retorna undefined
});
console.log(encontre);
//__________________________________________________________________________________________________________________________________________________________________________________

//__________________________________________________________________________________________________________________________________________________________________________________
// map é um método de array que cria um novo array com os resultados da chamada de uma função para cada elemento do array
const numeros = [2, 4, 6, 8, 10];
const dobroDosNumeros = numeros.map(function (numeroAtual) { // Esse tipo recebe o nome de funçao anonima
  return numeroAtual * 2;
});
console.log(dobroDosNumeros);
//__________________________________________________________________________________________________________________________________________________________________________________

//__________________________________________________________________________________________________________________________________________________________________________________
// O findindex é usado para retorna o index do item que você está procurando
const encontreOindexe = alunos2.findIndex(function (aluno) { // Esse tipo recebe o nome de funçao anonima
  return aluno.nome == 'Paulo'; // quando nao tem o item ele retorna -1
});
console.log(encontreOindexe);
//__________________________________________________________________________________________________________________________________________________________________________________

//__________________________________________________________________________________________________________________________________________________________________________________
// O every é um método de array que verifica se todos os elementos de um array satisfazem a uma condição
alunos2.push({
  nome: 'Paulo',
  curso: 'Back-end',
  presente: false
});

const todosOsAlunosSaoDeFrontEnd = alunos2.every(function (aluno) { // Esse tipo recebe o nome de funçao anonima
  return aluno.curso === 'Front-end';
});
console.log(todosOsAlunosSaoDeFrontEnd);

//__________________________________________________________________________________________________________________________________________________________________________________
// O some é um método de array que verifica se pelo menos um dos elementos de um array satisfaz a uma condição
const ExisteAlgumAlunoDeBackEnd = alunos2.some(function (aluno) { // Esse tipo recebe o nome de funçao anonima
  return aluno.curso === 'Back-end' && aluno.presente === true
});
console.log(ExisteAlgumAlunoDeBackEnd);
//__________________________________________________________________________________________________________________________________________________________________________________

//__________________________________________________________________________________________________________________________________________________________________________________
// O filter ele filtra os elementos de um array com base em uma condição
function filtraAlunosDeBackend(aluno){
  return aluno.curso === 'Back-end';
}

const alunosDeBackEnd = alunos2.filter(filtraAlunosDeBackend)

console.log(alunosDeBackEnd);
//__________________________________________________________________________________________________________________________________________________________________________________

//__________________________________________________________________________________________________________________________________________________________________________________
// O reduce é um método de array que reduz todos os elementos de um array em um único valor
const numeros2 = [10, 20, 30, 40, 50];

const somaDosNumeros = numeros2.reduce(function (valorAcumulado, valorAtual) {
  return valorAcumulado += valorAtual;
  },0
)
console.log(somaDosNumeros);
//__________________________________________________________________________________________________________________________________________________________________________________

//__________________________________________________________________________________________________________________________________________________________________________________
// Fazenod isso com for 
let soma = 0;

for (let i = 0; i < numeros2.length; i++) {
  soma += numeros2[i];
}

console.log(soma);
//__________________________________________________________________________________________________________________________________________________________________________________