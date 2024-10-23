# 📝 Aula 5: Crie a descrição e organização do evento

Nesta aula, aprendemos sobre a importância da organização do código, a criação de variáveis CSS para facilitar a manutenção e a aplicação de animações com bibliotecas externas para dar vida à nossa landing page.

## Objetivos

-   Compreender a importância da organização do código para o projeto da landing page;
-   Dominar a criação de variáveis CSS;
-   Aplicar animações com bibliotecas externas.

## Criação de Variáveis CSS

Criamos um arquivo chamado `_variables.scss` onde declaramos as variáveis globais para o projeto:

```scss
:root {
    --bg-primary-color: #000;
    --text-primary-color: #fff;
    --btn-primary-color: #4f24c3;

    --linear-gradient-01: linear-gradient(#1b6ca7, #442bdb);
    --linear-gradient-02: linear-gradient(#442bdb, #89223b);
    --linear-gradient-03: linear-gradient(#89223b, #9c791d);
    --linear-gradient-04: linear-gradient(#9c791d, #89223b);
}
```

## Atualização do Código

Atualizamos os arquivos `main.scss`, `_hero.scss` e `_event.scss` para usar as variáveis CSS criadas:

### `main.scss`

```scss
@use "hero";
@use "event";
@use "variables";
@use "components/infos_bar";
@use "components/buttons";

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: var(--text-primary-color);
    list-style: none;
    text-decoration: none;
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
@use "variables";

.hero {
    padding-block: 64px 100px;
    background-image: url(../images/fundo.png);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    .container {
        position: relative;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--bg-primary-color);
        opacity: 0.7;
    }

    &__logo {
        display: block;
        margin: 0 auto;
        height: 80px;
    }

    &__text {
        margin-block: 64px;
        font-size: 40px;
        line-height: 56px;
        text-align: center;
        font-weight: 700;
    }

    @media (max-width: 640px) {
        padding-block: 40px;

        &__logo {
            height: 40px;
        }

        &__text {
            font-size: 22px;
            line-height: 24px;
            margin-block: 24px;
        }
    }
}
```

### `_event.scss`

```scss
@use "variables";

.event {
    padding: 80px 0;

    &--frontend {
        background-image: var(--linear-gradient-01);
    }

    &--ux-ui {
        background-image: var(--linear-gradient-02);
    }

    &--data-science {
        background-image: var(--linear-gradient-03);
    }

    &--backend {
        background-image: var(--linear-gradient-04);
    }

    &--image-left {
        .container {
            flex-direction: row-reverse;
        }
    }

    .container {
        display: flex;
        gap: 40px;
    }

    &__image {
        max-width: 360px;
    }

    &__details {
        &__title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 16px;
        }

        &__description {
            line-height: 22px;
        }
    }

    @media (max-width: 640px) {
        .container {
            display: block;
        }

        &__image {
            width: 100%;
        }

        &__details {
            margin-right: 0;
            margin-bottom: 16px;
        }
    }
}
```

## Animações com AOS

Para dar vida à página, utilizamos a biblioteca AOS (Animate on Scroll). Adicionamos a seguinte configuração ao nosso HTML:

```html
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
```

Inicializamos a biblioteca no arquivo `main.js`:

```javascript
AOS.init()
```

## HTML Atualizado

No HTML, aplicamos as animações aos elementos da página, conforme o exemplo abaixo:

```html
<section class="event event--frontend">
    <div class="container" data-aos="fade-right">
        <div class="event__details">
            <h2 class="event__details__title">Front-end</h2>
            <p class="event__details__description">
                O EBAC Talks é um evento de tecnologia e para o front-end, tem como objetivo trazer conhecimento e novidades sobre o setor. Durante o evento, os participantes terão
                a oportunidade de aprender com especialistas da área, trocar experiências e se atualizar sobre as últimas tendências e tecnologias. Além disso, o EBAC Talks
                oferecerá promoções exclusivas de cursos para aqueles que desejam aprimorar suas habilidades em front-end. Não perca a chance de participar deste evento incrível e
                impulsionar sua carreira na área de tecnologia!
            </p>
        </div>
        <img class="event__image" src="./src/images/frontend.png" alt="front-end" />
    </div>
</section>

<section class="event event--ux-ui event--image-left">
    <div class="container" data-aos="fade-left">
        <div class="event__details">
            <h2 class="event__details__title">UX / UI</h2>
            <p class="event__details__description">
                O EBAC Talks é um evento de tecnologia com foco em design UX/UI, que tem como objetivo trazer conhecimento e novidades sobre o setor. Durante o evento, os
                participantes terão a oportunidade de aprender com especialistas da área, trocar experiências e se atualizar sobre as últimas tendências e tecnologias. Além do
                design UX/UI, o evento também abordará outras áreas relacionadas, oferecendo uma visão ampla e abrangente do setor. O EBAC Talks oferecerá promoções exclusivas de
                cursos para aqueles que desejam aprimorar suas habilidades em design UX/UI. Não perca a chance de participar deste evento incrível e impulsionar sua carreira na
                área de tecnologia!
            </p>
        </div>
        <img class="event__image" src="./src/images/ui-ux.png" alt="ui-ux" />
    </div>
</section>

<section class="event event--data-science">
    <div class="container" data-aos="fade-right">
        <div class="event__details">
            <h2 class="event__details__title">Data Science</h2>
            <p class="event__details__description">
                O EBAC Talks é um evento de tecnologia com foco em Data Science, que tem como objetivo trazer conhecimento e novidades sobre o setor. Durante o evento, os
                participantes terão a oportunidade de aprender com especialistas da área, trocar experiências e se atualizar sobre as últimas tendências e tecnologias. O evento
                abordará temas como análise de dados, aprendizado de máquina e inteligência artificial, oferecendo uma visão ampla e abrangente do setor. O EBAC Talks oferecerá
                promoções exclusivas de cursos para aqueles que desejam aprimorar suas habilidades em Data Science. Não perca a chance de participar deste evento incrível e
                impulsionar sua carreira na área de tecnologia!
            </p>
        </div>
        <img class="event__image" src="./src/images/data.png" alt="data-science" />
    </div>
</section>

<section class="event event--backend event--image-left">
    <div class="container" data-aos="fade-left">
        <div class="event__details">
            <h2 class="event__details__title">Back-end</h2>
            <p class="event__details__description">
                O EBAC Talks é um evento de tecnologia com foco em back-end, que tem como objetivo trazer conhecimento e novidades sobre o setor. Durante o evento, os participantes
                terão a oportunidade de aprender com especialistas da área, trocar experiências e se atualizar sobre as últimas tendências e tecnologias. O evento abordará temas
                como desenvolvimento de APIs, bancos de dados e arquitetura de sistemas, oferecendo uma visão ampla e abrangente do setor. O EBAC Talks oferecerá promoções
                exclusivas de cursos para aqueles que desejam aprimorar suas habilidades em back-end. Não perca a chance de participar deste evento incrível e impulsionar sua
                carreira na área de tecnologia!
            </p>
        </div>
        <img class="event__image" src="./src/images/backend.png" alt="back-end" />
    </div>
</section>
```

Aqui usamos os atributos

`data-aos="fade-right"` e `data-aos="fade-left"` para criar animações suaves ao rolar a página.
