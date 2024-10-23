## 📝 Aula 03: Verifique os Tipos e Instâncias

### ✅ Introdução à Verificação de Tipos e Instâncias em JavaScript

Nesta aula, você aprenderá a verificar os tipos de dados em JavaScript e a distinguir entre tipos primitivos e instâncias de objetos. Além disso, vamos explorar como identificar se um objeto é uma instância de uma classe específica, utilizando ferramentas como `typeof` e `instanceof`.

### ✅ Objetivos

-   Compreender a verificação de tipos de dados em JavaScript.
-   Aprender a verificar instâncias de objetos personalizados.
-   Explorar a distinção entre tipos primitivos e instâncias de objetos.

### ✅ Verificação de Tipos com `typeof`

A função `typeof` é uma ferramenta útil para identificar o tipo de dado que você está manipulando. No entanto, é importante notar que `typeof` não diferencia entre objetos e arrays de maneira explícita.

#### Exemplo de Verificação de Tipos

```javascript
const nome = "Gian" // string
const idade = 30 // number
const ehMaiorDeIdade = true // boolean
const conhecimentos = ["HTML", "CSS", "JavaScript"] // object (array)
const pessoa = {
    // object
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos
}

console.log(typeof nome) // string
console.log(typeof idade) // number
console.log(typeof ehMaiorDeIdade) // boolean
console.log(typeof conhecimentos) // object
console.log(typeof pessoa) // object
```

### ✅ Verificação de Instâncias com `instanceof`

A palavra-chave `instanceof` permite verificar se um objeto foi criado a partir de uma função construtora específica. Isso é particularmente útil para trabalhar com objetos personalizados em JavaScript.

#### Exemplo de Verificação de Instâncias

```javascript
function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo
    this.fabricante = fabricante
    this.anoModelo = anoModelo
    this.anoFabricacao = anoFabricacao
    this.acelerar = function () {
        console.log("vruum")
    }
}

const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020)

console.log(carroDaMaria2 instanceof Carro) // true
console.log(conhecimentos instanceof Carro) // false
```

### ✅ Comparando `typeof` e `instanceof`

-   **`typeof`**: Retorna o tipo primitivo de um dado (como string, number, boolean) ou "object" para arrays e objetos.
-   **`instanceof`**: Verifica se um objeto é uma instância de uma função construtora específica, permitindo uma verificação mais precisa em comparação com `typeof`.
