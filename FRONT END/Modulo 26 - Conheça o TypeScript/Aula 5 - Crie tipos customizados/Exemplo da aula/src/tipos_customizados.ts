type aluno = {
  nome: string
  cursos?: string[]
  idade: number
}

const alunos: aluno[] = [
  {
    nome: "Lucelho",
    cursos: ["Back-end", "Front-end"],
    idade: 25
  },
  {
    nome: "Lorraine",
    cursos: ["UX/UI", "Front-end"],
    idade: 21
  },
  {
    nome: "Gabriel",
    cursos: ["Redes", "Infraestrutura"],
    idade: 19
  }
]

alunos.push({
  nome: "Lucas",
  cursos: ["Arquitetura"],
  idade: 27
})

const novoAluno: aluno = {
  nome: "Lucas",
  idade: 32
}

function exibeAluno(aluno: aluno) {
  console.log(`Nome: ${aluno.nome}`)
  console.log(`Idade: ${aluno.idade}`)
  if (aluno.cursos) {
    console.log(`Cursos: ${aluno.cursos.join(", ")}`)
  }
}
