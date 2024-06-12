## 📝 Aula 01: Conheça o JavaScript

### ✅ O que é JavaScript?

JavaScript é uma linguagem de programação amplamente utilizada para criar páginas web interativas. Originalmente desenvolvido como uma linguagem de script para navegadores, hoje ele é utilizado tanto no front-end quanto no back-end, possibilitando o desenvolvimento de aplicações web completas.

### ✅ Benefícios de Usar JavaScript

O uso do JavaScript traz diversos benefícios para o desenvolvimento web, incluindo a possibilidade de criar interfaces dinâmicas, validar formulários no lado do cliente e melhorar a experiência do usuário com interações em tempo real.

### ✅ Como Adicionar JavaScript em uma Página Web

Para adicionar JavaScript a uma página web, você pode incluir um bloco de código `<script>` diretamente no HTML ou referenciar um arquivo externo com a extensão `.js`. A seguir, mostramos ambas as abordagens.

#### Adicionando JavaScript Diretamente no HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de JavaScript</title>
  </head>
  <body>
    <h1>Olá, Mundo!</h1>
    <script>
      document.addEventListener("DOMContentLoaded", (event) => {
        alert("Página carregada com sucesso!")
      })
    </script>
  </body>
</html>
```

#### Adicionando JavaScript a partir de um Arquivo Externo

Crie um arquivo chamado `script.js` com o seguinte conteúdo:

```javascript
document.addEventListener("DOMContentLoaded", (event) => {
  alert("Página carregada com sucesso!")
})
```

Em seguida, referencie este arquivo no HTML:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de JavaScript</title>
    <script src="script.js" defer></script>
  </head>
  <body>
    <h1>Olá, Mundo!</h1>
  </body>
</html>
```

### ✅ Exemplos de Uso de JavaScript

Vamos considerar um exemplo prático onde utilizamos JavaScript para alterar o conteúdo de uma página e responder a eventos de clique.

#### Alterando o Conteúdo de uma Página

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de Alteração de Conteúdo</title>
    <script>
      document.addEventListener("DOMContentLoaded", (event) => {
        const heading = document.querySelector("h1")
        heading.textContent = "Conteúdo Alterado com JavaScript"
      })
    </script>
  </head>
  <body>
    <h1>Conteúdo Original</h1>
  </body>
</html>
```

#### Respondendo a Eventos de Clique

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de Evento de Clique</title>
    <script>
      document.addEventListener("DOMContentLoaded", (event) => {
        const button = document.querySelector("button")
        button.addEventListener("click", () => {
          alert("Botão clicado!")
        })
      })
    </script>
  </head>
  <body>
    <button>Clique em Mim!</button>
  </body>
</html>
```

### ✅ Por que Aprender JavaScript?

- **Interatividade**: JavaScript permite adicionar interatividade às páginas web, proporcionando uma experiência mais rica para os usuários.
- **Versatilidade**: Pode ser utilizado tanto no front-end quanto no back-end, com ferramentas como Node.js.
- **Popularidade**: JavaScript é uma das linguagens de programação mais populares do mundo, com uma vasta comunidade e muitos recursos de aprendizagem disponíveis.

[Material](./Conheça%20o%20JavaScript.pdf)
