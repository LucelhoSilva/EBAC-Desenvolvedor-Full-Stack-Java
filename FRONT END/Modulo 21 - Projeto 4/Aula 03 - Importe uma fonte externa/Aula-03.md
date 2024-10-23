# 📝 Aula 3: Importe uma Fonte Externa

## Objetivos

- Compreender como importar fontes externas em um projeto web;
- Praticar o uso do controle de versão com o Git.

## Estrutura do Projeto

Nesta aula, vamos aprender a importar fontes externas e utilizá-las em nosso projeto. Também reforçaremos a prática de controle de versão com o Git.

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
│   └── images/
│       └── hero_desktop.jpeg
├── node_modules/
├── src/
│   ├── images/
│   │   └── hero_desktop.jpeg
│   └── styles/
│       ├── _hero.scss
│       ├── _variaveis.scss
│       └── main.scss
├── index.html
├── gulpfile.js
├── package.lock.json
└── package.json
```

## Importando Fontes Externas

### Passo 1: Adicionando as Fontes ao Projeto

Certifique-se de que os arquivos de fontes estejam na pasta `assets/fonts/`:

```
meu-projeto/
├── assets/
│   └── fonts/
│       ├── Avenir-Regular.woff2
│       └── Avenir-Bold.woff2
```

### Passo 2: Configurando as Fontes no `main.scss`

No arquivo `main.scss`, adicionamos as regras para importar e utilizar as fontes:

```scss
@use "variaveis";
@use "hero";

@font-face {
  font-family: "Avenir";
  src: url("../../assets/fonts/Avenir-Regular.woff2");
  font-weight: 400;
}

@font-face {
  font-family: "Avenir";
  src: url("../../assets/fonts/Avenir-Bold.woff2");
  font-weight: 700;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: variaveis.$corDeFundo;
  font-family: Avenir, sans-serif;
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

### Passo 3: Atualizando o `index.html`

Certifique-se de que o arquivo `index.html` está utilizando os estilos atualizados:

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

### Passo 4: Controle de Versão com Git

Após adicionar as fontes e configurar os estilos, é importante commitar as mudanças no Git para manter o controle de versão:

```sh
git add .
git commit -m "Adiciona fontes externas e configura estilos"
```

### Conclusão

Com esta configuração, aprendemos a importar fontes externas e utilizá-las em nosso projeto, proporcionando uma aparência mais profissional e personalizada. Também praticamos o uso do controle de versão com o Git, garantindo que todas as mudanças sejam rastreadas e documentadas.
