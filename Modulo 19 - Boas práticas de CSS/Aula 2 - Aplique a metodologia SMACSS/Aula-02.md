# 📝 Aula 2: Aplique a metodologia SMACSS

Nesta aula, vamos explorar a metodologia SMACSS (Scalable and Modular Architecture for CSS) e como ela pode ser aplicada para organizar o código CSS de forma mais eficiente e padronizada. A abordagem SMACSS categoriza os estilos em cinco grupos principais: Base, Layout, Module, State e Theme. Isso facilita a manutenção e a escalabilidade dos projetos.

## Princípios Fundamentais da Metodologia SMACSS

### Categorias SMACSS

1. **Base**: Estilos globais aplicados a elementos HTML.
2. **Layout**: Estilos que definem a estrutura principal da página.
3. **Module**: Estilos aplicados a componentes específicos.
4. **State**: Estilos que representam diferentes estados dos componentes.
5. **Theme**: Estilos para variações temáticas do site.

### Estrutura do Projeto

Criamos um arquivo `index.html` e organizamos o CSS em diferentes arquivos, seguindo as diretrizes SMACSS.

### Exemplo de Projeto

#### Arquivo HTML

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./smacss/base.css" />
    <link rel="stylesheet" href="./smacss/layout.css" />
    <link rel="stylesheet" href="./smacss/module.css" />
    <link rel="stylesheet" href="./smacss/tema-a.css" />
    <link rel="stylesheet" href="./smacss/tema-b.css" />
  </head>

  <body class="tema-a">
    <div id="header">
      <div class="container">
        <h1 class="title">Nome do site</h1>
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Produtos</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="container">
      <div class="accordion">
        <header class="accordion-header">Nome do acoordion</header>
        <p class="accordion-content">Conteudo</p>
      </div>
    </div>

    <footer>
      <div class="container">
        <div class="mensagem mensagem-is-error">
          <h5 class="mensagem-titulo">Atenção</h5>
          <p class="mensagem-conteudo">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quis nihil optio, architecto nostrum quae magnam iusto similique at ad consectetur dolorem voluptate
            placeat aliquam voluptas itaque quam id. Aperiam.
          </p>
        </div>
      </div>
    </footer>

    <script>
      const accordions = document.querySelectorAll(".accordion-header")
      for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function (evento) {
          if (evento.target.parentNode.classList.contains("is_open")) {
            evento.target.parentNode.classList.remove("is_open")
          } else {
            evento.target.parentNode.classList.add("is_open")
          }
        })
      }
    </script>
  </body>
</html>
```

#### Arquivo `base.css`

```css
body {
  font-family: Arial, Helvetica, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

#### Arquivo `layout.css`

```css
.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

#header > .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#header li {
  display: inline;
  margin-left: 8px;
}
```

#### Arquivo `module.css`

```css
.title {
  font-size: 48px;
}

.mensagem {
  padding: 8px;
  border: 1px solid #333;
  border-radius: 8px;
}

.mensagem-titulo {
  font-size: 18px;
}

.mensagem-conteudo {
  font-size: 14px;
}

.mensagem-is-error {
  border-color: red;
  background-color: rgb(255, 226, 226);
  color: red;
}

.accordion {
  border: 1px solid #000;
}

.accordion-header {
  padding: 8px;
  cursor: pointer;
}

.accordion-content {
  padding: 8px;
  border-top: 1px solid #eee;
  display: none;
}

.accordion.is_open .accordion-content {
  display: block;
}
```

#### Arquivo `tema-a.css`

```css
.tema-a #header {
  background-color: red;
}
```

#### Arquivo `tema-b.css`

```css
.tema-b #header {
  background-color: greenyellow;
}
```

### Conclusão

A metodologia SMACSS ajuda a estruturar o CSS de maneira modular e escalável, facilitando a manutenção e a evolução do projeto. Seguindo essa abordagem, conseguimos criar estilos reutilizáveis e flexíveis, melhorando a organização e a eficiência do código CSS.
