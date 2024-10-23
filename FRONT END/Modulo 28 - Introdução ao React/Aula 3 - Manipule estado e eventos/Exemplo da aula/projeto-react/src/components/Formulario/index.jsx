import { useState } from "react"

const Formulario = () => {
  let [materiaA, setMateriaA] = useState(0)
  let [materiaB, setMateriaB] = useState(0)
  let [materiaC, setMateriaC] = useState(0)
  let [nome, setNome] = useState("")

  const alteraNome = e => {
    // console.log(e.target.value)
    // setNome(e.target.value)
    setNome(estadoAnterior => {
      // imutabilidade recebe um valor e não altera o valor anterior
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
      return <p>Olá {nome}, você não foi reprovado</p>
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
