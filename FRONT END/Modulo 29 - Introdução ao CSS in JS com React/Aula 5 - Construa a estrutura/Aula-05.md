## 📝 Aula 05: Construa a Estrutura

### ✅ Introdução

Nesta aula, construímos a estrutura base do nosso projeto em React. Criamos um layout modular e organizado utilizando pastas específicas para **componentes** e **containers**, aplicando boas práticas de organização do código. A estrutura criada facilita a manutenção e escalabilidade do projeto.

### ✅ Objetivos

- Organizar o projeto com as pastas `components` e `containers`.
- Criar componentes reutilizáveis, como o `Title`.
- Criar **containers** para dividir o projeto em seções como `About`, `Projects` e `Sidebar`.
- Integrar as partes no arquivo principal `App.tsx`.

---

### ✅ Estrutura de Pastas

A estrutura do projeto ficou organizada da seguinte forma:

```
src
├── components
│   └── Title
│       └── index.tsx
├── containers
│   ├── About
│   │   └── index.tsx
│   ├── Projects
│   │   └── index.tsx
│   └── Sidebar
│       └── index.tsx
├── styles.ts
└── App.tsx
```

---

### ✅ Código Desenvolvido

#### 1. **Componente Reutilizável: Title**

Criamos um componente simples para exibir títulos, que será reutilizado em várias partes do projeto.

```tsx
// src/components/Title/index.tsx

type Props = {
  children: string
}

const Title = (props: Props) => <span>{props.children}</span>

export default Title
```

---

#### 2. **Containers**

Criamos três containers: `About`, `Projects` e `Sidebar`. Cada um deles representa uma seção do projeto.

##### **About**

```tsx
// src/containers/About/index.tsx

import Title from '../../components/Title'

const About = () => (
  <section>
    <Title>Sobre mim</Title>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni consequatur
      ad porro corporis sit voluptates eius voluptate? Ullam quo illo delectus
      atque consequatur facilis, saepe iste adipisci ipsam aspernatur rem?
    </p>
  </section>
)

export default About
```

##### **Projects**

```tsx
// src/containers/Projects/index.tsx

import Title from '../../components/Title'

const Projects = () => (
  <section>
    <Title>Projetos</Title>
  </section>
)

export default Projects
```

##### **Sidebar**

```tsx
// src/containers/Sidebar/index.tsx

import Title from '../../components/Title'

const Sidebar = () => (
  <aside>
    <img src="https://github.com/LucelhoSilva.png" alt="Minha Imagem" />
    <Title>Lucelho Silva</Title>
  </aside>
)

export default Sidebar
```

---

#### 3. **App.tsx**

No arquivo principal, montamos o layout unindo os containers e aplicamos o estilo global.

```tsx
// src/App.tsx

import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  )
}

export default App
```

---

#### 4. **Estilo Global e Layout**

Adicionamos um arquivo `styles.ts` para criar o estilo global e definir o layout principal do projeto.

```tsx
// src/styles.ts

import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border-sizing: border-box;
  }

  body {
    padding-top: 80px;
  }
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  img {
    max-width: 100%;
  }
`
```

---

### ✅ Resultado Final

Com essa estrutura:

1. O componente **Sidebar** exibe a imagem e o nome do usuário.
2. A seção **About** contém uma breve descrição sobre o usuário.
3. A seção **Projects** está pronta para exibir uma lista de projetos no futuro.
4. O layout está organizado e funcional, com uma barra lateral e um espaço principal para o conteúdo.

---