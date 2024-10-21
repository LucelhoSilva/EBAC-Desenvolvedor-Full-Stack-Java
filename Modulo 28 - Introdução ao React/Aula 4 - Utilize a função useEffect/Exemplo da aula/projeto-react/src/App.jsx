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
        toggle form
      </button>
    </>
  )
}

export default App
