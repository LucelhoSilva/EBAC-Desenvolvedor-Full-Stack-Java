class aluno {
  constructor(nomeAluno, notaAluno) {
    this.nome = nomeAluno;
    this.nota = notaAluno;
  }
}

const alunos = [
  new aluno("Rose", 7),
  new aluno("Hellen", 6),
  new aluno("Lorraine", 10),
  new aluno("Jurandir", 3),
  new aluno("Lucelho", 9),
  new aluno("Aparecida", 8),
  new aluno("Gabriel", 5),
  new aluno("Lucas", 4),
];

const aprovados = alunos.filter((aluno) => aluno.nota >= 6);

console.log(aprovados);