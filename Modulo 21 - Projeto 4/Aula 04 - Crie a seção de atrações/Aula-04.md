# 📝 Aula 4: Crie a Seção de Atrações

## Objetivos

- Aprender a criar uma seção de atrações em um site;
- Desenvolver habilidades de manipulação de eventos em JavaScript;
- Praticar estilização CSS para destacar a aba ativa.

## Estrutura do Projeto

Nesta aula, vamos criar uma seção de atrações que permite aos usuários alternar entre diferentes categorias de shows. Usaremos HTML, CSS e JavaScript para implementar a funcionalidade de abas.

A estrutura do projeto agora inclui os seguintes diretórios e arquivos:

```
meu-projeto/
├── assets/
│   └── fonts/
│       ├── Avenir-Regular.woff2
│       └── Avenir-Bold.woff2
├──scripts/
│   └── main.js
├── dist/
│   ├── css/
│   │   └── main.css
│   ├── images/
│   │   ├── em_breve/
│   │   │   ├── spidey.jpg
│   │   │   ├── desencantada.jpg
│   │   │   ├── lobisomem.jpg
│   │   │   ├── sem_limites.jpg
│   │   │   ├── willow.jpg
│   │   │   └── the_santa_clauses.jpg
│   │   ├── mais_no_star_plus/
│   │   │   ├── libertadores.jpg
│   │   │   ├── belair.jpg
│   │   │   ├── nba.jpg
│   │   │   ├── os_simpson.jpg
│   │   │   ├── premier_league.jpg
│   │   │   └── the_kardashians.jpg
│   │   └── mais_populares/
│   │       ├── obi_wan.jpg
│   │       ├── bluey.jpg
│   │       ├── cavaleira_da_lua.jpg
│   │       ├── o_incrivel_dr_pol.jpg
│   │       ├── red.jpg
│   │       └── tudo_igual_sqn.jpg
├── node_modules/
├── src/
│   ├── images/
│   │   └── hero_desktop.jpeg
│   └── styles/
│       ├── _hero.scss
│       ├── _shows.scss
│       ├── _variaveis.scss
│       └── main.scss
├── index.html
├── gulpfile.js
├── package.lock.json
└── package.json
```

## Criando a Seção de Atrações

### Passo 1: Adicionando a Seção de Atrações ao HTML

No arquivo `index.html`, adicionamos a nova seção de atrações:

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
    <!-- Banner do site -->
    <section class="hero">
      <div class="hero__content">
        <h1 class="hero__content__branding">
          <img src="./dist/images/disneyplus.svg" alt="Disney+" />
        </h1>
        <h3 class="title--small">As melhores histórias, tudo em um só lugar.</h3>
        <p>
          <a href="#" class="link-text">Assinar o Disney+</a>
          <br />
          <span class="text">R$ 27,90/mês ou R 279,90/ano à vista*</span>
        </p>
        <ul class="hero__content__combos">
          <li class="hero__content__combos__combo">
            <img src="./dist/images/logos/disney_star_plus.png" alt="Disney+ - Strar+ - Combo+" />
            <button class="button" type="button">Assine Agora</button>
            <span class="text">R$ 45,90/mês*</span>
          </li>
          <li class="hero__content__combos__combo">
            <img src="./dist/images/logos/disney_star_plus_starzplay.png" alt="Disney+ - Strar+ - Combo+" />
            <button class="button" type="button">Assine Agora</button>
            <span class="text">R$ 55,90/mês*</span>
          </li>
        </ul>
        <p class="text--small">*O preço pode variar caso a assinatura seja feita através de outras plataformas.</p>
      </div>
    </section>

    <!-- Seção de Atrações -->
    <section class="shows">
      <nav class="shows__tabs">
        <button data-tab-button="em_breve" class="shows__tabs__button shows__tabs__button--is-active">Em breve</button>
        <button data-tab-button="populares" class="shows__tabs__button">Mais populares</button>
        <button data-tab-button="star_plus" class="shows__tabs__button">Mais no Star+</button>
      </nav>
      <ul data-tab-id="em_breve" class="shows__list shows__list--is-active">
        <li class="shows__list__item">
          <img src="./dist/images/em_breve/spidey.jpg" alt="Spidey" />
        </li>
        <li class="shows__list__item">
          <img src="./dist/images/em_breve/desencantada.jpg" alt="desencantada" />
        </li>
        <li class="shows__list__item">
          <img src="./dist/images/em_breve/lobisomem.jpg" alt="lobisomem" />
        </li>
        <li class="shows__list__item">
          <img src="./dist/images/em_breve/sem_limites.jpg" alt="sem_limites" />
        </li>
        <li class="shows__list__item">
          <img src="./dist/images/em_breve/willow.jpg" alt="willow" />
        </li>
        <li class="shows__list__item">
          <img src="./dist/images/em_breve/the_santa_clauses.jpg" alt="the_santa_clauses" />
        </li>
      </ul>
      <ul data-tab-id="populares" class="shows__list">
        <li class="shows__list__item">
          <img src="./dist/images/mais_populares/obi_wan.jpg" alt="obi_wan" />
        </li>
        <li class="shows__list__item">
          <img src="./dist/images/mais_populares/bluey.jpg" alt="bluey" />
        </li>
        <li class="shows__list__item">
          <img src="./dist/images/mais_populares/cavaleira_da_lua.jpg" alt="cavaleira_da_lua" />
        </li>
        <li class="shows__list__item">
          <img src="./dist/images/mais_populares/o_incrivel_dr_pol.jpg" alt="o_incrivel_dr_pol" />
        </li>
        <li class="shows__list__item">
          <img src="./dist/images/mais_populares/red.jpg" alt="red" />
        </li>
        <li class="shows__list__item">
          <img src="./dist/images/mais_populares/tudo_igual_sqn.jpg" alt="tudo_igual_sqn" />
        </li>
      </ul>
      <ul data-tab-id="star_plus" class="shows__list">
        <li class="shows__list__item">
          <img src="./dist/images/mais_no_star_plus/libertadores.jpg" alt="libertadores" />
        </li>
        <li class="shows__list__item">
          <img src="./dist/images/mais_no_star_plus/belair.jpg" alt="belair" />
        </li>
        <li class="shows__list__item">
          <img src="./dist/images/mais_no_star_plus/nba.jpg" alt="nba" />
        </li>
        <li class="shows__list__item">
          <img src="./dist/images/mais_no_star_plus/os_simpson.jpg" alt="os_simpson" />
        </li>
        <li class="shows__list__item">
          <img src="./dist/images/mais_no_star_plus/premier_league.jpg" alt="premier_league" />
        </li>
        <li class="shows__list__item">
          <img src="./dist/images/mais_no_star_plus/the_kardashians.jpg" alt="the_kardashians" />
        </li>
      </ul>
    </section>

    <script src="./dist/js/main.js"></script>
  </body>
