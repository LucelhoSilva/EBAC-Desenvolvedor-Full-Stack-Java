## 📝 Aula 01: Defina e desenvolva cards

Cards são um componente do Bootstrap que permite agrupar informações em um contêiner flexível e extensível. Eles são usados para exibir conteúdo variado de forma organizada e visualmente atraente.

### Exemplo desenvolvido

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap - Cards</title>
    <link rel="stylesheet" href="./lib/bootstrap.min.css" />
    <style>
      .card-img-overlay {
        background-color: rgba(0, 0, 0, 0.7);
      }
    </style>
  </head>

  <body>
    <h1>Boostrap - Cards</h1>
    <div class="container">
      <section class="row">
        <article class="col-4">
          <div class="card">
            <header class="card-header">Desenvolvimento Web</header>
            <img src="https://via.placeholder.com/100x100" alt="Imagem de exemplo" />
            <div class="card-body">
              <h4 class="card-title">Cards do Bootstrap</h4>
              <p class="card-text">Conheça os Cards do Bootstrap e suas variações.</p>
              <a href="#" class="btn btn-primary">Leia mais</a>
            </div>
            <footer class="card-footer">Postado em <time datetime="2022-08-10T19:00:00">10/08/2022 às 19:00:00</time></footer>
          </div>
        </article>
        <article class="col-4">
          <div class="card text-bg-dark">
            <img src="https://cdn.pixabay.com/photo/2022/02/07/12/17/street-6999284_960_720.jpg" alt="Imagem de rua" />
            <div class="card-img-overlay">
              <h4 class="card-title">Título do Card</h4>
              <h5 class="card-subtitle">Subtítulo do Card</h5>
              <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quasi, dicta rerum nostrum, officiis eos veritatis.</p>
              <a href="#" class="btn btn-primary">Botão link</a>
            </div>
          </div>
        </article>
        <article class="col-4">
          <div class="card text-bg-dark">
            <header class="card-header">Cabeçalho do header</header>
            <img src="https://via.placeholder.com/100x100" alt="Imagem de exemplo" />
            <div class="card-body">
              <h4 class="card-title">Título do Card</h4>
              <h5 class="card-subtitle">Subtítulo do Card</h5>
              <p class="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quasi, dicta rerum nostrum, officiis eos veritatis repudiandae fugit voluptatem mollitia distinctio
                quod hic maxime quidem? Neque, aspernatur! Magni, ut iure!
              </p>
              <a href="#" class="btn btn-primary">Botão link</a>
            </div>
          </div>
        </article>
      </section>
    </div>

    <script src="./lib/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

### Explicação do código

- **container**: Utiliza a classe `.container` para centralizar o conteúdo da página.
- **row**: Utiliza a classe `.row` para criar uma linha que conterá as colunas com os cards.
- **col-4**: Utiliza a classe `.col-4` para definir que cada coluna ocupará 4 colunas do grid do Bootstrap, resultando em três colunas (cards) por linha.
- **card**: Define o contêiner do card.
- **card-header**: Cabeçalho do card, geralmente usado para títulos ou informações importantes.
- **card-body**: Corpo do card, onde é colocado o conteúdo principal como título, texto e botões.
- **card-title**: Título do card.
- **card-text**: Texto do card.
- **btn**: Classe utilizada para definir um botão dentro do card. `btn-primary` aplica um estilo primário ao botão.
- **card-footer**: Rodapé do card, geralmente usado para informações adicionais como data ou autor.
- **card-img-overlay**: Contêiner que sobrepõe a imagem do card, permitindo colocar texto e outros conteúdos sobre a imagem com uma camada de fundo semi-transparente para melhor visibilidade do texto.
- **text-bg-dark**: Classe que aplica um fundo escuro ao card e ajusta automaticamente a cor do texto para melhorar a legibilidade.

Neste exemplo, foram criados três cards, cada um com diferentes elementos e estilos, mostrando a flexibilidade dos cards do Bootstrap.

![Exemplo de Cards](./Exemplo/card.html)
