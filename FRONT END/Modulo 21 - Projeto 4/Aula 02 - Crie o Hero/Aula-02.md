# 📝 Aula 2: Crie o Hero

## Objetivos

- Compreender a estrutura de um componente HTML;
- Dominar o uso de classes e estilos CSS;
- Praticar a criação de seletores CSS avançados.

## Estrutura do Projeto

Nesta aula, vamos criar o componente Hero, que será o banner principal do nosso site. O componente Hero incluirá um título, uma imagem de fundo e alguns botões de ação.

A estrutura do projeto agora inclui os seguintes diretórios e arquivos:

```
meu-projeto/
├── dist/
│   ├── css/
│   │   └── main.css
│   └── images/
│       ├── dispositivos/
│       ├── logos/
│       └── ...
├── node_modules/
├── src/
│   ├── images/
│   │   ├── dispositivos/
│   │   ├── logos/
│   │   └── ...
│   └── styles/
│       ├── _hero.scss
│       ├── _variaveis.scss
│       └── main.scss
├── index.html
├── gulpfile.js
├── package.lock.json
└── package.json
```

## Criando o Componente Hero

### Passo 1: Definindo as Variáveis no `_variaveis.scss`

No arquivo `_variaveis.scss`, definimos as cores utilizadas no componente:

```scss
$corDeFundo: #040714;
$corTextoPrincipal: silver;
$corTextoSecundario: #f9f9f9;
```

### Passo 2: Criando os Estilos no `_hero.scss`

No arquivo `_hero.scss`, definimos os estilos para o componente Hero:

```scss
@use "variaveis";

.hero {
  padding: 5.6vw;
  min-height: 90vh;
  background-image: url("../images/hero_desktop.jpeg");
  text-align: center;
  background-size: cover;

  .button {
    margin-top: 2vw;
    margin-bottom: 0.5rem;
  }

  &__content {
    max-width: 640px;

    &__branding {
      max-width: 320px;
      margin: 0 auto 38px;
    }

    .title--small {
      margin-bottom: 64px;
    }

    p {
      margin-bottom: 20px;

      &:last-child {
        margin-top: 60px;
      }
    }

    &__combos {
      display: flex;
      justify-content: space-between;
      &__combo {
        width: calc(50% - 12px);
        img {
          max-height: 60px;
        }
        button {
          display: block;
          width: 100%;
          height: 60px;
          font-size: 18px;
          color: variaveis.$corTextoSecundario;
          background-color: #6421ff;
          text-transform: uppercase;
          border: none;
          border-radius: 4px;
          margin-top: 2vw;
          margin-bottom: 8px;
        }
      }
    }
  }
}
```

### Passo 3: Incluindo os Estilos no `main.scss`

No arquivo `main.scss`, incluímos os estilos do Hero e utilizamos mixins para definir textos e títulos:

```scss
@use "variaveis";
@use "hero";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: variaveis.$corDeFundo;
}

@mixin text($fontSize: 16px) {
  font-size: $fontSize;
  line-height: $fontSize + 10px;
  color: variaveis.$corTextoPrincipal;
}

@mixin title($fontSize: 40px) {
  @include text($fontSize);
  color: variaveis.$corTextoSecundario;
}

.text--big {
  @include text(18px);
}

.text {
  @include text;
}

.text--small {
  @include text(12px);
}

.link-text {
  @include text(18px);
  text-decoration: underline;
  color: variaveis.$corTextoSecundario;
}

.title--big {
  @include title(44px);
}

.title {
  @include title;
}

.title--small {
  @include title(28px);
}
```

### Passo 4: Atualizando o `index.html`

No arquivo `index.html`, incluímos o componente Hero:

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
  </body>
</html>
```

### Passo 5: Atualizando o `gulpfile.js`

No arquivo `gulpfile.js`, certificamo-nos de que o Gulp está configurado para observar as mudanças nos arquivos SCSS e imagens:

```javascript
const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const imagemin = require("gulp-imagemin")

function styles() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/css"))
}

function images() {
  return gulp.src("./src/images/**/*").pipe(imagemin()).pipe(gulp.dest("./dist/images"))
}

exports.default = gulp.parallel(styles, images)

exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(styles))
}
```

### Conclusão

Com a criação do componente Hero, estamos aprendendo a estruturar componentes HTML e aplicar estilos CSS avançados utilizando SASS e utilizando a metodologia BEM. Com as configurações do Gulp, nosso ambiente de desenvolvimento está preparado para observar e compilar as mudanças automaticamente, facilitando a manutenção e o desenvolvimento contínuo do projeto.
