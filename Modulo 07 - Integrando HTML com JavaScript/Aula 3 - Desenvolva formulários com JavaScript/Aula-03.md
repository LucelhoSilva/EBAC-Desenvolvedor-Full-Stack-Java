## 📝 Aula 03: Desenvolva Formulários com JavaScript

### ✅ Introdução

Os formulários são elementos essenciais nas páginas web, permitindo a entrada e submissão de dados pelos usuários. JavaScript pode ser usado para melhorar a interatividade e a validação dos formulários, tornando a experiência do usuário mais dinâmica e responsiva.

### ✅ Estrutura Básica de um Formulário HTML

Antes de trabalhar com JavaScript, é importante entender a estrutura básica de um formulário HTML.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formulário Básico</title>
  </head>
  <body>
    <form id="meuForm">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" name="nome" required />
      <br />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <br />
      <button type="submit">Enviar</button>
    </form>
  </body>
</html>
```

### ✅ Seleção de Elementos do Formulário

Para manipular os elementos do formulário com JavaScript, precisamos primeiro selecioná-los.

```javascript
let formulario = document.getElementById("meuForm")
let campoNome = document.getElementById("nome")
let campoEmail = document.getElementById("email")
```

### ✅ Manipulação de Eventos do Formulário

Os eventos são fundamentais para interagir com os formulários. O evento mais comum é o evento de submissão (`submit`).

#### Prevenir o Comportamento Padrão

Para evitar que a página seja recarregada ao enviar o formulário, podemos usar o método `preventDefault()`.

```javascript
formulario.addEventListener("submit", function (event) {
  event.preventDefault()
  // Ações a serem executadas ao enviar o formulário
})
```

### ✅ Validação de Formulário

A validação do formulário garante que os dados inseridos pelo usuário atendam aos requisitos antes de serem enviados.

#### Validação Simples com JavaScript

```javascript
formulario.addEventListener("submit", function (event) {
  event.preventDefault()

  let nome = campoNome.value.trim()
  let email = campoEmail.value.trim()

  if (nome === "" || email === "") {
    alert("Todos os campos são obrigatórios!")
  } else {
    console.log("Nome:", nome)
    console.log("Email:", email)
  }
})
```

### ✅ Manipulação de Valores do Formulário

Podemos manipular os valores dos campos do formulário usando JavaScript para criar uma experiência mais interativa.

#### Alterar Valor de um Campo

```javascript
campoNome.value = "João"
```

#### Obter Valor de um Campo

```javascript
let nomeUsuario = campoNome.value
console.log(nomeUsuario)
```

### ✅ Exemplo Completo

A seguir, um exemplo completo que inclui a seleção, manipulação e validação de um formulário com JavaScript.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formulário com Validação</title>
    <style>
      .erro {
        color: red;
        font-size: 0.9em;
      }
    </style>
  </head>
  <body>
    <form id="meuForm">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" name="nome" required />
      <br />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <br />
      <button type="submit">Enviar</button>
      <p id="mensagemErro" class="erro"></p>
    </form>

    <script>
      let formulario = document.getElementById("meuForm")
      let campoNome = document.getElementById("nome")
      let campoEmail = document.getElementById("email")
      let mensagemErro = document.getElementById("mensagemErro")

      formulario.addEventListener("submit", function (event) {
        event.preventDefault()
        mensagemErro.textContent = "" // Limpa mensagem de erro

        let nome = campoNome.value.trim()
        let email = campoEmail.value.trim()

        if (nome === "" || email === "") {
          mensagemErro.textContent = "Todos os campos são obrigatórios!"
        } else {
          console.log("Nome:", nome)
          console.log("Email:", email)
          // Aqui você pode enviar os dados via AJAX ou realizar outras ações
        }
      })
    </script>
  </body>
</html>
```

[Material](./Desenvolva%20formulários%20com%20JavaScript.pdf)
