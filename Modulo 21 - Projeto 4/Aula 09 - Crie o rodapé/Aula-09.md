# 📝 Aula 9: Crie o Rodapé

## Objetivos

- Compreender a estrutura e os elementos de um rodapé web;
- Aprender a estilizar elementos de um rodapé com CSS;
- Praticar o uso de variáveis CSS para gerenciar estilos.

## Estrutura do Projeto

Nesta aula, vamos criar um rodapé que inclui links importantes e informações sobre o site. Vamos aprender a organizar e estilizar esses componentes utilizando SCSS, aplicando variáveis para gerenciar estilos de forma eficiente.

## Criando o Rodapé

### Passo 1: Adicionando o Rodapé ao HTML

No arquivo `index.html`, adicionamos a seção de rodapé:

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

    <!-- Rodapé -->
    <footer class="footer">
      <div class="footer__container">
        <img class="footer__logo" src="./dist/images/disneyplus.svg" alt="Disney+" />
        <ul class="footer__links">
          <li class="footer__links__item">
            <div class="language-selector">
              <img src="./dist/images/icones/globe.svg" alt="globo do mundo" />
              <select title="languages">
                <option>English</option>
                <option selected>Português</option>
              </select>
            </div>
          </li>
          <li class="footer__links__item">
            <a href="#" class="text--small">Termos e condições de Uso</a>
          </li>
          <li class="footer__links__item">
            <a href="#" class="text--small">Política de privacidade</a>
          </li>
          <li class="footer__links__item">
            <a href="#" class="text--small">Proteção de Dados no Brasil</a>
          </li>
          <li class="footer__links__item">
            <a href="#" class="text--small">Anúncios personalizados</a>
          </li>
          <li class="footer__links__item">
            <a href="#" class="text--small">Dispositivos compatíveis</a>
          </li>
          <li class="footer__links__item">
            <a href="#" class="text--small">Ajuda</a>
          </li>
          <li class="footer__links__item">
            <a href="#" class="text--small">Sobre o Disney+</a>
          </li>
        </ul>
        <p class="text--small">® 2023 Disney, Disney+ e The Walt Disney Company. Todos os direitos reservados. Serviço de assinatura paga. Conteúdo sujeito a disponibilidade.</p>
        <p class="text--small">
          Disney+ é um serviço pago, baseado em assinatura e sujeito a termos e condições. O serviço Disney+ é comercializado por The Walt Disney Company (Brasil) Ltda., World
          Trade Center, Av. Das Nações Unidas, 12.551, 12.555, 12.559, Piso 10, São Paulo/SP – CEP 04578-903, Brasil e CNPJ/M 73.042.962/0004-20
        </p>
      </div>
    </footer>
  </body>
</html>
```

### Passo 2: Estilizando o Rodapé com SCSS

Na pasta `styles`, criamos um arquivo chamado `_footer.scss` para adicionar os estilos do rodapé:

```scss
@use "configs/variables";

.footer {
  padding: 1.625rem 0.5rem;

  &__container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 1.25rem;
  }

  &__logo {
    width: 80px;
    margin: 0 auto 0.625rem;
  }

  &__links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;

    &__item {
      display: inline-block;

      a {
        text-decoration: none;
        padding: 0.5rem 1rem;
        display: block;
        color: variables.$text-primary-color;

        &:hover {
          color: variables.$text-second-color;
        }
      }
    }
  }

  p {
    margin-bottom: 1rem;
    color: variables.$text-primary-color;
  }
}

.language-selector {
  display: flex;
  align-items: center;
  margin-right: 1rem;

  img {
    width: 18px;
    height: 18px;
    margin-right: 0.5rem;
  }

  select {
    background-color: transparent;
    border: none;
    color: variables.$text-primary-color;

    &:hover {
      color: variables.$text-second-color;
    }

    option {
      color: variables.$bg-primary-color;
    }
  }
}
```

### Passo 3: Integrando os Estilos no `main.scss`

Vamos importar os estilos do rodapé para o `main.scss`:

```scss
@use "./footer";
```

### Passo 4: Controle de Versão com Git

Após adicionar a seção do rodapé e configurar os estilos, vamos commitar as mudanças no Git para manter o controle de versão:

```sh
git add .
git commit -m "Adiciona rodapé com estilos e links importantes"
```

### Conclusão

Nesta aula, aprendemos a criar e estilizar um rodapé para um site, utilizando variáveis CSS para gerenciar estilos de forma eficiente.
