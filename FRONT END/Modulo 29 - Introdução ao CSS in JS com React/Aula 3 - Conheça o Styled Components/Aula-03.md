## 📝 Aula 03: Conheça o Styled Components

### ✅ Introdução

Nesta aula, aprendemos a usar o **Styled Components**, uma biblioteca que permite escrever CSS diretamente dentro dos componentes React, proporcionando uma experiência de desenvolvimento mais modular e escalável. Com o **Styled Components**, é possível aplicar estilos dinâmicos e reutilizáveis em componentes, além de herdar e estender estilos de outros componentes.

### ✅ Objetivos

- Instalar o **Styled Components**.
- Criar e estilizar componentes utilizando o **Styled Components**.
- Aplicar herança de estilos e reutilização de estilos em componentes React.

### ✅ Instalando o Styled Components

Para utilizar o **Styled Components**, precisamos instalar a biblioteca e o pacote de tipos para TypeScript (se necessário).

```bash
npm install --save styled-components
npm install --save-dev @types/styled-components
```

A instalação do pacote `@types/styled-components` é necessária apenas se estivermos usando TypeScript, pois ele adiciona o suporte aos tipos para o **Styled Components**.

### ✅ Criando Componentes Estilizados

Usamos o **Styled Components** para definir estilos diretamente dentro dos componentes React. Criamos um componente `Botao` estilizado com base em propriedades dinâmicas.

#### Exemplo de Uso - `Teste.tsx`

No arquivo `Teste.tsx`, criamos um botão estilizado (`Botao`) e um botão de perigo (`BotaoPerigo`) que herda o estilo do primeiro:

```tsx
import styled from "styled-components"

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${props => (props.principal ? "red" : "blue")};
  font-size: ${props => props.fontSize || "16px"};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
```

- **Herança de Estilos**: `BotaoPerigo` herda os estilos de `Botao` e adiciona um estilo adicional para a cor de fundo (`background-color: red`) e o texto (`color: #fff`).
- **Props Dinâmicas**: O `background-color` do `Botao` é determinado pela prop `principal`, permitindo alterar a aparência do botão com base em uma condição.
- **Fallback**: Se nenhuma `fontSize` for fornecida, o botão usará o valor padrão de `16px`.

### ✅ Reset de Estilos com `createGlobalStyle`

Para aplicar um reset global de estilos na aplicação, criamos um arquivo `styles.ts` e utilizamos o `createGlobalStyle` do **Styled Components**.

#### Exemplo - `styles.ts`

```tsx
import { createGlobalStyle } from "styled-components"

const EstiloGlobal = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`

export default EstiloGlobal
```

- **Estilo Global**: O `EstiloGlobal` define um reset básico para margens, preenchimento e estilo de fonte da aplicação, aplicando esses estilos em todo o corpo (`body`).
- **Modularidade**: Como o estilo global é um componente separado, podemos importá-lo em `App.tsx` para que seja aplicado a toda a aplicação.

### ✅ Integrando o Estilo Global no `App.tsx`

Para garantir que o estilo global seja aplicado, importamos e incluímos o `EstiloGlobal` dentro do componente `App`.

#### Exemplo - `App.tsx`

```tsx
import Teste from "./Teste"
import EstiloGlobal from "./styles"

function App() {
  return (
    <>
      <EstiloGlobal />
      <Teste />
    </>
  )
}

export default App
```

Aqui, adicionamos o componente `EstiloGlobal` como o primeiro elemento dentro do `App`, garantindo que o reset de estilo seja aplicado antes de renderizar outros componentes.

### ✅ Conclusão

Nesta aula, aprendemos a:

- Instalar e configurar o **Styled Components** em um projeto React.
- Criar componentes estilizados dinâmicos e reutilizáveis usando **Styled Components**.
- Utilizar a herança de estilos para criar variantes de componentes baseados em outros estilos.
- Definir um estilo global com o `createGlobalStyle` para aplicar um reset de estilos em toda a aplicação.

Essas práticas ajudam a criar uma estrutura de estilos modular e fácil de manter, aproveitando a flexibilidade e a dinâmica que o **Styled Components** oferece para estilizar componentes em React.
