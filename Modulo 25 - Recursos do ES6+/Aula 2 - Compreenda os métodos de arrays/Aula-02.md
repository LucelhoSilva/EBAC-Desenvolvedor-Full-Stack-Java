# 📝 Aula 2: Compreenda os Métodos de Arrays

## Objetivos

-   Compreender os diferentes métodos de array disponíveis no ES6+;
-   Praticar a iteração em arrays utilizando diversos métodos;
-   Aplicar os métodos de array em exemplos do mundo real.

## Conteúdos Abordados

### Iteração e Manipulação de Arrays no ES6+

Nesta aula, exploramos diversos métodos de array introduzidos no ES6+, cada um com funcionalidades específicas para manipulação e iteração de arrays.

### Comparação: Método Tradicional vs ES6+

Antes do ES6, para iterar sobre os elementos de um array, utilizávamos um loop `for` tradicional:

```javascript
const redesSociais = ["Facebook", "Instagram", "Twitter"]

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}
```

Com o ES6+, métodos mais intuitivos e funcionais foram introduzidos, facilitando o trabalho com arrays.

### Métodos de Arrays Aprendidos

#### `forEach`

O `forEach` executa uma função para cada elemento do array, mas não retorna nada.

```javascript
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})
```

#### `map`

O `map` cria um novo array com os resultados da aplicação de uma função a cada elemento do array original.

```javascript
const alunos = ["João", "Maria", "José", "Antônio"]
const alunos2 = alunos.map(function (itemAtual) {
    return {
        nome: itemAtual,
        curso: "Front-end",
        presente: false
    }
})
console.log(alunos2)
```

#### `find`

O `find` retorna o primeiro elemento do array que satisfaz a condição dada. Se nenhum elemento for encontrado, retorna `undefined`.

```javascript
const encontre = alunos2.find(function (aluno) {
    return aluno.nome === "José"
})
console.log(encontre)
```

#### `findIndex`

O `findIndex` retorna o índice do primeiro elemento que satisfaz a condição dada. Se nenhum elemento for encontrado, retorna `-1`.

```javascript
const encontreOindexe = alunos2.findIndex(function (aluno) {
    return aluno.nome === "Paulo"
})
console.log(encontreOindexe)
```

#### `every`

O `every` verifica se todos os elementos de um array satisfazem a uma condição. Retorna `true` se todos satisfazem, caso contrário, `false`.

```javascript
alunos2.push({
    nome: "Paulo",
    curso: "Back-end",
    presente: false
})

const todosOsAlunosSaoDeFrontEnd = alunos2.every(function (aluno) {
    return aluno.curso === "Front-end"
})
console.log(todosOsAlunosSaoDeFrontEnd)
```

#### `some`

O `some` verifica se pelo menos um dos elementos de um array satisfaz a uma condição. Retorna `true` se pelo menos um satisfaz, caso contrário, `false`.

```javascript
const ExisteAlgumAlunoDeBackEnd = alunos2.some(function (aluno) {
    return aluno.curso === "Back-end" && aluno.presente === true
})
console.log(ExisteAlgumAlunoDeBackEnd)
```

#### `filter`

O `filter` cria um novo array com todos os elementos que passam em um teste (condição).

```javascript
function filtraAlunosDeBackend(aluno) {
    return aluno.curso === "Back-end"
}

const alunosDeBackEnd = alunos2.filter(filtraAlunosDeBackend)
console.log(alunosDeBackEnd)
```

#### `reduce`

O `reduce` aplica uma função a um acumulador e a cada valor do array (da esquerda para a direita) para reduzi-lo a um único valor.

```javascript
const numeros = [10, 20, 30, 40, 50]

const somaDosNumeros = numeros.reduce(function (valorAcumulado, valorAtual) {
    return valorAcumulado + valorAtual
}, 0)

console.log(somaDosNumeros)
```

### Comparação: `for` Tradicional com `reduce`

O código abaixo faz a soma dos elementos de um array utilizando um loop `for` tradicional:

```javascript
let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]
}

console.log(soma)
```

A utilização do `reduce`, como visto anteriormente, simplifica esse processo, tornando o código mais conciso e expressivo.

### Referências e Recursos Adicionais

-   [Documentação MDN sobre Arrays](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
-   [Artigo sobre ES6+ Arrays](https://www.freecodecamp.org/news/javascript-array-methods-cheat-sheet/)