</html>
```

### Passo 2: Estilizando a Seção de Atrações com CSS

No arquivo `_shows.scss`, adicionamos as regras de estilo para a seção de atrações:

```scss
@use "variaveis";

.shows {
  padding: 2vw 5.6vw;
  min-height: 50vh;

  &__list {
    display: none;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;

    margin-top: 2.75rem;

    &--is-active {
      display: grid;
    }

    &__item {
      img {
        max-width: 100%;
        border-radius: 4px;
      }
    }
  }

  &__tabs {
    display: flex;
    justify-content: center;

    &__button {
      color: variaveis.$corTextoSecundario;
      font-size: 1.25rem;
      border: none;
      border-bottom: 5px solid transparent;
      padding-bottom: 0.5rem;
      background: none;
      text-transform: uppercase;
      margin: 0 1vw;
      cursor: pointer;

      &--is-active {
        border-color: variaveis.$corTextoSecundario;
      }

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }
}
```

### Passo 3: Adicionando a Lógica de Manipulação de Eventos com JavaScript

Na pasta `scripts`, criamos o arquivo `main.js` com a lógica para alternar entre as abas:

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-tab-button]")

  // Seção de atrações, abas
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (btn) => {
      const targetTab = btn.target.dataset.tabButton
      const tab = document.querySelector(`[data-tab-id=${targetTab}]`)
      removeActiveTabs()
      tab.classList.add("shows__list--is-active")
      removeActiveButtons()
      btn.target.classList.add("shows__tabs__button--is-active")
    })
  }
})

const removeActiveButtons = () => {
  const buttons = document.querySelectorAll("[data-tab-button]")
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__button--is-active")
  }
}

const removeActiveTabs = () => {
  const tabs = document.querySelectorAll("[data-tab-id]")
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("shows__list--is-active")
  }
}
```

### Passo 4: Importando os Estilos

No arquivo `main.scss`, importamos os estilos da seção de atrações:

```scss
@use "shows";
```

### Passo 5: Controle de Versão com Git

Após adicionar a seção de atrações e configurar os estilos e scripts, é importante commitar as mudanças no Git para manter o controle de versão:

```sh
git add .
git commit -m "Adiciona seção de atrações com abas e lógica de manipulação de eventos"
```

### Conclusão

Com esta configuração, aprendemos a criar uma seção de atrações que permite aos usuários alternar entre diferentes categorias de shows. Implementamos a lógica de manipulação de eventos em JavaScript para alternar entre as abas e estilizamos a seção com CSS para destacar a aba ativa. Também praticamos o uso do controle de versão com o Git, garantindo que todas as mudanças sejam rastreadas e documentadas.
