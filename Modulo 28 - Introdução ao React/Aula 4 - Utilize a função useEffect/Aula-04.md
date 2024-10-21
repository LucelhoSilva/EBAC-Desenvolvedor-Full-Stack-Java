## 📝 Aula 04: Utilize a função useEffect

### ✅ Introdução

Nesta aula, o objetivo principal é entender o **useEffect**, um hook essencial no React que permite realizar efeitos colaterais em componentes funcionais. O **useEffect** desempenha um papel importante ao permitir que você execute ações baseadas em eventos do ciclo de vida do componente, como a **montagem**, **atualização** e **desmontagem**.

### ✅ Objetivos

- Compreender o conceito de **useEffect** e **hooks** no React.
- Especificar quais **variáveis ou estados** devem ser monitorados para que o **useEffect** seja acionado.
- Escolher corretamente as **dependências** do `useEffect` para evitar **loops infinitos**.
- Assimilar como o `useEffect` está relacionado ao **ciclo de vida** do componente.
- Executar código ao longo dos diferentes momentos do ciclo de vida do componente, como durante a **montagem** (mount), **atualização** (update) e **desmontagem** (unmount).

### ✅ Hook `useEffect`

O `useEffect` é uma função que nos permite lidar com **efeitos colaterais** em componentes funcionais. Um efeito colateral pode ser, por exemplo, buscar dados de uma API, registrar um evento no DOM, ou até mesmo manipular diretamente o estado global da aplicação. O `useEffect` substitui os métodos de ciclo de vida que tradicionalmente eram usados em componentes de classe, como `componentDidMount`, `componentDidUpdate` e `componentWillUnmount`.

#### Estrutura Básica:

```javascript
useEffect(() => {
  // Código a ser executado
}, [dependências])
```

O primeiro argumento do `useEffect` é uma função a ser executada, e o segundo argumento é um **array de dependências**. O código do `useEffect` será executado sempre que qualquer dependência mudar. Se o array de dependências estiver vazio (`[]`), o código será executado apenas uma vez, quando o componente for montado.

### ✅ Exemplos Práticos

#### 1. Executando o `useEffect` Apenas Uma Vez (Montagem)

O `useEffect` sem dependências ou com um array de dependências vazio (`[]`) será executado apenas uma vez, durante a **montagem** do componente.

```javascript
useEffect(() => {
  console.log("O componente iniciou")
}, [])
```

#### 2. Limpeza ao Desmontar o Componente

O `useEffect` pode retornar uma função de **limpeza**, que é executada quando o componente é desmontado. Isso é útil, por exemplo, para limpar timers ou cancelar subscrições.

```javascript
useEffect(() => {
  console.log("O componente iniciou")

  return () => {
    console.log("O componente finalizou")
  }
}, [])
```

#### 3. Monitorando Mudanças em um Estado Específico

Você pode passar variáveis de estado no array de dependências. O `useEffect` será executado sempre que essas variáveis forem atualizadas. Neste exemplo, o `useEffect` monitora o estado `nome` e executa o código sempre que `nome` mudar.

```javascript
useEffect(() => {
  console.log("O estado nome mudou")
}, [nome])
```

#### 4. Monitorando Várias Dependências

O `useEffect` também pode monitorar várias variáveis ao mesmo tempo. No exemplo abaixo, ele será executado sempre que `materiaA`, `materiaB` ou `materiaC` forem atualizados.

```javascript
useEffect(() => {
  console.log("Materia A mudou para: " + materiaA)
}, [materiaA, materiaB, materiaC])
```

### ✅ Código do Formulário com `useEffect`

No componente `Formulario`, utilizamos o `useEffect` para monitorar os estados e entender o ciclo de vida do componente:

```javascript
import { useEffect, useState } from "react"

const Formulario = () => {
  let [materiaA, setMateriaA] = useState(0)
  let [materiaB, setMateriaB] = useState(0)
  let [materiaC, setMateriaC] = useState(0)
  let [nome, setNome] = useState("")

  // Executado apenas quando o componente é montado
  useEffect(() => {
    console.log("O componente iniciou")
  }, [])

  // Executado quando o componente é montado e quando é desmontado
  useEffect(() => {
    console.log("O componente iniciou")

    return () => {
      console.log("O componente finalizou")
    }
  }, [])

  // Monitorando mudanças no estado "nome"
  useEffect(() => {
    console.log("O estado nome mudou")
  }, [nome])

  // Monitorando mudanças no estado "materiaA"
  useEffect(() => {
    console.log("Materia A mudou para: " + materiaA)
  }, [materiaA])

  // Monitorando múltiplos estados
  useEffect(() => {
    console.log("Materia A, B ou C mudaram")
  }, [materiaA, materiaB, materiaC])

  const alteraNome = e => {
    setNome(estadoAnterior => {
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

### ✅ Implementação no Componente Principal (`App.jsx`)

O componente `App` inclui o formulário e um botão para **alternar a visibilidade** do formulário, demonstrando o uso de estado e a desmontagem do componente com o `useEffect`.

#### Código do `App.jsx`:

```javascript
import { useState } from "react"
import Formulario from "./components/Formulario"
import Perfil from "./components/Perfil"

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)

  return (
    <>
      <Perfil nome="Lucelho Silva" endereco="https://github.com/lucelhosilva.png" />

      {formularioEstaVisivel && <Formulario />}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">
        Toggle Formulário
      </button>
    </>
  )
}

export default App
```

### ✅ Ciclo de Vida e Limpeza com `useEffect`

Ao clicar no botão "Toggle Formulário", o componente `Formulario` é **montado** ou **desmontado**. O `useEffect` garante que o console exiba mensagens correspondentes, como "O componente iniciou" na montagem e "O componente finalizou" na desmontagem.

### ✅ Conclusão

Nesta aula, vimos como utilizar o **useEffect** para lidar com o ciclo de vida dos componentes no React. O `useEffect` permite executar código em momentos importantes, como na montagem e desmontagem, além de monitorar mudanças em variáveis específicas e evitar problemas como **loops infinitos**. Este conhecimento é essencial para construir componentes React eficientes e otimizados.
