function App() {
  const nome = "Lucelho"

  function mostrarNome() {
    return nome
  }
  
  const pessoa = {
    nome: "Lucelho",
  }

  let estaDeDia = true;

  return (
    <> 
      <h1>Olá, {pessoa.nome}</h1> 
      <h2>Olá, {mostrarNome()}</h2>
      <p>Meu primeiro parágrafo em React { estaDeDia ? 'Bom dia' : 'Boa Tarde!' }</p>
    </>
  )
}

export default App;