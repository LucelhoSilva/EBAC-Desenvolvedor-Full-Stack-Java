import { useEffect, useState } from "react" // essas funções são hooks do react que permitem manipular o estado e ciclo de vida do componente

const Formulario = () => {
  let [materiaA, setMateriaA] = useState(0)
  let [materiaB, setMateriaB] = useState(0)
  let [materiaC, setMateriaC] = useState(0)
  let [nome, setNome] = useState("")

  /*Ciclo de vida de um componente
  Ele inicia(montado), ele tem as atualizações e ele finaliza(é desmontado)

  mount
  update
  unmount

  */

  // Quando não e passado nem um parametro para o useEffect, ele é executado somente uma vez, quando o componente é montado
  useEffect(() => {
    console.log("O componente iniciou")
  }, [])

  // é possivel passar uma função de retorno para o useEffect, essa função é executada quando o componente é desmontado(finalizado)
  useEffect(() => {
    console.log("O componente iniciou")

    return () => {
      console.log("O componente finalizou")
    }
  }, [])

  // é possivel condicionar a execução do useEffect passando um array de dependencias como segundo parametro da função
  useEffect(() => {
    console.log("O estado nome mudou")
  }, [nome])

  useEffect(() => {
    console.log("Materia A mudou para: " + materiaA)
  }, [materiaA])

  // é possivel passar mais de uma dependencia para o useEffect
  useEffect(() => {
    console.log("Materia A mudou para: " + materiaA)
  }, [materiaA, materiaB, materiaC])

  const alteraNome = e => {
    // setNome(e.target.value)
    // eslint-disable-next-line no-unused-vars
    setNome(estadoAnterior => {
      // estadoAnterior = valornovo
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
      <ul></ul>
      {[1, 2, 3, 4, 5].map(item => (
        <li key={item}>{item}</li> // deve se passar uma chave unica para cada item da lista para o react poder identificar cada item da lista
      ))}

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
