# 📝 Aula 5: Crie a Listagem de Planos

## Objetivos

- Criar uma seção de listagem de planos em um site;
- Estilizar elementos de acordo com as diretrizes de design;
- Utilizar seletores CSS e classes.

## Estrutura do Projeto

Nesta aula, vamos adicionar uma seção de planos ao nosso site, permitindo aos usuários visualizar e escolher o plano que melhor se adapta às suas necessidades. Vamos estilizar essa seção conforme as diretrizes de design e utilizar seletores CSS e classes para aplicar os estilos corretamente.

A estrutura do projeto agora inclui os seguintes diretórios e arquivos:

```
meu-projeto/
├── assets/
│   └── fonts/
│       ├── Avenir-Regular.woff2
│       └── Avenir-Bold.woff2
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
│   │   ├── mais_populares/
│   │   │   ├── obi_wan.jpg
│   │   │   ├── bluey.jpg
│   │   │   ├── cavaleira_da_lua.jpg
│   │   │   ├── o_incrivel_dr_pol.jpg
│   │   │   ├── red.jpg
│   │   │   └── tudo_igual_sqn.jpg
│   │   ├── logos/
│   │   │   ├── disney_star_plus.png
│   │   │   ├── disney_star_plus_sm.png
│   │   │   ├── disney_star_plus_starzplay.png
│   │   │   ├── disney_star_plus_starzplay_underline.png
│   │   │   ├── disneyplus_underline.png
│   │   │   └── disneyplus.svg
│   │   ├── fundo_combo_plus.png
│   │   └── hero_desktop.jpeg
├── node_modules/
├── src/
│   ├── images/
│   │   └── hero_desktop.jpeg
│   ├── scripts/
│   │   └── main.js
│   └── styles/
│       ├── config/
│       │   ├── fonts.scss
│       │   ├── mixins.scss
│       │   └── variables.scss
│       ├── _hero.scss
│       ├── _shows.scss
│       ├── _plans.scss
│       ├── _variaveis.scss
│       └── main.scss
├── index.html
├── gulpfile.js
├── package.lock.json
└── package.json
```

## Criando a Seção de Planos

### Passo 1: Adicionando a Seção de Planos ao HTML

No arquivo `index.html`, adicionamos a nova seção de planos:

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
          <img
            src="./dist/images/mais

_no_star_plus/premier_league.jpg"
            alt="premier_league"
          />
        </li>
        <li class="shows__list__item">
          <img src="./dist/images/mais_no_star_plus/the_kardashians.jpg" alt="the_kardashians" />
        </li>
      </ul>
    </section>

    <!-- Seção de Planos -->
    <section class="plans">
      <h2 class="title--big">Escolha seu plano</h2>
      <ul class="plans__list">
        <li class="plans__list__item">
          <img src="./dist/images/logos/disneyplus_underline.png" alt="Disney+" />
          <strong class="title--small">R$ 27,90/mês*</strong>
          <p class="text--big">No Disney+ você encontra as últimas estreias do cinema, originais e clássicos inesquevíveis.</p>
          <button class="button" type="button">Assine agora</button>
        </li>
        <li class="plans__list__item">
          <img src="./dist/images/logos/disney_star_plus_sm.png" alt="Disney+ e Star+" />
          <strong class="title--small">R$ 45,90/mês*</strong>
          <p class="text--big">Assine Disney+ e Star+ juntos. Economize e aproveite agora os dois serviços por um preço único.</p>
          <button class="button" type="button">Assine agora</button>
        </li>
        <li class="plans__list__item">
          <img src="./dist/images/logos/disney_star_plus_starzplay_underline.png" alt="Disney+ e Star+ e starzplay" />
          <strong class="title--small">R$ 55,90/mês*</strong>
          <p class="text--big">Disney+, Star+ e STARZPLAY em plano especial. Assine agora os três serviços juntos.</p>
          <button class="button" type="button">Assine agora</button>
        </li>
      </ul>
      <p class="text--small">*O preço pode variar caso a assinatura seja feita através de outras plataformas.</p>
    </section>
  </body>
</html>
```

### Passo 2: Estilizando a Seção de Planos com SCSS

Na pasta `styles`, criamos um arquivo chamado `_plans.scss` para adicionar os estilos da seção de planos:

```scss
.plans {
  padding: 5.6vw;

  h2 {
    text-align: center;
  }

  &__list {
    display: flex;
    justify-content: space-around;
    margin-top: 3.75rem;

    .button {
      margin-bottom: 1.5rem;
    }

    &__item {
      text-align: center;
      padding: 3.75rem 2.75rem 2.75rem;
      max-width: 380px;
      width: 100%;

      &:nth-child(2) {
        background-image: url(../images/fundo_combo_plus.png);
        background-repeat: no-repeat;
        background-size: contain;
      }

      img {
        height: 83px;
      }

      strong {
        display: block;
        margin-top: 1.5rem;
      }
    }
  }

  p {
    text-align: center;
  }
}
```

### Passo 3: Configurando Fontes, Variáveis e Mixins

#### Arquivo `fonts.scss`

```scss
@font-face {
  font-family: Avenir;
  src: url(../fonts/Avenir-Regular.woff2);
  font-weight: 400;
}

@font-face {
  font-family: Avenir;
  src: url(../fonts/Avenir-Bold.woff2);
  font-weight: 700;
}
```

#### Arquivo `variables.scss`

```scss
$bg-primary-color: #040714;
$bg-second-color: #13151d;
$text-primary-color: silver;
$text-second-color: #f9f9f9;
$btn-primary-color: #6421ff;
$btn-second-color: #0063e5;
$btn-dark-color: rgba(0, 0, 0, 0.8);
```

#### Arquivo `mixins.scss`

```scss
@use "./variables.scss";

@mixin text($font-size: 1rem) {
  font-size: $font-size;
  line-height: $font-size + 0.625rem;
  color: variables.$text-primary-color;
}

@mixin title($font-size: 2.5rem) {
  @include text($font-size);
  color: variables.$text-second-color;
}
```

### Passo 4: Importando os Estilos no `main.scss`

No arquivo `main.scss`, importamos os estilos da seção de planos:

```scss
@use "./config/fonts";
@use "./config/variables";
@use "./config/mixins";

@use "./hero";
@use "./shows";
@use "./plans";
```

### Passo 5: Controle de Versão com Git

Após adicionar a seção de planos e configurar os estilos, vamos commitar as mudanças no Git para manter o controle de versão:

```sh
git add .
git commit -m "Adiciona seção de planos com estilos"
```

### Conclusão

Com esta configuração, aprendemos a criar uma seção de planos que permite aos usuários escolher o plano que melhor se adapta às suas necessidades.
