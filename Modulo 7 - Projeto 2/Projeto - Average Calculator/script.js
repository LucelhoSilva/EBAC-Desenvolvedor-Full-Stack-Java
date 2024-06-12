const form = document.getElementById('form-activity');
const imgAprovado = '<img src="./assets/img/aprovado.png" alt="Emoji celebrando" />'
const imgReprovado = '<img src="./assets/img/reprovado.png" alt="Emoji decepcionado" />'
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota minima para aprovação: "));
let linhas = '';


form.addEventListener('submit',function(e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  atualizaMedia();
});

function adicionaLinha() {
  const inputNome = document.getElementById('input-nome');
  const inputNota = document.getElementById('input-nota');

  if (atividades.includes(inputNome.value)) {
    alert(`A atividade ${inputNome.value} já foi adicionada!`);
  } 
  else {
    atividades.push(inputNome.value);
    notas.push(parseFloat(inputNota.value));
 
  

  atividades.push(inputNome.value);
  notas.push(parseFloat(inputNota.value));

  let linha = '<tr>' ;
  linha += `<td>${inputNome.value}</td>`;
  linha += `<td>${inputNota.value}</td>`;
  linha += `<td>${inputNota.value >= notaMinima ? imgAprovado : imgReprovado}</td`; /*usando o operador ternário ?(if) :(else)*/
  linha += '</tr>';

  linhas += linha;
}
  inputNome.value = '';
  inputNota.value = '';
}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}

function atualizaMedia (){
  const mediaFinal = calculaMedia();
  document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
  document.getElementById('media-final-resultado').innerHTML = mediaFinal>= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMedia() {
  let somaDasNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }

  return somaDasNotas / notas.length;
}