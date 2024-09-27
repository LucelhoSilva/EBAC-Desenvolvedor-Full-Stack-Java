## 📝 Aula 01: Conheça o TypeScript

### ✅ Introdução ao TypeScript

Nesta aula, vamos explorar os **fundamentos do TypeScript**, uma extensão do JavaScript que adiciona **tipagem estática** ao código. Isso torna o desenvolvimento mais seguro e produtivo, ajudando a detectar erros em tempo de compilação, antes mesmo da execução do código.

### ✅ Objetivos

- Compreender os fundamentos do **TypeScript**.
- Familiarizar-se com a **tipagem estática** e suas vantagens.
- Entender os benefícios práticos do TypeScript em projetos JavaScript.

### ✅ O que é o TypeScript?

O **TypeScript** é um superset do JavaScript, ou seja, ele estende a linguagem adicionando recursos extras, como **tipos estáticos** e **interfaces**, sem deixar de ser compatível com o JavaScript padrão. Isso significa que todo código JavaScript é um código TypeScript válido, mas o TypeScript permite que você adicione tipos e outras verificações estáticas para aumentar a segurança do código.

### ✅ Vantagens de Usar TypeScript

- **Tipagem Estática**: Permite declarar o tipo de variáveis, parâmetros e retornos de funções, ajudando a evitar erros comuns de tipo.
- **Detecta Erros em Tempo de Compilação**: O TypeScript avisa sobre erros antes de rodar o código, ajudando a corrigir problemas mais cedo no desenvolvimento.
- **Melhor Auto-completar e Refatoração**: Com tipagem estática, editores de código como VSCode conseguem oferecer auto-completar mais preciso e refatoração confiável.

### ✅ Tipagem Estática

Uma das maiores vantagens do TypeScript é a **tipagem estática**, que permite que você defina o tipo dos dados que serão utilizados no código. Diferente do JavaScript, que tem tipagem dinâmica, o TypeScript exige que você especifique ou infira os tipos.

#### Exemplo Simples:

```typescript
let nome: string = "Gian"
let idade: number = 30
let ativo: boolean = true
```

Neste exemplo:

- A variável `nome` só pode receber valores do tipo **string**.
- `idade` só aceita **números**.
- `ativo` recebe valores **booleanos**.

Se tentarmos atribuir um valor de tipo diferente a essas variáveis, o TypeScript vai apontar um erro na compilação.

### ✅ Instalação do TypeScript

Para começar a usar o TypeScript, você precisa instalá-lo globalmente no seu sistema com o comando abaixo:

```bash
npm install --global typescript
```

Isso instala o compilador TypeScript (TSC) globalmente, permitindo que você converta arquivos `.ts` (TypeScript) em arquivos `.js` (JavaScript) que podem ser executados em qualquer ambiente que suporte JavaScript.

### ✅ Compilação de Arquivos TypeScript

Após a instalação, podemos compilar arquivos TypeScript (.ts) para JavaScript (.js) usando o comando `tsc`.

#### Exemplo:

1. Crie um arquivo chamado `teste.ts` com o seguinte código:

```typescript
let nome = "gian"
```

Aqui, `nome` é automaticamente inferido como uma **string**, mesmo sem especificar o tipo.

2. Para compilar o arquivo, execute o seguinte comando no terminal:

```bash
npx tsc teste.ts
```

Isso gera um arquivo **JavaScript** equivalente chamado `teste.js`. O conteúdo gerado será o seguinte:

```javascript
"use strict"
let nome = "gian"
```

Esse arquivo agora pode ser executado em qualquer ambiente JavaScript, como um navegador ou Node.js.

### ✅ Conclusão

O TypeScript é uma poderosa ferramenta que traz mais segurança, escalabilidade e produtividade ao desenvolvimento JavaScript. Com a adição de **tipagem estática**, o código se torna mais previsível, fácil de refatorar e menos propenso a erros. A partir dessa introdução, você já consegue compilar seus primeiros arquivos TypeScript e experimentar as vantagens que ele oferece em seus projetos. Continue praticando e explore mais sobre tipos, interfaces e outras funcionalidades avançadas do TypeScript!
