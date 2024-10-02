## 📝 Aula 04: Crie Casting

### ✅ Introdução

Nesta aula, vamos aprender sobre **casting** no TypeScript, que é a técnica de conversão de tipos. O **casting** permite que você informe ao compilador que deseja tratar uma variável de um tipo específico. É importante dominar essa técnica para garantir que a conversão de tipos seja segura e evitar erros em tempo de execução.

### ✅ Objetivos

- **Dominar** as técnicas de conversão de tipos no TypeScript.
- **Evitar erros** de conversão e garantir a segurança do código ao utilizar o casting.

### ✅ O que é Casting?

No TypeScript, o **casting** é usado para dizer ao compilador que você quer tratar uma variável como sendo de outro tipo. Isso é útil quando você sabe algo sobre o tipo de dado que o TypeScript não consegue inferir corretamente.

#### Tipos de Casting:

1. **Casting com `as`**: A sintaxe mais comum para casting é usar a palavra-chave `as`.
2. **Casting com `<>`**: Outra forma de casting é utilizando os colchetes angulares `<>`, mas esse método não é recomendado ao usar JSX, pois pode causar conflitos.

### ✅ Exemplos de Casting

#### Exemplo 1: Casting Simples

```typescript
let idade: any = 25
;(idade as number).toFixed() // Aqui estamos tratando a variável `idade` como um `number`.
```

No exemplo acima, `idade` foi declarado como `any`, o que significa que pode conter qualquer tipo de valor. No entanto, usamos o casting `as number` para tratá-la como um número e, assim, podemos usar o método `.toFixed()`.

#### Exemplo 2: Casting para String

```typescript
;(idade as string).length // Aqui tentamos tratar `idade` como `string` para acessar o atributo `length`.
```

Neste caso, estamos tentando tratar a variável `idade` como uma **string**, e usamos o atributo `.length` para medir o comprimento da string. Embora `idade` tenha sido inicializado como um número, o casting força o TypeScript a tratá-lo como string, mas isso pode gerar comportamentos inesperados.

#### Exemplo 3: Casting para Array

```typescript
;(idade as string[]).forEach((x) => {
  console.log(x)
})
```

Aqui estamos convertendo a variável `idade` para um array de strings (`string[]`). Como `idade` é inicialmente um número, essa conversão pode resultar em erros em tempo de execução, caso o valor não seja realmente um array.

### ✅ Casting Complexo (Múltiplo Casting)

Às vezes, pode ser necessário realizar um casting mais complexo. Por exemplo, quando o tipo original não é compatível diretamente com o tipo desejado, você pode precisar fazer um casting intermediário usando `unknown`.

#### Exemplo de Múltiplo Casting:

```typescript
let nome: string = 35 as unknown as string // Primeiro converte `35` para `unknown`, depois para `string`.
```

Aqui, estamos forçando a conversão de um número (`35`) para uma string, passando pelo tipo `unknown` primeiro. Esse tipo de casting é usado quando há uma incompatibilidade direta entre os tipos.

### ✅ Conclusão

O **casting** é uma ferramenta poderosa no TypeScript, mas deve ser usada com cuidado. Ao converter tipos, você tem o controle sobre como a variável será tratada, mas é importante garantir que a conversão faça sentido para evitar erros em tempo de execução.
