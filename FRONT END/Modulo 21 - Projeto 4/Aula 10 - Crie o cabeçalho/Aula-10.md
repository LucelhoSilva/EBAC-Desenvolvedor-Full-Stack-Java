# 📝 Aula 10: Crie o Cabeçalho

## Objetivos

- Compreender a estrutura HTML e CSS do cabeçalho;
- Aplicar técnicas de responsividade;
- Implementar comportamentos interativos.

## Estrutura do Projeto

Nesta aula, vamos criar um cabeçalho que inclui o logotipo e links de navegação importantes. Vamos aprender a organizá-los e estilizar esses componentes utilizando SCSS, aplicando técnicas de responsividade e implementando comportamentos interativos.

## Criando o Cabeçalho

### Passo 1: Adicionando o Cabeçalho ao HTML

No arquivo `index.html`, adicionamos a seção de cabeçalho:

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
    <!-- Cabeçalho -->
    <header class="header">
      <div class="header__container">
        <h1>
          <img class="header__logo" src="./dist/images/disneyplus.svg" alt="Disney+" />
        </h1>
        <ul class="header__links">
          <li class="header__links__item">
            <a href="#" class="button button--second">Assine agora</a>
          </li>
          <li class="header__links__item">
            <a href="#" class="button button--dark">Entrar</a>
          </li>
        </ul>
      </div>
    </header>

    <!-- Outras seções -->
  </body>
</html>
```

### Passo 2: Estilizando o Cabeçalho com SCSS

Na pasta `styles`, criamos um arquivo chamado `_header.scss` para adicionar os estilos do cabeçalho:

```scss
@use "configs/variables.scss";

.header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: variables.$bg-primary-color;
  transition: background-color 0.5s ease;

  &--is-hidden {
    background-color: transparent;
    transition: background-color 0.5s ease;

    .header {
      &__logo,
      &__links__item:first-child {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.5s ease;
      }
    }
  }

  &__container {
    padding: 0.5rem 2.25rem;
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    max-width: 80px;
    width: 100%;
    margin: 5px;
    transition: opacity 0.5s ease;
  }

  &__links {
    display: flex;

    &__item {
      margin: 5px;
      list-style: none;
      transition: opacity 0.5s ease;
    }
  }

  .button {
    height: 50px;
  }
}
```

### Passo 3: Implementando Comportamentos Interativos com JavaScript

Para implementar comportamentos interativos, como mostrar e esconder o cabeçalho ao rolar a página, adicionamos o seguinte código JavaScript:

```js
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header")
  let lastScrollY = window.scrollY

  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      header.classList.add("header--is-hidden")
    } else {
      header.classList.remove("header--is-hidden")
    }
    lastScrollY = window.scrollY
  })
})
```

### Passo 4: Integrando os Estilos no `main.scss`

Vamos importar os estilos do cabeçalho para o `main.scss`:

```scss
@use "./header";
```

### Passo 5: Controle de Versão com Git

Após adicionar a seção do cabeçalho e configurar os estilos e scripts, vamos commitar as mudanças no Git para manter o controle de versão:

```sh
git add .
git commit -m "Adiciona cabeçalho com estilos, links e comportamentos interativos"
```

### Conclusão

Nesta aula, aprendemos a criar e estilizar um cabeçalho para um site, utilizando técnicas de responsividade e implementando comportamentos interativos com JavaScript.
