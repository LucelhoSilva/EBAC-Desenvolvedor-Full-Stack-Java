// index.jsx
import { useState } from "react"
import styles from "./Formulario.module.css"

const Formulario = () => {
  const [peso, setPeso] = useState("")
  const [altura, setAltura] = useState("")
  const [imc, setImc] = useState(null)
  const [classificacao, setClassificacao] = useState("")

  const definirClassificacao = imc => {
    if (imc < 18.5) {
      setClassificacao("Abaixo do peso")
    } else if (imc >= 18.5 && imc < 24.9) {
      setClassificacao("Peso normal")
    } else if (imc >= 25 && imc < 29.9) {
      setClassificacao("Sobrepeso")
    } else {
      setClassificacao("Obesidade")
    }
  }

  const calcularIMC = e => {
    e.preventDefault()

    if (altura && peso) {
      const alturaMetros = parseFloat(altura) / 100
      const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2)
      setImc(imcCalculado)
      definirClassificacao(imcCalculado)
    }
  }

  return (
    <>
      <h1 className={styles.title}>Calculadora de IMC</h1>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={calcularIMC}>
          <label className={styles.label}>
            Peso (kg):
            <input
              className={styles.input}
              type="number"
              value={peso}
              onChange={e => setPeso(e.target.value)}
              placeholder="Digite seu peso"
            />
          </label>

          <label className={styles.label}>
            Altura (cm):
            <input
              className={styles.input}
              type="number"
              value={altura}
              onChange={e => setAltura(e.target.value)}
              placeholder="Digite sua altura"
            />
          </label>

          <button className={styles.button} type="submit">
            Calcular
          </button>

          {imc && (
            <div className={styles.resultado}>
              <p>Seu IMC é: {imc}</p>
              <p>Classificação: {classificacao}</p>
            </div>
          )}
        </form>
      </div>
    </>
  )
}

export default Formulario
