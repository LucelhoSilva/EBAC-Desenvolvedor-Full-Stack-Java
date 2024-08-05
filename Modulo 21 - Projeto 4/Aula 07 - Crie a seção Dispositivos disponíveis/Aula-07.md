# 📝 Aula 7: Crie a Seção "Dispositivos Disponíveis"

## Objetivos

- Reestruturar uma seção de conteúdo com imagem e lista;
- Aplicar estilos CSS para formatar a seção;
- Resolver problemas de alinhamento e vazamento de conteúdo.

## Estrutura do Projeto

Nesta aula, vamos adicionar duas novas seções ao nosso site: "Baixe filmes e séries" e "Dispositivos Disponíveis". Ambas as seções terão estilos semelhantes, então vamos integrar esses estilos no `main.scss`.

## Criando as Seções "Baixe filmes e séries" e "Dispositivos Disponíveis"

### Passo 1: Adicionando as Seções ao HTML

No arquivo `index.html`, adicionamos as novas seções:

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clone Disney+</title>
    <link rel="stylesheet" href="./dist/css/main.css" />
  </head>

  <body>
    <!-- Seções anteriores -->

    <!-- Seção Baixe filmes e séries -->
    <section class="image-text-section image-text-section--image-full-width">
      <picture>
        <img src="./dist/images/fundo_rei_leao.png" alt="fundo_rei_leao" />
      </picture>
      <div class="image-text-section__text-container image-text-section--image-full-width__text-container">
        <h2 class="title">Baixe filmes e séries</h2>
        <p class="text--big">Baixe e assista quando e onde quiser. Assim, seus favoritos estão sempre com você, até mesmo sem internet.</p>
      </div>
    </section>

    <!-- Seção dispositivos disponíveis -->
    <section class="available-devices">
      <h2 class="title">Disponível nos seus dispositivos favoritos</h2>
      <ul class="available-devices__list">
        <li class="available-devices__list__item">
          <img src="./dist/images/dispositivos/computador.png" alt="computador" />
          <h4 class="title--small">Computador</h4>
          <ul class="text">
            <li>Chrome OS</li>
            <li>MacOS</li>
            <li>PC Windows</li>
          </ul>
        </li>
        <li class="available-devices__list__item">
          <img src="./dist/images/dispositivos/tv.png" alt="tv" />
          <h4 class="title--small">TV</h4>
          <ul class="text">
            <li>Amazon Fire TV</li>
            <li>Android TV</li>
            <li>Apple TV</li>
            <li>Chromecast</li>
            <li>TVs LG</li>
            <li>Roku</li>
            <li>Samsung</li>
          </ul>
        </li>
        <li class="available-devices__list__item">
          <img src="./dist/images/dispositivos/videogames.png" alt="videogames" />
          <h4 class="title--small">Videogames</h4>
          <ul class="text">
            <li>PS4</li>
            <li>PS5</li>
            <li>Xbox One</li>
            <li>Xbox Series X</li>
            <li>Xbox Series S</li>
          </ul>
        </li>
        <li class="available-devices__list__item">
          <img src="./dist/images/dispositivos/celular.png" alt="celular" />
          <h4 class="title--small">Celulares e tablets</h4>
          <ul class="text">
            <li>Tablets Amazon Fire</li>
            <li>Celulares e Tablets Android</li>
            <li>iPhone e iPad</li>
          </ul>
        </li>
      </ul>
    </section>
  </body>
</html>
```

### Passo 2: Estilizando as Seções com SCSS

Na pasta `styles`, criamos um arquivo chamado `_available-devices.scss` para adicionar os estilos da seção "Dispositivos Disponíveis":

```scss
.available-devices {
  padding: 5.6vw;

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    &__item {
      text-align: center;

      h4 {
        margin-block: 1.25rem 1.5rem;
      }

      li {
        list-style: none;
      }

      img {
        max-width: 100%;
      }
    }
  }
}
```

### Passo 3: Integrando os Estilos no `main.scss`

Vamos mover os estilos da seção "Assista do seu jeito" para `main.scss`, já que as novas seções compartilham estilos semelhantes:

```scss
@use "config/variables.scss";

.image-text-section {
  padding: 2vw 5.6vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: variables.$bg-primary-color;
  color: variables.$text-second-color;

  &--image-full-width {
    picture {
      flex: 1;
      img {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
      }
    }

    &__text-container {
      flex: 1;
      text-align: left;
      padding: 0 1.5rem;

      .title {
        @include variables.title(2.5rem);
        margin-bottom: 1rem;
      }

      .text--big {
        @include variables.text(1.25rem);
        line-height: 1.75rem;
      }
    }
  }
}

@use "./available-devices";
```

### Passo 4: Controle de Versão com Git

Após adicionar as seções "Baixe filmes e séries" e "Dispositivos Disponíveis" e configurar os estilos, vamos commitar as mudanças no Git para manter o controle de versão:

```sh
git add .
git commit -m "Adiciona seções 'Baixe filmes e séries' e 'Dispositivos Disponíveis' com estilos"
```

### Conclusão

Nesta aula, criamos duas novas seções que melhoram a experiência do usuário ao fornecer informações claras sobre como assistir conteúdo e em quais dispositivos.
