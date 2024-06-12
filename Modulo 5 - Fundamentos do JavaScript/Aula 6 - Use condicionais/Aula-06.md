## 📝 Aula 06: Use Condicionais

### ✅ O que são Condicionais?

As condicionais são estruturas de controle que permitem executar diferentes blocos de código dependendo se uma condição específica é verdadeira ou falsa. Em JavaScript, as condicionais são frequentemente usadas para tomar decisões dentro de um programa.

### ✅ Estrutura da Condicional `if`

A estrutura básica de uma condicional `if` é:

```javascript
if (condicao) {
  // bloco de código a ser executado se a condição for verdadeira
} else {
  // bloco de código a ser executado se a condição for falsa
}
```

### ✅ Exemplos de Uso de Condicionais

#### Verificando se um Número é Par ou Ímpar

```javascript
let numero = 10

if (numero % 2 === 0) {
  console.log(numero + " é par.")
} else {
  console.log(numero + " é ímpar.")
}
```

#### Verificando se um Aluno foi Aprovado ou Reprovado

```javascript
let nota = 7

if (nota >= 7) {
  console.log("Aluno aprovado!")
} else {
  console.log("Aluno reprovado!")
}
```

### ✅ Estrutura da Condicional `switch`

A estrutura `switch` é útil quando há várias condições a serem verificadas.

```javascript
switch (expressao) {
  case valor1:
    // bloco de código a ser executado se a expressão for igual a valor1
    break
  case valor2:
    // bloco de código a ser executado se a expressão for igual a valor2
    break
  default:
  // bloco de código a ser executado se nenhum dos casos anteriores for correspondido
}
```

### ✅ Exemplo de Uso de `switch`

```javascript
let diaSemana = 3
let nomeDia

switch (diaSemana) {
  case 1:
    nomeDia = "Segunda-feira"
    break
  case 2:
    nomeDia = "Terça-feira"
    break
  case 3:
    nomeDia = "Quarta-feira"
    break
  case 4:
    nomeDia = "Quinta-feira"
    break
  case 5:
    nomeDia = "Sexta-feira"
    break
  default:
    nomeDia = "Fim de semana"
}

console.log("Hoje é " + nomeDia)
```

### ✅ Por que Usar Condicionais?

- **Tomada de Decisão**: Permitem executar diferentes blocos de código com base em condições específicas.
- **Controle de Fluxo**: Oferecem controle sobre o fluxo de execução do programa, garantindo que apenas as partes relevantes do código sejam executadas.
- **Personalização**: Possibilitam personalizar a experiência do usuário e adaptar o comportamento do programa conforme necessário.

Dominar o uso de condicionais é essencial para criar programas mais flexíveis e dinâmicos em JavaScript.

[Material](./Use%20condicionais.pdf)
