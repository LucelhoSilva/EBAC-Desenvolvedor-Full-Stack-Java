## 📝 Aula 03: Conheça a Arrow Function

### ✅ Introdução às Arrow Functions em JavaScript

Nesta aula, você aprenderá sobre as **arrow functions**, uma maneira concisa de escrever funções em JavaScript introduzida no ES6. Embora a sintaxe simplificada seja uma de suas principais vantagens, as arrow functions também apresentam diferenças importantes em relação às funções tradicionais, especialmente no que diz respeito ao contexto de execução, ou seja, o uso do `this`.

### ✅ Objetivos

-   Compreender o conceito de arrow function e como ela difere das funções tradicionais.
-   Identificar e escrever corretamente a sintaxe de uma arrow function.
-   Compreender como o contexto (`this`) funciona em arrow functions em comparação com funções tradicionais.
-   Saber quando é apropriado usar arrow functions em diferentes cenários.

### ✅ Sintaxe das Arrow Functions

A sintaxe das arrow functions é mais compacta e direta, o que as torna ideais para funções simples. No entanto, essa sintaxe também altera a maneira como o `this` é tratado dentro da função, o que pode afetar seu comportamento em certos contextos.

#### Exemplo Simples de Arrow Function

```javascript
const minhaFuncao2 = () => "Diz ola"

// Os parênteses são obrigatórios quando a função não recebe parâmetros ou recebe mais de um parâmetro
const retornaUmCarro = () => ({ marca: "Fiat", modelo: "Uno" })

console.log(retornaUmCarro())
console.log(minhaFuncao2())
```

### ✅ Diferença de Contexto: `this` em Arrow Functions

Uma das diferenças mais importantes entre arrow functions e funções tradicionais é como o `this` é tratado. Em funções tradicionais, o valor de `this` depende de como a função é chamada. Já em arrow functions, o `this` é definido lexicalmente, ou seja, ele mantém o valor de `this` do contexto onde a função foi definida.

#### Exemplo de Função Tradicional vs Arrow Function

```javascript
const carro = {
    velocidadeAtual: 40,
    acelerar: function () {
        this.velocidadeAtual += 10
    },
    frear: () => {
        this.velocidadeAtual -= 10 // Aqui, o this não se refere ao objeto carro
    }
}

carro.acelerar()
console.log(carro.velocidadeAtual) // 50
carro.frear()
console.log(carro.velocidadeAtual) // undefined
```

### ✅ Quando Usar Arrow Functions

As arrow functions são ideais para situações onde você precisa de funções mais curtas e não precisa manipular o `this` diretamente. Elas são frequentemente usadas em callbacks, como nos métodos `map`, `filter`, e `reduce` de arrays, ou para funções simples que retornam valores diretamente.

No entanto, quando você está trabalhando com orientação a objetos, onde o `this` é uma parte fundamental, é recomendável usar funções tradicionais para evitar comportamentos inesperados.
