## 📝 Aula 01: Conheça o JSX

### ✅ Introdução

Nesta aula, exploraremos o **JSX**, uma extensão de sintaxe do JavaScript amplamente utilizada no React. O JSX permite descrever a interface do usuário de forma intuitiva, combinando HTML e JavaScript em uma única estrutura. Vamos entender como ele funciona, como criar fragmentos para evitar divs desnecessárias e como trabalhar com expressões condicionais dentro do JSX.

### ✅ Objetivos

- Compreender o que é JSX e como ele é usado para criar elementos de interface no React.
- Utilizar fragmentos em JSX para envolver múltiplos elementos sem a necessidade de uma div ou outro contêiner.
- Explorar como as expressões condicionais funcionam dentro do JSX.

### ✅ O que é JSX?

O JSX é uma sintaxe que permite escrever **tags HTML** diretamente dentro do código JavaScript. Embora pareça HTML, o JSX é convertido em chamadas de funções JavaScript que criam os elementos React. A principal vantagem do JSX é permitir que você escreva interfaces de forma declarativa, tornando o código mais legível e intuitivo.

#### Exemplo de JSX:

```jsx
const elemento = <h1>Olá, Mundo!</h1>
```

Neste exemplo simples, a variável `elemento` contém um código JSX que será renderizado como um elemento `<h1>` no DOM.

### ✅ Criando Componentes com JSX

No React, você pode usar JSX dentro de componentes para criar interfaces dinâmicas. Um componente pode retornar JSX, que será renderizado na tela.

#### Exemplo básico de um componente React usando JSX:

```jsx
function Saudacao() {
  return <h1>Olá, Mundo!</h1>
}
```

Aqui, o componente `Saudacao` retorna um elemento JSX que será exibido quando o componente for renderizado.

### ✅ Fragmentos em JSX

Às vezes, você precisa retornar múltiplos elementos dentro de um componente, mas o JSX exige que eles estejam envoltos em um único nó (geralmente uma `<div>`). No entanto, o uso excessivo de `<div>` pode gerar uma estrutura de DOM desnecessariamente aninhada. Para evitar isso, você pode utilizar **fragmentos**.

#### Exemplo de fragmentos:

```jsx
function ListaDeItens() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </>
  )
}
```

No exemplo acima, o fragmento `<>...</>` permite agrupar vários elementos `<li>` sem adicionar uma `<div>` ou outro contêiner ao DOM.

### ✅ Expressões Condicionais no JSX

O JSX permite o uso de expressões JavaScript, incluindo **expressões condicionais**, para renderizar diferentes elementos com base em condições específicas.

#### Exemplo de renderização condicional com operador ternário:

```jsx
function SaudacaoUsuario({ isLogado }) {
  return <div>{isLogado ? <h1>Bem-vindo de volta!</h1> : <h1>Por favor, faça login.</h1>}</div>
}
```

Neste exemplo, se a propriedade `isLogado` for `true`, será renderizada a mensagem "Bem-vindo de volta!". Caso contrário, será exibida a mensagem "Por favor, faça login.".

#### Exemplo com `&&` para renderização condicional:

```jsx
function Notificacao({ temNotificacoes }) {
  return <div>{temNotificacoes && <p>Você tem novas notificações!</p>}</div>
}
```

Aqui, a expressão `temNotificacoes &&` garante que o parágrafo só será renderizado se `temNotificacoes` for `true`.

### ✅ Exemplo Completo

A seguir, um exemplo completo que mostra como utilizar fragmentos, expressões condicionais e JSX em um componente React:

```jsx
import React from "react"

function App() {
  const isLogado = true
  const temNotificacoes = false

  return (
    <>
      <div>{isLogado ? <h1>Bem-vindo de volta!</h1> : <h1>Por favor, faça login.</h1>}</div>

      {temNotificacoes && <p>Você tem novas notificações!</p>}

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  )
}

export default App
```

Neste exemplo:

- A renderização condicional decide qual saudação mostrar com base no estado `isLogado`.
- Usamos um fragmento (`<>...</>`) para envolver múltiplos elementos sem a necessidade de uma div.
- Uma mensagem de notificação é exibida apenas se `temNotificacoes` for `true`.

### ✅ Conclusão

Nesta aula, aprendemos os fundamentos do **JSX**, uma ferramenta poderosa que combina JavaScript e HTML para criar interfaces de usuário de forma declarativa e eficiente no React. Exploramos como utilizar **fragmentos** para evitar a criação desnecessária de nós no DOM e também vimos como **expressões condicionais** podem ser utilizadas para renderizar conteúdo dinamicamente. O JSX simplifica o processo de construção de interfaces dinâmicas e é uma parte essencial do ecossistema React.
