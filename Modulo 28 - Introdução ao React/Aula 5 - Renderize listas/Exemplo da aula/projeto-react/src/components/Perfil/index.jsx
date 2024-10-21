import "./perfil.css"

const Perfil = ({ endereco, nome }) => {
  return (
    <div>
      <img className="perfil-avatar" src={endereco} alt="Nicolas Cage" />
      <h3 className="perfil-titulo"> {nome}</h3>
    </div>
  )
}

export default Perfil
