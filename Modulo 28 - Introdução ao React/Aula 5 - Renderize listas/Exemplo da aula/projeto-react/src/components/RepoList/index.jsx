import { useEffect, useState } from "react"

const ReposList = () => {
  const [repos, setRepos] = useState([])
  const [estaCarregando, setEstaCarregando] = useState(true)

  useEffect(() => {
    fetch("https://api.github.com/users/lucelhosilva/repos")
      .then(res => res.json())
      .then(resJson => {
        setTimeout(() => {
          setEstaCarregando(false)
          setRepos(resJson)
        }, 2000)
      })
  }, [])

  return (
    <>
      {estaCarregando && <h1>Carregando ...</h1>}
      <ul>
        {repos.map(({ id, name, language, html_url }) => (
          <li key={id}>
            <b>Nome:</b>
            {name} <br />
            <b>Linguagem:</b>
            {language} <br />
            <b>Nome:</b>
            {name} <br />
            <a target="_blank" href={html_url}>
              Visitar no Github
            </a>{" "}
            <br />
          </li>
        ))}
        <li>Repositório</li>
      </ul>
    </>
  )
}

export default ReposList
