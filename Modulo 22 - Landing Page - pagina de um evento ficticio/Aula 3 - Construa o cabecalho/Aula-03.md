# 📝 Aula 3: Construa o Cabeçalho

## Objetivos da Aula

-   **Estrutura e Organização do Cabeçalho:** Aprender a estruturar e organizar o cabeçalho da landing page de acordo com as melhores práticas de design.
-   **Domínio de Estilos CSS:** Aplicar estilos CSS específicos para o cabeçalho, seguindo o design especificado.
-   **Responsividade:** Tornar o cabeçalho totalmente responsivo, garantindo uma boa experiência de usuário em diferentes dispositivos.

## Estrutura HTML Criada

Nesta aula, você desenvolveu a barra de informações do cabeçalho com o seguinte código HTML:

```html
<div class="infos-bar">
    <ul class="infos-bar__infos">
        <li class="infos-bar__infos__item">
            <b>Localização</b>
            Allianz Parque - Barra Funda - São Paulo
        </li>
        <li class="infos-bar__infos__item">
            <b>Preço</b>
            A partir de R$ 120,00
        </li>
        <li class="infos-bar__infos__item">
            <b>Quando</b>
            12/12/2023 às 19hs
        </li>
    </ul>
    <a href="#" class="button button--primary"> Garanta sua vaga </a>
</div>
```

## Estilização com SCSS

A barra de informações do cabeçalho foi estilizada para ser responsiva e visualmente atraente.

### `_infos_bar.scss`

```scss
.infos-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    background-color: #fff;

    &__infos {
        display: flex;
        gap: 40px;

        &__item {
            font-size: 14px;
            color: #000;

            b {
                font-size: 18px;
                color: #000;
                display: block;
            }
        }
    }

    @media (max-width: 640px) {
        display: block;

        &__infos {
            display: block;

            &__item {
                margin-bottom: 24px;
            }
        }
    }

    @media (max-width: 1024px) {
        &__infos {
            gap: 16px;
        }
    }
}
```

### `_buttons.scss`

Para a estilização dos botões, foi criado o arquivo `_buttons.scss`, que contém estilos reutilizáveis para os botões da página.

```scss
.button {
    padding: 12px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;

    &--primary {
        color: #fff;
        background-color: #4f24c3;
    }

    @media (max-width: 640px) {
        display: block;
        width: 100%;
    }
}
```

## Estrutura de Pastas

Os estilos foram organizados em uma estrutura de pastas dentro da pasta `styles`, como mostrado abaixo:

```
styles/
│
├── components/
│   ├── _infos_bar.scss
│   └── _buttons.scss
├── main.scss
└── ... (outros arquivos)
```
