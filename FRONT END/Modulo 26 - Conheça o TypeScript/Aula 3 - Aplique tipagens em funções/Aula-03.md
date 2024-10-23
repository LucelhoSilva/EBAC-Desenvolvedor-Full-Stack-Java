## 📝 Aula 03: Aplique Tipagens em Funções

### ✅ Introdução

Nesta aula, abordaremos a aplicação de **tipagens em funções** no TypeScript. Tipar funções torna o código mais legível, seguro e fácil de manter, pois define com clareza quais tipos de dados a função aceita e o que ela deve retornar.

### ✅ Objetivos

- Diferenciar **tipagem implícita** e **explícita** em funções.
- Declarar explicitamente os tipos de **argumentos** e **retornos** em funções personalizadas.
- Lidar com diferentes tipos de argumentos e retorno, utilizando técnicas como **Union Types** e o **operador Rest**.

### ✅ Tipagem Implícita e Explícita em Funções

O TypeScript permite que as funções infiram o tipo dos argumentos e retornos (tipagem implícita), mas é sempre uma boa prática declarar explicitamente esses tipos para evitar confusões e possíveis erros futuros.

#### Exemplo de Tipagem Explícita:

```typescript
function calculaArea(largura: number, altura: number): number {
  return largura * altura
}
```

- **Argumentos**: `largura` e `altura` são explicitamente definidos como do tipo **number**.
- **Retorno**: A função retorna um valor do tipo **number**.

### ✅ Funções Anônimas (Arrow Functions)

O TypeScript também permite que você utilize **Arrow Functions**, e a tipagem pode ser aplicada da mesma forma.

#### Exemplo de Arrow Function:

```typescript
const calculaArea2 = (largura: number, altura: number): number => largura * altura
```

Aqui, a função `calculaArea2` tem os argumentos e o tipo de retorno explicitamente tipados como **number**, tornando o comportamento da função claro e previsível.

### ✅ Operador Rest em Funções

O **operador Rest** (`...`) permite que você trabalhe com um número variável de argumentos em uma função. No TypeScript, você pode tipar os parâmetros rest como arrays de um determinado tipo.

#### Exemplo de Operador Rest:

```typescript
function somar(...numeros: number[]): void {
  console.log(numeros)
}
```

- **Parâmetro Rest**: `numeros` é tipado como um array de **números** (`number[]`), permitindo que a função receba vários argumentos do tipo `number`.
- **Retorno**: A função não retorna nenhum valor, portanto, o tipo de retorno é **void**.

### ✅ Union Types em Funções

Às vezes, uma função pode precisar retornar mais de um tipo de valor. O TypeScript permite isso através dos **Union Types**, que permitem que a função retorne múltiplos tipos.

#### Exemplo com Union Types:

```typescript
function teste(): string | number {
  if (10 > 5) {
    return "Dez é maior que cinco"
  } else {
    return 5
  }
}
```

Aqui, a função `teste` pode retornar um **string** ou um **número**. O uso de **Union Types** é útil quando a função precisa ser mais flexível no retorno.

```typescript
const resultadoDeTeste = teste()
```

Nesse exemplo, `resultadoDeTeste` pode ser tanto uma **string** quanto um **number**, dependendo do valor retornado pela função `teste`.

### ✅ Conclusão

A aplicação de **tipagens em funções** é fundamental para garantir que seu código seja mais **seguro** e **manutenível**. Ao tipar explicitamente os **argumentos** e o **retorno** de funções, você melhora a legibilidade e previne erros. Além disso, o uso de **Union Types** e o **operador Rest** permitem que você escreva funções mais flexíveis e poderosas, mantendo o controle sobre os tipos de dados.
