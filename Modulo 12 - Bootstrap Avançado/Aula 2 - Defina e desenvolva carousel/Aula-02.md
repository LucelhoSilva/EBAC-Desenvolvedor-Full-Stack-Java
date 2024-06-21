## 📝 Aula 02: Defina e desenvolva carousel

Um carousel é um componente, geralmente utilizado para criar uma apresentação de slides rotativa, exibindo uma série de conteúdo, como imagens, textos ou vídeos.

Por exemplo, em uma galeria de imagens ou uma página de produtos, podemos utilizar um Carousel para exibir várias imagens de forma interativa e atraente.

Você pode conferir a documentação oficial do componente:
[Documentação do Carousel do Bootstrap](https://getbootstrap.com/docs/5.2/components/carousel/)

### Exemplo desenvolvido

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bootstrap - Carousel</title>
    <link rel="stylesheet" href="./lib/bootstrap.min.css" />
  </head>

  <body>
    <section id="carousel-exemplo" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <article data-bs-interval="2500" class="carousel-item active">
          <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2023/01/30/18/56/island-7756423_1280.jpg" alt="Imagem de uma montanha" />
          <div class="carousel-caption">
            <h2>Montanha</h2>
          </div>
        </article>
        <article data-bs-interval="2500" class="carousel-item">
          <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2023/01/30/18/56/island-7756423_1280.jpg" alt="Imagem de uma montanha" />
          <div class="carousel-caption">
            <h2>Montanha</h2>
          </div>
        </article>
        <article data-bs-interval="2500" class="carousel-item">
          <img class="d-block w-100" src="https://cdn.pixabay.com/photo/2023/01/30/18/56/island-7756423_1280.jpg" alt="Imagem de uma montanha" />
          <div class="carousel-caption">
            <h2>Montanha</h2>
          </div>
        </article>
      </div>
      <button data-bs-target="#carousel-exemplo" data-bs-slide="prev" class="carousel-control-prev" type="button">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button data-bs-target="#carousel-exemplo" data-bs-slide="next" class="carousel-control-next" type="button">
        <span class="carousel-control-next-icon"></span>
      </button>

      <ol class="carousel-indicators">
        <li data-bs-target="#carousel-exemplo" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#carousel-exemplo" data-bs-slide-to="1"></li>
        <li data-bs-target="#carousel-exemplo" data-bs-slide-to="2"></li>
      </ol>
    </section>
    <script src="./lib/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

Neste exemplo, criamos um carousel com três itens, cada um contendo uma imagem e uma legenda. O carousel é configurado para alternar automaticamente entre os itens a cada 3 segundos.

- **carousel-inner**: Contém os itens do carousel.
- **carousel-item**: Representa cada item do carousel.
- **carousel-control-prev** e **carousel-control-next**: Botões para navegar pelos itens do carousel.
- **carousel-indicators**: Indicadores para mostrar o slide atual e navegar entre os slides.

Com esse exemplo, você pode desenvolver carousels estilizados e funcionais utilizando as classes de utilitários do Bootstrap, melhorando a apresentação de conteúdo dinâmico no seu projeto web.

![Exemplo de Carousel](./Exemplo/carousel.html)
