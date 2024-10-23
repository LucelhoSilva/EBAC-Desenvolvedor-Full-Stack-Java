# 📝 Aula 2: Analise o Layout

## Objetivos da Aula

-   **Identificar Elementos de Design:** Estudar as cores, tipografia, imagens e espaçamento no layout da landing page.
-   **Análise de Disposição:** Examinar a hierarquia das informações e a disposição dos elementos, como o posicionamento de botões de chamada à ação, cabeçalho e rodapé.
-   **Criação do Hero:** Implementar a seção "hero" da landing page, o destaque visual que chama a atenção do visitante.
-   **Pseudo-elemento `::before`:** Compreender o conceito e a aplicação prática do pseudo-elemento `::before` no CSS.

## Estrutura HTML Criada

Nesta aula, você começou a estruturar o cabeçalho da sua landing page com o seguinte código HTML:

```html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>EBAC Tech Talks</title>
        <!-- Google fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
        <!-- Style -->
        <link rel="stylesheet" href="./src/styles/main.scss" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    </head>

    <body>
        <header class="hero">
            <div class="container">
                <img class="hero__logo" src="./src/images/ebac_logo.svg" alt="EBAC" />
                <p class="hero__text">O maior evento de tecnologia do Brasil começa em 10d 12h 20m 15s</p>
            </div>
        </header>
        <script src="./src/scripts/main.js"></script>
    </body>
</html>
```

## Estilização com SCSS

A estilização da seção "hero" foi feita utilizando SCSS, garantindo responsividade e um design moderno.

### `main.scss`

```scss
@use "./hero";

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: #fff;
}

.container {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 640px) {
        max-width: 80%;
    }

    @media (max-width: 1024px) {
        max-width: 90%;
    }
}
```

### `_hero.scss`

```scss
.hero {
    padding-top: 64px;
    padding-bottom: 100px;
    background-image: url(../images/fundo.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    .container {
        position: relative;
    }

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
        content: "";
        opacity: 0.7;
    }

    &__text {
        margin-top: 64px;
        margin-bottom: 64px;
        font-size: 40px;
        line-height: 56px;
        text-align: center;
    }

    &__logo {
        margin: 0 auto;
        height: 80px;
        display: block;
    }

    @media (max-width: 640px) {
        padding: 40px 0;

        &__logo {
            height: 40px;
        }

        &__text {
            font-size: 22px;
            line-height: 24px;
            margin: 24px 0;
        }
    }
}
```

## Conceito de Pseudo-elemento `::before`

O pseudo-elemento `::before` foi utilizado na seção "hero" para adicionar uma camada de opacidade sobre a imagem de fundo, criando um efeito visual de sobreposição que ajuda a destacar o conteúdo do texto.
