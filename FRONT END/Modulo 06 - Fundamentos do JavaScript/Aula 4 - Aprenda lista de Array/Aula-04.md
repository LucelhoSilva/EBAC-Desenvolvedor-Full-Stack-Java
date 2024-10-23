## 📝 Aula 04: Aprenda Listas de Array

### ✅ O que é um Array?

Um array em JavaScript é uma estrutura de dados que permite armazenar múltiplos valores em uma única variável. Cada elemento em um array possui um índice que o identifica dentro do array. Os arrays podem conter elementos de diferentes tipos de dados, como números, strings, objetos, etc.

### ✅ Como Criar e Acessar Arrays em JavaScript

Para criar um array em JavaScript, basta listar os elementos entre colchetes (`[]`), separados por vírgulas.

```javascript
let numeros = [1, 2, 3, 4, 5]
let cores = ["vermelho", "azul", "verde"]
let misto = [10, "texto", true]
```

Para acessar os elementos de um array, utilizamos o índice correspondente ao elemento desejado, começando do índice 0.

```javascript
console.log(numeros[0]) // Saída: 1
console.log(cores[1]) // Saída: azul
console.log(misto[2]) // Saída: true
```

### ✅ Operações com Arrays

#### Adicionar Elementos: `push()`

O método `push()` adiciona um ou mais elementos ao final de um array.

```javascript
let frutas = ["maçã", "banana"]
frutas.push("laranja")

console.log(frutas) // Saída: ["maçã", "banana", "laranja"]
```

#### Remover Elementos: `pop()`

O método `pop()` remove o último elemento de um array e retorna o elemento removido.

```javascript
let frutas = ["maçã", "banana", "laranja"]
let ultimaFruta = frutas.pop()

console.log(ultimaFruta) // Saída: laranja
console.log(frutas) // Saída: ["maçã", "banana"]
```

#### Tamanho do Array: `length`

A propriedade `length` retorna o número de elementos em um array.

```javascript
let frutas = ["maçã", "banana", "laranja"]
console.log(frutas.length) // Saída: 3
```

### ✅ Exemplos de Uso de Arrays

#### Iterando sobre um Array

```javascript
let numeros = [1, 2, 3, 4, 5]

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i])
}
```

#### Encontrando o Maior Número em um Array

```javascript
let numeros = [10, 5, 20, 8, 15]
let maior = numeros[0]

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i]
  }
}

console.log("O maior número é: " + maior) // Saída: O maior número é: 20
```

### ✅ Por que Aprender Listas de Array?

- **Armazenamento de Dados**: Arrays são essenciais para armazenar e organizar conjuntos de dados.
- **Manipulação de Dados**: Permitem realizar operações como adição, remoção e iteração sobre os elementos.
- **Flexibilidade**: São uma estrutura de dados versátil e amplamente utilizada em JavaScript e em muitas outras linguagens de programação.

Ao aprender a trabalhar com arrays em JavaScript, você estará preparado para lidar com uma variedade de situações e desenvolver aplicações mais dinâmicas e eficientes.
