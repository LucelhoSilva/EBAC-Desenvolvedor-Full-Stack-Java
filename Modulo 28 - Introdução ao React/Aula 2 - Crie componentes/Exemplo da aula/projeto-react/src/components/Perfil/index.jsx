import './perfil.css';

// export default () => {
// export default function () {

const Perfil = () => {
  const usuario = {
    nome: 'Lucelho Silva',
    avatar: 'https://github.com/lucelhosilva.png'
  }

  return (
    <div>
    <img className="perfil-avatar" src={usuario.avatar} alt="Nicolas Cage" />
      <h3 className="perfil-titulo"> { usuario.nome}</h3>
    </div>
  );
}


export default Perfil;