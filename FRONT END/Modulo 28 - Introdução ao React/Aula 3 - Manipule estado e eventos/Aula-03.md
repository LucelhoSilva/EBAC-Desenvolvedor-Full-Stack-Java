## 📝 Aula 03: Manipule Estado e Eventos

### ✅ Introdução

Nesta aula, vamos explorar o conceito de **reatividade no React**, como podemos **iniciar e atualizar o estado** e de que maneira o estado afeta a **renderização dos componentes**. Também vamos aprender a **configurar e gerenciar eventos** em React, como eventos de clique ou mudança de valores em campos, e entender como passar **argumentos** para manipuladores de eventos.

### ✅ Objetivos

- Assimilar o conceito de **reatividade** no React.
- Aprender a **iniciar** e **atualizar o estado** de componentes.
- Entender como o estado afeta a **renderização condicional** de componentes.
- Configurar e gerenciar **eventos**.
- Passar argumentos para **manipuladores de eventos**.

### ✅ Reatividade e Estado no React

O React trabalha com o conceito de **estado** para lidar com a reatividade. Sempre que o estado de um componente é atualizado, o React **re-renderiza** o componente automaticamente para refletir as mudanças na interface.

No React, utilizamos o **hook** `useState` para gerenciar o estado dos componentes funcionais. Este hook nos permite criar variáveis de estado e funções que as atualizam de forma imutável.

#### Exemplo de `useState`:

```javascript
import { useState } from "react"

const Formulario = () => {
  let [materiaA, setMateriaA] = useState(0)
  let [materiaB, setMateriaB] = useState(0)
  let [materiaC, setMateriaC] = useState(0)
  let [nome, setNome] = useState("")

  const alteraNome = e => {
    setNome(estadoAnterior => {
      console.log(estadoAnterior)
      return e.target.value
    })
  }

  const renderizaResultado = () => {
    const soma = materiaA + materiaB + materiaC
    const media = soma / 3

    if (media >= 7) {
      return <p>Olá {nome}, você foi aprovado</p>
    } else {
      return <p>Olá {nome}, você não foi aprovado</p>
    }
  }

  return (
    <form>
      <input type="text" placeholder="Seu nome" onChange={alteraNome} />
      <input
        type="number"
        placeholder="Nota matéria A"
        onChange={({ target }) => setMateriaA(parseInt(target.value))}
      />
      <input
        type="number"
        placeholder="Nota matéria B"
        onChange={({ target }) => setMateriaB(parseInt(target.value))}
      />
      <input
        type="number"
        placeholder="Nota matéria C"
        onChange={({ target }) => setMateriaC(parseInt(target.value))}
      />
      {renderizaResultado()}
    </form>
  )
}

export default Formulario
```

### ✅ Manipulação de Eventos

Os eventos no React são semelhantes aos do HTML, porém, no React, eles são camelCase (por exemplo, `onClick`, `onChange`) e utilizam funções JavaScript diretamente no JSX. No exemplo acima, o evento `onChange` é utilizado para atualizar o estado conforme o usuário insere seu nome ou notas nas caixas de entrada.

#### Exemplo de `onChange` para capturar valores de entrada:

```javascript
<input type="text" placeholder="Seu nome" onChange={alteraNome} />
```

Aqui, o evento `onChange` é acionado toda vez que o valor do campo de texto é alterado, e a função `alteraNome` é chamada para atualizar o estado `nome`.

### ✅ Renderização Condicional com Estado

No exemplo do formulário, a função `renderizaResultado` calcula a média das notas e decide, com base no valor da média, se o usuário foi aprovado ou não. Isso é feito de maneira **reativa**, ou seja, sempre que o estado das notas ou do nome muda, o React renderiza novamente o componente para refletir o resultado atualizado.

#### Renderização Condicional:

```javascript
const renderizaResultado = () => {
  const soma = materiaA + materiaB + materiaC
  const media = soma / 3

  if (media >= 7) {
    return <p>Olá {nome}, você foi aprovado</p>
  } else {
    return <p>Olá {nome}, você não foi aprovado</p>
  }
}
```

### ✅ Passando Argumentos para Manipuladores de Eventos

No React, podemos passar argumentos para funções manipuladoras de eventos diretamente no JSX, como mostrado no exemplo acima, onde a função `setMateriaA` recebe o valor do campo de entrada e o converte para um número inteiro:

```javascript
onChange={({ target }) => setMateriaA(parseInt(target.value))}
```

Aqui, estamos passando o valor de `target.value` para a função `setMateriaA`.

### ✅ Componente de Perfil

O componente `Perfil` é simples e demonstra como podemos passar **props** (propriedades) para componentes no React, permitindo a reutilização com diferentes valores. Neste caso, estamos passando o `nome` e o `endereço` da imagem como props.

#### Código do Componente `Perfil`:

```javascript
import "./perfil.css"

const Perfil = ({ endereco, nome }) => {
  return (
    <div>
      <img className="perfil-avatar" src={endereco} alt="Imagem do Perfil" />
      <h3 className="perfil-titulo"> {nome}</h3>
    </div>
  )
}

export default Perfil
```

#### Estilos em `perfil.css`:

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

### ✅ Integrando Tudo no `App.jsx`

Agora que temos nossos componentes `Formulario` e `Perfil`, podemos integrá-los no componente principal `App.jsx`, que é responsável por renderizar ambos na interface.

#### Código do `App.jsx`:

```javascript
import Formulario from "./components/Formulario"
import Perfil from "./components/Perfil"

function App() {
  return (
    <>
      <Perfil nome="Lucelho Silva" endereco="https://github.com/lucelhosilva.png" />
      <Formulario />
    </>
  )
}

export default App
```

### ✅ Ponto de Entrada: `main.jsx`

O arquivo `main.jsx` é o ponto de entrada da nossa aplicação React, onde o componente `App` é renderizado no DOM.

#### Código do `main.jsx`:

```javascript
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

### ✅ Conclusão

Nesta aula, aprendemos a manipular o **estado** no React usando o hook `useState` e a lidar com **eventos** para tornar a interface interativa. Também vimos como o estado influencia a **renderização condicional** e como podemos **passar argumentos** para manipuladores de eventos. Além disso, criamos um componente de perfil reutilizável usando **props** e integramos tudo no componente principal da aplicação.

Com essas habilidades, você será capaz de criar interfaces dinâmicas e interativas, mantendo o controle sobre o estado e eventos da aplicação de forma eficaz.
