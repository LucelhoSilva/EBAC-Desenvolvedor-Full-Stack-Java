# 📝 Aula 4: Insira a imagem de destaque

Nesta aula, aprendemos a inserir imagens responsivas na landing page, aplicar gradientes de fundo em elementos HTML usando CSS e melhorar a responsividade do layout.

## Objetivos

-   Inserir imagens responsivas na landing page;
-   Aplicar gradientes de fundo em elementos HTML usando CSS;
-   Melhorar a responsividade do layout da landing page.

## Estrutura HTML

Adicionamos a seguinte seção à nossa landing page:

```html
<section class="event">
    <div class="container">
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
```

## Estilização com CSS

Criamos o arquivo `_event.scss` dentro da pasta `styles`, com o seguinte conteúdo:

```scss
.event {
    padding: 80px 0;
    background-image: linear-gradient(#1b6ca7, #442bdb);

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

## Resumo

Nesta aula, aprimoramos nossa landing page ao adicionar uma seção visualmente atraente com um gradiente de fundo e uma imagem destacada, que se adapta a diferentes tamanhos de tela, proporcionando uma experiência responsiva para o usuário.
