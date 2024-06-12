## 📝 Aula 07: Desenvolva Funções

### ✅ O que são Funções?

As funções em JavaScript são blocos de código reutilizáveis que podem ser executados quando chamados. Elas podem receber dados, chamados de parâmetros, realizar operações e retornar um resultado. As funções ajudam a organizar e modularizar o código, tornando-o mais legível, reutilizável e fácil de dar manutenção.

### ✅ Como Criar Funções em JavaScript

Para criar uma função em JavaScript, utilizamos a palavra-chave `function`, seguida do nome da função e dos parâmetros entre parênteses, se houver. O corpo da função é delimitado por chaves `{}` e contém o código a ser executado.

```javascript
function nomeDaFuncao(parametro1, parametro2) {
  // código a ser executado
}
```

### ✅ Exemplos de Funções

#### Função para Somar Dois Números

```javascript
function somar(a, b) {
  return a + b
}

let resultado = somar(5, 3)
console.log(resultado) // Saída: 8
```

#### Função para Verificar se um Número é Par

```javascript
function verificarPar(numero) {
  if (numero % 2 === 0) {
    return true
  } else {
    return false
  }
}

let numeroPar = verificarPar(10)
console.log(numeroPar) // Saída: true
```

### ✅ Funções Anônimas

As funções anônimas são aquelas que não têm um nome definido. Elas são frequentemente utilizadas como argumentos de outras funções ou atribuídas a variáveis.

```javascript
let dobrar = function (x) {
  return x * 2
}

console.log(dobrar(4)) // Saída: 8
```

### ✅ Arrow Functions

As arrow functions são uma forma mais concisa de escrever funções em JavaScript, introduzidas no ECMAScript 6 (ES6).

```javascript
let quadrado = (x) => {
  return x * x
}

console.log(quadrado(3)) // Saída: 9
```

### ✅ Por que Desenvolver Funções?

- **Reutilização de Código**: Funções permitem encapsular blocos de código para serem reutilizados em diferentes partes do programa.
- **Organização**: Auxiliam na organização e estruturação do código, tornando-o mais legível e fácil de dar manutenção.
- **Abstração**: Permitem abstrair detalhes de implementação, focando no que uma função faz, em vez de como ela faz.

Dominar o desenvolvimento de funções é fundamental para escrever código JavaScript mais eficiente, modular e escalável.

[Material](./Desenvolva%20funções.pdf)
