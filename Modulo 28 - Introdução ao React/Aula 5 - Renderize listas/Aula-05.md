## 📝 Aula 05: Renderize Listas

### ✅ Introdução

Nesta aula, vamos aprender a **renderizar listas** em React, utilizando o método **`map()`**. Compreender como percorrer uma lista e renderizar elementos de forma dinâmica é uma habilidade fundamental para a construção de interfaces dinâmicas. Além disso, veremos a importância das **chaves** (`keys`) na renderização eficiente de listas.

### ✅ Objetivos

- Entender os conceitos e a sintaxe para mapear uma lista de itens e renderizá-los individualmente.
- Dominar o uso do método **`map()`** para a renderização de listas em React.
- Compreender o conceito e a importância de **chaves** (`keys`) em elementos renderizados.

### ✅ Renderizando Listas com `map()`

No React, quando precisamos renderizar uma lista de elementos, usamos o método **`map()`**. O **`map()`** é uma função JavaScript que percorre cada elemento de um array e retorna um novo array com os elementos transformados, ideal para renderizar itens de uma lista.

#### Sintaxe Básica:

```javascript
array.map((item, index) => {
  return <div key={index}>{item}</div>
})
```

### ✅ A Importância das `Keys`

Cada item renderizado em uma lista precisa ter uma **`key`** única. Essa `key` ajuda o React a identificar quais itens foram alterados, adicionados ou removidos, melhorando a performance e evitando re-renderizações desnecessárias. As **`keys`** precisam ser **únicas** entre os irmãos de uma lista, sendo geralmente o **id** do item ou seu índice no array.

#### Exemplo de Uso:

```javascript
const items = ["Item 1", "Item 2", "Item 3"]

return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
)
```

### ✅ Implementação: Exibindo Repositórios do GitHub

No exemplo a seguir, criamos um componente que exibe uma lista de **repositórios** do GitHub utilizando a API do GitHub. A lista de repositórios é buscada de forma assíncrona e renderizada dinamicamente usando o método **`map()`**. Também utilizamos o estado para controlar o carregamento dos dados.

#### Estrutura do Componente `ReposList`

1. **Buscar dados da API do GitHub**: Usamos o `fetch` para obter uma lista de repositórios.
2. **Renderizar os repositórios**: Usamos o `map()` para percorrer a lista de repositórios e renderizar cada um com as informações desejadas.
3. **Estado de carregamento**: Um estado booleano (`estaCarregando`) controla se a lista já foi carregada, exibindo uma mensagem de "Carregando..." enquanto os dados são buscados.

### ✅ Código do Componente `ReposList`

```javascript
import { useEffect, useState } from "react"

const ReposList = () => {
  const [repos, setRepos] = useState([]) // Estado para armazenar a lista de repositórios
  const [estaCarregando, setEstaCarregando] = useState(true) // Estado para controlar o carregamento

  // Hook useEffect para buscar os repositórios quando o componente é montado
  useEffect(() => {
    fetch("https://api.github.com/users/lucelhosilva/repos")
      .then(res => res.json()) // Converte a resposta em JSON
      .then(resJson => {
        // Simulando um atraso de 2 segundos para mostrar o estado de carregamento
        setTimeout(() => {
          setEstaCarregando(false) // Define o estado como não carregando
          setRepos(resJson) // Armazena os dados recebidos no estado 'repos'
        }, 2000)
      })
  }, [])

  return (
    <>
      {/* Exibe mensagem de carregamento enquanto os dados não estão disponíveis */}
      {estaCarregando && <h1>Carregando ...</h1>}

      <ul>
        {/* Mapeia a lista de repositórios e renderiza cada um */}
        {repos.map(({ id, name, language, html_url }) => (
          <li key={id}>
            <b>Nome:</b> {name} <br />
            <b>Linguagem:</b> {language ? language : "Não especificada"} <br />
            <a target="_blank" href={html_url} rel="noopener noreferrer">
              Visitar no GitHub
            </a>{" "}
            <br />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ReposList
```

### ✅ Explicação do Código

1. **Estados**:
   - **`repos`**: Armazena a lista de repositórios retornada pela API.
   - **`estaCarregando`**: Controla se os dados ainda estão sendo carregados, exibindo uma mensagem apropriada.
2. **useEffect**:

   - No **`useEffect`**, fazemos a chamada à API do GitHub usando **`fetch()`**.
   - Após obter a resposta, simula-se um pequeno atraso de 2 segundos com `setTimeout()` para visualizar o estado de carregamento.
   - Quando os dados são carregados, atualizamos o estado `repos` com os dados da API e desativamos o estado de carregamento.

3. **Renderização da Lista**:

   - Utilizamos o método **`map()`** para renderizar cada repositório individualmente.
   - Cada item da lista recebe uma `key` exclusiva, que neste caso é o **`id`** do repositório.
   - Exibimos o nome, linguagem e um link para o repositório no GitHub.

4. **Estrutura Condicional**:
   - Enquanto o estado `estaCarregando` é `true`, exibimos a mensagem "Carregando...".
   - Quando os dados são carregados, a lista de repositórios é exibida.

### ✅ Componente Principal (`App.jsx`)

No componente principal, incluímos o `ReposList` junto com outros componentes, se necessário.

```javascript
import ReposList from "./components/ReposList"
import Perfil from "./components/Perfil"

function App() {
  return (
    <>
      <Perfil nome="Lucelho Silva" endereco="https://github.com/lucelhosilva.png" />
      <ReposList />
    </>
  )
}

export default App
```

### ✅ Conclusão

Nesta aula, vimos como renderizar listas no React usando o método **`map()`**, além de compreender a importância das **chaves** (`keys`) para identificar elementos únicos na lista. Através do exemplo do `ReposList`, aprendemos a buscar dados de uma API e a exibir esses dados de forma dinâmica, incluindo um estado de carregamento para melhorar a experiência do usuário.
