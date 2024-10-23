## 📝 Aula 04: Compreenda os Operadores Spread e Rest

### ✅ Introdução aos Operadores Spread e Rest

Nesta aula, você vai explorar dois poderosos operadores introduzidos no ES6: o **operador Rest** (`...`) e o **operador Spread** (`...`). Esses operadores são essenciais para manipulação de arrays, objetos, e funções de forma mais eficiente e expressiva em JavaScript.

### ✅ Objetivos

-   Compreender o operador Rest e como ele captura o restante dos argumentos de uma função.
-   Dominar o uso do operador Spread para desmembrar (espalhar) elementos de arrays e objetos.
-   Praticar a desestruturação com os operadores Rest e Spread.

### ✅ Operador Rest

O operador Rest permite capturar múltiplos elementos e armazená-los em uma única variável. Ele é geralmente utilizado em funções para coletar os argumentos passados além dos parâmetros nomeados.

#### Exemplo de Função Usando `arguments`

```javascript
function somar() {
    let soma = 0
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i]
    }
    return soma
}

console.log(somar(10, 20, 30)) // 60
```

No exemplo acima, usamos `arguments` para iterar sobre os parâmetros passados, mas `arguments` não é um array verdadeiro, o que limita algumas operações.

#### Exemplo de Função Usando o Operador Rest

```javascript
function somarComRest(...numeros) {
    return numeros.reduce((total, numeroAtual) => total + numeroAtual, 0)
}

console.log(somarComRest(10, 20, 30)) // 60
```

Aqui, `...numeros` captura todos os argumentos passados para a função e os armazena em um array chamado `numeros`. Isso facilita a manipulação dos parâmetros e o uso de métodos de array.

### ✅ Operador Spread

O operador Spread é utilizado para "espalhar" elementos de um array ou propriedades de um objeto. Ele é útil para copiar arrays, concatenar arrays, combinar objetos e até mesmo desestruturar arrays e objetos de forma mais flexível.

#### Exemplo de Uso do Operador Spread em Arrays

```javascript
const timesDeFutebolDeSp = ["São Paulo", "Corinthians", "Palmeiras", "Santos"]
const timesDeFutebolDoRJ = ["Flamengo", "Vasco", "Fluminense", "Botafogo"]
const timesDeFutebolDeMG = ["Cruzeiro", "Atlético", "América"]

const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRJ, ...timesDeFutebolDeMG]
console.log(timesDeFutebol)
```

Nesse exemplo, o operador Spread é usado para combinar três arrays em um único array.

#### Exemplo de Uso do Operador Spread em Objetos

```javascript
const carroDaJulia = {
    marca: "gol",
    modelo: "vw",
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 2.0
}

console.log(carroDaAna)
```

Aqui, o operador Spread é usado para criar um novo objeto `carroDaAna` que herda as propriedades de `carroDaJulia`, mas com o motor atualizado.

### ✅ Desestruturação com Rest e Spread

Os operadores Rest e Spread também podem ser usados na desestruturação de arrays e objetos, permitindo que você extraia partes de um array ou objeto de maneira eficiente.

#### Exemplo de Desestruturação de Objetos

```javascript
const { motor: motorDoCarroDaAna } = carroDaAna
const { motor: motorDoCarroDaJulia } = carroDaJulia

console.log(motorDoCarroDaAna) // 2.0
console.log(motorDoCarroDaJulia) // 1.6
```

#### Exemplo de Desestruturação de Arrays

```javascript
const [item1, item2, item3, ...outrosTimes] = timesDeFutebol

console.log(item1) // São Paulo
console.log(item2) // Corinthians
console.log(item3) // Palmeiras
console.log(outrosTimes) // [ 'Santos', 'Flamengo', 'Vasco', 'Fluminense', 'Botafogo', 'Cruzeiro', 'Atlético', 'América' ]
```
