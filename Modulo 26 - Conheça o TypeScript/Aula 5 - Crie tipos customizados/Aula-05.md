## 📝 Aula 05: Crie Tipos Customizados

### ✅ Introdução

Nesta aula, você aprenderá a criar e utilizar **tipos customizados** no TypeScript. Tipos customizados permitem que você defina **estruturas de dados personalizadas** para representar objetos mais complexos no seu código, garantindo maior **flexibilidade** e **segurança** ao desenvolver aplicações.

### ✅ Objetivos

- Compreender os conceitos de **tipos customizados**.
- Criar e aplicar **tipos customizados** em diferentes cenários.
- Aprender a utilizar **opcionais** dentro de tipos customizados.

### ✅ O que são Tipos Customizados?

Tipos customizados permitem que você defina a estrutura de um objeto, estabelecendo quais propriedades ele deve ter e quais os seus respectivos tipos. Isso torna o código mais **legível** e facilita o **reuso**.

### ✅ Criando um Tipo Customizado

No TypeScript, você pode usar a palavra-chave `type` para definir tipos personalizados.

#### Exemplo de Definição de um Tipo Customizado:

```typescript
type aluno = {
  nome: string
  cursos?: string[] // A propriedade "cursos" é opcional
  idade: number
}
```

Neste exemplo, definimos o tipo `aluno` que possui três propriedades:

- `nome`: Uma string que armazena o nome do aluno.
- `cursos`: Um array opcional de strings, onde cada string representa um curso.
- `idade`: Um número que representa a idade do aluno.

### ✅ Aplicando Tipos Customizados

Agora que criamos nosso tipo customizado `aluno`, podemos utilizá-lo para tipar objetos e arrays de alunos, garantindo que todos sigam a mesma estrutura.

#### Exemplo de Uso:

```typescript
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
```

Aqui, criamos um array de `aluno[]` contendo três objetos do tipo `aluno`. Cada objeto contém o nome, cursos (quando aplicável), e a idade do aluno. Como `cursos` é uma propriedade opcional, alguns alunos podem ou não ter cursos cadastrados.

### ✅ Adicionando Novos Alunos

Você pode facilmente adicionar novos alunos ao array, sempre respeitando a estrutura do tipo `aluno`.

#### Exemplo de Inserção:

```typescript
alunos.push({
  nome: "Lucas",
  cursos: ["Arquitetura"],
  idade: 27
})
```

Neste exemplo, adicionamos um novo aluno com os campos `nome`, `cursos` e `idade`. O TypeScript garante que o novo objeto siga a estrutura correta.

### ✅ Trabalhando com Propriedades Opcionais

Como o campo `cursos` é opcional (`cursos?`), é possível criar um objeto `aluno` sem fornecer essa propriedade.

#### Exemplo:

```typescript
const novoAluno: aluno = {
  nome: "Lucas",
  idade: 32
}
```

Aqui, criamos um novo aluno sem especificar os cursos, já que essa propriedade é opcional. O TypeScript aceita essa definição porque a estrutura ainda está de acordo com o tipo `aluno`.

### ✅ Funções com Tipos Customizados

Você pode criar funções que utilizam tipos customizados como parâmetros, garantindo que os dados sejam passados de forma segura e correta.

#### Exemplo de Função:

```typescript
function exibeAluno(aluno: aluno) {
  console.log(`Nome: ${aluno.nome}`)
  console.log(`Idade: ${aluno.idade}`)
  if (aluno.cursos) {
    console.log(`Cursos: ${aluno.cursos.join(", ")}`)
  }
}
```

A função `exibeAluno` recebe um objeto do tipo `aluno` como argumento e exibe suas propriedades. Se o aluno tiver cursos cadastrados, eles são exibidos em uma lista separada por vírgulas.

### ✅ Conclusão

Criar e utilizar **tipos customizados** no TypeScript é uma prática poderosa que melhora a legibilidade e a segurança do código. Ao definir tipos específicos para suas estruturas de dados, você garante que o seu código seja mais previsível, fácil de manter e menos propenso a erros. A flexibilidade de propriedades opcionais também permite uma maior adaptabilidade nas suas aplicações.
