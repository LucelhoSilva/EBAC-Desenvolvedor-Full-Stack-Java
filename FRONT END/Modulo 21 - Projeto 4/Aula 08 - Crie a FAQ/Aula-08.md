# 📝 Aula 8: Crie a FAQ

## Objetivos

- Compreender a estrutura e os componentes de uma seção de perguntas frequentes (FAQ);
- Aprender a aplicar transições CSS para melhorar a experiência do usuário;
- Praticar a criação de componentes reutilizáveis.

## Estrutura do Projeto

Nesta aula, vamos criar uma seção de Perguntas Frequentes (FAQ) que inclui transições suaves para mostrar e esconder respostas. Também vamos aprender a organizar e estilizar os componentes de forma reutilizável.

## Criando a Seção FAQ

### Passo 1: Adicionando a Seção ao HTML

No arquivo `index.html`, adicionamos a seção FAQ:

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

    <!-- Seção de FAQ -->
    <section class="faq">
      <h2 class="title">Perguntas frequentes</h2>
      <ul class="faq__questions">
        <li class="faq__questions__item">
          <div class="faq__questions__item__question" data-faq-question>O que está incluído no Disney+?</div>
          <div class="faq__questions__item__resposta text--big">
            O Disney+ oferece:
            <ul class="text">
              <li>Experiência de entretenimento exclusiva.</li>
              <li>As melhores histórias da Disney, Pixar, Marvel, Star Wars e National Geographic, tudo em um só lugar.</li>
              <li>Groupwatch: assista junto com amigos ou familiares, mesmo separados.</li>
              <li>Downloads ilimitados em até 10 dispositivos compatíveis.</li>
              <li>Mais de 300 títulos em 4K UHD e HDR.</li>
              <li>A possibilidade de assistir em até 4 dispositivos compatíveis simultaneamente sem custo adicional.</li>
              <li>IMAX Enhanced: disponível para alguns títulos da Marvel em dispositivos compatíveis com o Disney+.</li>
            </ul>
          </div>
        </li>
        <li class="faq__questions__item">
          <div class="faq__questions__item__question" data-faq-question>Já tem o Disney+ ou o Star+ e quer o Combo+?</div>
          <div class="faq__questions__item__resposta text--big">
            Ao assinar o Combo+:
            <ul class="text">
              <li>O valor da sua assinatura existente (anual ou mensal) será descontado do preço do Combo+.</li>
              <li>Se você assina o plano mensal, o valor que você paga mensalmente será descontado do preço do Combo+.</li>
              <li>Se você assina o plano anual, dividiremos o valor que você já pagou em 12 vezes e descontaremos esse valor do preço do Combo+ mensalmente.</li>
              <li>Você vai receber um e-mail com os valores detalhados assim que finalizar o pagamento.</li>
              <li>Lembre-se: você pode cancelar a assinatura quando quiser.</li>
            </ul>
            No momento, apenas a assinatura mensal do Combo+ está disponível.
          </div>
        </li>
        <li class="faq__questions__item">
          <div class="faq__questions__item__question" data-faq-question>Quais formas de pagamento posso utilizar?</div>
          <div class="faq__questions__item__resposta text--big">
            Você pode utilizar: cartão de débito, cartão de crédito, PayPal, Mercado Pago, e também empresas parceiras como Google Play Store, App Store da Apple; Mercado Livre e
            provedores locais de TV, telefonia e internet.
          </div>
        </li>
        <li class="faq__questions__item">
          <div class="faq__questions__item__question" data-faq-question>Como posso ver conteúdo com classificação indicativa até 16 e 18?</div>
          <div class="faq__questions__item__resposta text--big">
            Para poder acessar o catálogo completo que inclui conteúdo com classificação indicativa até 16 e 18, todos os usuários do Disney+ na América Latina devem atualizar as
            configurações de controle parental do perfil. É possível restringir o conteúdo de cada perfil e também adicionar um PIN de bloqueio. Os usuários que preferirem manter a
            configuração atual vão continuar aproveitando o Disney+ com a classificação indicativa até 14, podendo alterá-la a qualquer momento em "Editar Perfis".
          </div>
        </li>
      </ul>
    </section>
  </body>
</html>
```

### Passo 2: Estilizando a Seção FAQ com SCSS

Na pasta `styles`, criamos um arquivo chamado `_faq.scss` para adicionar os estilos da seção FAQ:

```scss
@use "configs/variables";

.faq {
  padding: 5.6vw;

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  &__questions {
    &__item {
      background-color: variables.$bg-second-color;
      margin-bottom: 1rem;

      &__question {
        color: variables.$text-second-color;
        font-size: 1.25rem;
        padding: 1.5rem;
        display: block;
        cursor: pointer;
        position: relative;

        &::after {
          content: "+";
          position: absolute;
          top: 0;
          right: 1.5rem;
          height: 100%;
          display: flex;
          align-items: center;
          font-size: 2.5rem;
        }
      }

      &__resposta {
        height: 0;
        overflow: hidden;
        padding: 0 1.5rem;
        transition: height 0.5s ease;

        ul {
          margin-block: 1rem;
          padding-left: 2.5rem;

          li {
            margin-top: 1rem;
            list-style: disc;
          }
        }
      }

      &--is-open {
        .faq__questions__item__question::after {
          content: "-";
        }

        .faq__questions__item__resposta {
          height: auto;
          padding-bottom: 1.5rem;
          transition: height 0.5s ease;
        }
      }
    }
  }
}
```

### Passo 3: Adicionando a Funcionalidade de Mostrar/Esconder Respostas com JavaScript

Vamos adicionar a funcionalidade de abrir e fechar as respostas das perguntas frequentes:

```js
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-tab-button]")
  const questions = document.querySelectorAll("[data-faq-question]")

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

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", openOrCloseAnswer)
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

const openOrCloseAnswer = (element) => {
  const classItem = "faq__questions__item--is-open"
  const parentElement = element.target.parentNode
  parentElement.classList.toggle(classItem)
}
```

### Passo 4: Integrando os Estilos no `main.scss`

Vamos importar os estilos da seção FAQ para o `main.scss`:

```scss
@use "./faq";
```

### Passo 5: Controle de Versão com Git

Após adicionar a seção FAQ e configurar os estilos e a funcionalidade, vamos commitar as mudanças no Git para manter o controle de versão:

```sh
git add .
git commit -m "Adiciona seção FAQ com estilos e funcionalidade de mostrar/esconder respostas"
```

### Conclusão

Nesta aula, aprendemos a criar uma seção de Perguntas Frequentes (FAQ) com transições suaves para mostrar e esconder respostas.
