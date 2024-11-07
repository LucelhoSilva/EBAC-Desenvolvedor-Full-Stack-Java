## 📝 Aula 01: Escreva CSS com JavaScript

### ✅ Introdução

Nesta aula, aprendemos como estilizar componentes em uma aplicação React utilizando o conceito de **CSS in JS**. Exploramos o uso da API **CSSStyleSheet** e também introduzimos a biblioteca **Styled-components** para criar estilos de forma programática dentro do código JavaScript. Além disso, aprendemos como gerar estilos dinâmicos com base nos **estados dos componentes** React, permitindo maior flexibilidade no design da interface.

### ✅ Objetivos

- Entender como funciona o **CSS in JS** na estilização de componentes React.
- Aplicar estilos diretamente com **CSSStyleSheet** e **Styled-components**.
- Configurar estilos dinâmicos com base nos estados dos componentes em React.

### ✅ O que é CSS in JS?

O **CSS in JS** é uma abordagem que permite escrever CSS diretamente no código JavaScript, garantindo que os estilos sejam tratados como parte do próprio componente. Diferente do CSS tradicional, onde os estilos ficam em arquivos separados, o CSS in JS oferece a vantagem de gerar classes dinâmicas e aplicar estilos com base no estado dos componentes React.

### ✅ API `CSSStyleSheet`

A API **CSSStyleSheet** permite criar e manipular folhas de estilo diretamente a partir do JavaScript. Com ela, podemos adicionar regras de estilo de forma programática e aplicar essas regras globalmente ou em elementos específicos do DOM.

#### Exemplo básico:

```javascript
const css = new CSSStyleSheet() // Cria uma nova folha de estilo
css.insertRule("body { background-color: lightblue; }") // Adiciona uma regra de estilo

document.adoptedStyleSheets = [css] // Aplica a folha de estilo
```

No exemplo acima, criamos uma folha de estilo utilizando o `CSSStyleSheet` e inserimos uma regra que altera a cor de fundo do `body`. Em seguida, aplicamos essa folha de estilo à página.

#### Usando variáveis no `CSSStyleSheet`

Podemos combinar **Template Literals** e variáveis para criar estilos dinâmicos, adaptando o CSS ao estado da aplicação:

```javascript
let corPrincipal = "#74f0f0" // Definimos uma cor principal como variável

const css2 = new CSSStyleSheet()
css2.insertRule(`body { background-color: ${corPrincipal}; }`) // Usamos a cor principal dinamicamente

document.adoptedStyleSheets = [css2] // Aplicamos a folha de estilo
```

Neste exemplo, a variável `corPrincipal` define a cor de fundo do `body` de forma dinâmica.

### ✅ Estilizando Componentes com **Styled-components**

**Styled-components** é uma das bibliotecas mais populares para aplicar **CSS in JS** em aplicações React. Ela permite criar componentes estilizados diretamente no código JavaScript, encapsulando os estilos e garantindo que os componentes sejam reutilizáveis sem conflito de classes.

#### Instalação

Para usar **Styled-components**, é necessário instalar a biblioteca:

```bash
npm install styled-components
```

#### Criando Componentes Estilizados

Aqui está um exemplo de como criar e usar componentes estilizados com **Styled-components**:

```javascript
import styled from "styled-components"

// Criando um botão estilizado
const Botao = styled.button`
  background-color: ${props => props.bgColor || "blue"}; // Estilo dinâmico com base em props
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue; // Estilo para o hover
  }
`

const App = () => {
  return (
    <div>
      <Botao bgColor="green">Clique Aqui</Botao> {/* Passando cor dinamicamente */}
    </div>
  )
}

export default App
```

Neste exemplo, criamos um componente `Botao` que recebe a cor de fundo dinamicamente via **props**. Além disso, aplicamos um estilo para o estado de **hover**.

### ✅ Estilos Dinâmicos com Base em Estados

Uma das grandes vantagens do **CSS in JS** é a capacidade de modificar os estilos de um componente com base no seu estado interno. Vamos ver um exemplo utilizando React e **Styled-components**.

#### Exemplo: Alterando o estilo de um botão com base no estado

```javascript
import styled from "styled-components"
import { useState } from "react"

// Criando o botão estilizado
const Botao = styled.button`
  background-color: ${props => (props.ativo ? "green" : "red")}; // Estilo dinâmico baseado no estado
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkgray;
  }
`

const App = () => {
  const [ativo, setAtivo] = useState(false)

  return (
    <div>
      <Botao ativo={ativo} onClick={() => setAtivo(!ativo)}>
        {ativo ? "Ativo" : "Inativo"}
      </Botao>
    </div>
  )
}

export default App
```

Nesse exemplo, o botão muda de cor e de texto com base no estado `ativo`. Se o estado `ativo` for `true`, a cor de fundo será verde, caso contrário, será vermelha.

### ✅ Concatenação de Strings e Template Literals

Durante a aula, revisamos o uso de **concatenação de strings** e **template literals**. Essas ferramentas são importantes quando estamos construindo strings dinâmicas, especialmente ao trabalhar com variáveis no estilo CSS in JS.

#### Exemplo de Concatenação

```javascript
let saudacao = "Olá,"
const nome = "Lucelho"

saudacao = "Olá, " + nome // Concatenação tradicional
saudacao = `Olá, ${nome}` // Usando template literals
```

Os **template literals** oferecem uma forma mais prática de incluir variáveis em strings, principalmente quando estamos manipulando estilos dinâmicos com CSS in JS.

### ✅ Conclusão

Nesta aula, exploramos o uso de **CSS in JS** em aplicações React, utilizando tanto a API **CSSStyleSheet** quanto a biblioteca **Styled-components**. Vimos como é possível criar e aplicar folhas de estilo dinamicamente no JavaScript, além de criar componentes estilizados com base no estado e nas **props** do React.

Os **Styled-components** oferecem uma solução poderosa e flexível para lidar com estilos em projetos React, e o CSS in JS é uma tendência que facilita o desenvolvimento de interfaces dinâmicas e reutilizáveis.
