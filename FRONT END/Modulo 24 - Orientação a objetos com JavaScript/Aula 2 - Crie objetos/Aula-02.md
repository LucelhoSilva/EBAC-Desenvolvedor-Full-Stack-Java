## 📝 Aula 02: Crie Objetos

### ✅ Introdução à Criação de Objetos em JavaScript

Nesta aula, você aprenderá sobre as duas abordagens principais para a criação de objetos em JavaScript: a **notação literal** e as **funções construtoras**. Entender como criar objetos é fundamental para organizar e manipular dados de forma eficiente em seus projetos.

### ✅ Objetivos

-   Compreender a criação de objetos por meio da notação literal.
-   Aprender a criar objetos por meio de funções construtoras.
-   Praticar a criação de objetos utilizando ambas as abordagens.

### ✅ Criação de Objetos com Notação Literal

A notação literal é uma maneira simples e direta de criar objetos em JavaScript. Ela é especialmente útil para objetos pequenos e quando não há a necessidade de criar múltiplas instâncias de um objeto com a mesma estrutura.

#### Exemplo de Objeto Literal

```javascript
const carroDoJoao = {
    modelo: "Fiesta",
    fabricante: "Ford",
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function () {
        console.log("vruum")
    }
}

const carroDaMaria = {
    modelo: "Ka",
    fabricante: "Ford",
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function () {
        console.log("vruum")
    }
}

console.log(carroDoJoao)
console.log(carroDaMaria)
```

### ✅ Criação de Objetos com Funções Construtoras

Em projetos maiores, onde a repetição de código se torna inviável, o uso de funções construtoras é uma alternativa poderosa. Com as funções construtoras, você pode definir uma estrutura de objeto e criar múltiplas instâncias com facilidade.

#### Exemplo de Função Construtora

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

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019)
const carroDaMaria2 = new Carro("Ka", "Ford", 2021, 2020)

console.log(carroDoJoao2)
console.log(carroDaMaria2)
```

### ✅ Comparando as Abordagens

-   **Notação Literal**: Ideal para criar objetos de forma rápida e sem a necessidade de replicação.
-   **Funções Construtoras**: Mais apropriado para projetos onde há necessidade de criar múltiplas instâncias com a mesma estrutura de dados.
