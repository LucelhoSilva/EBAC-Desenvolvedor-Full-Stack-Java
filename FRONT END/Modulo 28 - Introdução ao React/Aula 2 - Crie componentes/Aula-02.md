## 📝 Aula 02: Crie Componentes

### ✅ Introdução

Nesta aula, aprenderemos a criar **componentes em React**, que são essenciais para a construção de interfaces de usuário **reutilizáveis** e **modulares**. Também vamos entender como funciona o processo de **importação e exportação** de componentes e como podemos organizar nossos projetos React, separando componentes em diferentes pastas e arquivos para uma melhor estruturação.

### ✅ Objetivos

- Entender a dinâmica de **importação e exportação** em React.
- Criar componentes em React, que podem ser reutilizados em diferentes partes da aplicação.
- Organizar componentes em pastas e arquivos para uma estrutura mais clara e modular.

### ✅ Criando Componentes no React

Componentes são blocos fundamentais no React que nos permitem criar pedaços reutilizáveis de código de interface. Um componente React pode ser uma função ou uma classe (embora, hoje em dia, componentes funcionais sejam mais comuns devido ao uso dos **hooks**).

### ✅ Exemplo Prático

Vamos começar criando uma pasta chamada `components`, e dentro dela, uma subpasta chamada `Perfil` contendo dois arquivos: `index.jsx` e `perfil.css`. Esses arquivos definirão o nosso componente de perfil com um avatar e um nome.

#### Estrutura do Projeto:

```
src/
│
├── components/
│   └── Perfil/
│       ├── index.jsx
│       └── perfil.css
│
├── App.jsx
└── main.jsx
```

### ✅ Criando o Componente `Perfil`

No arquivo `index.jsx`, criaremos o componente `Perfil`. O componente renderizará uma imagem de avatar e um nome de usuário. Também vamos explorar diferentes formas de exportar esse componente.

#### Código do `index.jsx`:

```jsx
import "./perfil.css"

// export default () => {
// export default function () {

const Perfil = () => {
  const usuario = {
    nome: "Lucelho Silva",
    avatar: "https://github.com/lucelhosilva.png"
  }

  return (
    <div>
      <img className="perfil-avatar" src={usuario.avatar} alt={usuario.nome} />
      <h3 className="perfil-titulo">{usuario.nome}</h3>
    </div>
  )
}

export default Perfil
```

- A função `Perfil` retorna um bloco de JSX que exibe o avatar do usuário e o nome.
- Utilizamos `export default Perfil;` para exportar o componente.
- Também mostramos outras formas de exportar o componente, como funções anônimas e funções nomeadas (comentadas no código).

### ✅ Estilos no React

Os estilos no React podem ser definidos em arquivos CSS tradicionais e importados diretamente nos componentes. No arquivo `perfil.css`, podemos definir estilos para personalizar o avatar e o nome.

#### Código do `perfil.css`:

```css
.perfil-avatar {
  width: 180px;
  height: 180px;
  border-radius: 50%;
}

.perfil-titulo {
  font-family: sans-serif;
}
```

Neste exemplo, o avatar será redimensionado para 180x180 pixels e terá bordas arredondadas, enquanto o título usará uma fonte sem serifa.

### ✅ Importando e Usando o Componente no `App.jsx`

Agora que o nosso componente `Perfil` está pronto, vamos importá-lo e utilizá-lo no componente principal da nossa aplicação, o `App.jsx`.

#### Código do `App.jsx`:

```jsx
import Perfil from "./components/Perfil"

function App() {
  return (
    <>
      <Perfil />
    </>
  )
}

export default App
```

Aqui, usamos o `import Perfil from "./components/Perfil";` para trazer o componente `Perfil` para o nosso arquivo `App.jsx`. Em seguida, utilizamos `<Perfil />` dentro do JSX para renderizá-lo na interface.

### ✅ Estruturando a Aplicação com o `main.jsx`

O `main.jsx` é responsável por renderizar o componente `App` no DOM. Ele é o ponto de entrada da aplicação React e, geralmente, você não precisa modificar este arquivo frequentemente.

#### Código do `main.jsx`:

```jsx
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

Aqui, o `ReactDOM.createRoot` é utilizado para renderizar o componente `App` dentro do elemento com o ID `root`, que geralmente é encontrado no arquivo `index.html` da aplicação.

### ✅ Diferentes Formas de Exportação

No React, você pode exportar componentes de duas maneiras principais:

1. **Exportação padrão (`default`)**: Utilizada quando há apenas uma exportação principal no arquivo.

   ```jsx
   export default Perfil
   ```

2. **Exportação nomeada**: Usada quando você deseja exportar múltiplos itens do mesmo arquivo.

   ```jsx
   export const Perfil = () => { ... };
   ```

### ✅ Conclusão

Nesta aula, aprendemos a criar **componentes em React** e a organizá-los em pastas e arquivos de maneira eficiente. Também vimos como estilizar componentes com **CSS** e como importar e exportar componentes de diferentes formas no React. Componentes são a base da modularidade no React, e organizá-los adequadamente facilita a manutenção e escalabilidade de aplicações.
