import { useState } from "react"
import Perfil from "./components/Perfil"
import RepoList from "./components/ReposList"

function App() {
  const [nomeUsuario, setNomeUsuario] = useState("")

  return (
    <>
      <input type="text" onBlur={e => setNomeUsuario(e.target.value)} />
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <RepoList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  )
}

export default App
