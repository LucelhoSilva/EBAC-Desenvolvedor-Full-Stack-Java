## 📝 Aula 04: Adicione Eventos a Elementos HTML

### ✅ O que são Eventos?

Eventos são ações ou ocorrências que acontecem no navegador que podem ser capturadas e manipuladas usando JavaScript. Alguns exemplos comuns de eventos incluem cliques do mouse, pressionamentos de teclas, envio de formulários e carregamento de páginas.

### ✅ Como Adicionar Eventos a Elementos HTML

Para adicionar eventos a elementos HTML com JavaScript, você pode usar os métodos `addEventListener` e atributos HTML como `onclick`. A abordagem recomendada é usar `addEventListener`, pois oferece mais flexibilidade e separa a lógica JavaScript do HTML.

#### Usando `addEventListener`

```javascript
let botao = document.getElementById("meuBotao")
botao.addEventListener("click", function () {
  alert("Botão clicado!")
})
```

#### Usando Atributos HTML

```html
<button id="meuBotao" onclick="alert('Botão clicado!')">Clique-me</button>
```

### ✅ Tipos Comuns de Eventos

- **click**: Disparado quando um elemento é clicado.
- **mouseover**: Disparado quando o ponteiro do mouse passa sobre um elemento.
- **mouseout**: Disparado quando o ponteiro do mouse deixa um elemento.
- **keydown**: Disparado quando uma tecla é pressionada.
- **submit**: Disparado quando um formulário é enviado.
- **load**: Disparado quando a página é carregada.

### ✅ Exemplos de Adição de Eventos

#### Evento de Clique

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Evento de Clique</title>
  </head>
  <body>
    <button id="meuBotao">Clique-me</button>
    <script>
      let botao = document.getElementById("meuBotao")
      botao.addEventListener("click", function () {
        alert("Botão clicado!")
      })
    </script>
  </body>
</html>
```

#### Evento de Mouseover

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Evento de Mouseover</title>
    <style>
      .destaque {
        color: red;
      }
    </style>
  </head>
  <body>
    <p id="meuParagrafo">Passe o mouse sobre este texto.</p>
    <script>
      let paragrafo = document.getElementById("meuParagrafo")
      paragrafo.addEventListener("mouseover", function () {
        paragrafo.classList.add("destaque")
      })
      paragrafo.addEventListener("mouseout", function () {
        paragrafo.classList.remove("destaque")
      })
    </script>
  </body>
</html>
```

#### Evento de Keydown

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Evento de Keydown</title>
  </head>
  <body>
    <input type="text" id="meuInput" placeholder="Digite algo..." />
    <script>
      let input = document.getElementById("meuInput")
      input.addEventListener("keydown", function (event) {
        console.log("Tecla pressionada: " + event.key)
      })
    </script>
  </body>
</html>
```

### ✅ Remover Eventos

Também é possível remover eventos usando o método `removeEventListener`.

```javascript
let botao = document.getElementById("meuBotao")

function cliqueHandler() {
  alert("Botão clicado!")
}

botao.addEventListener("click", cliqueHandler)

// Para remover o evento
botao.removeEventListener("click", cliqueHandler)
```

### ✅ Eventos de Formulário

Formulários frequentemente usam eventos para validação e submissão de dados.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Evento de Submissão de Formulário</title>
  </head>
  <body>
    <form id="meuForm">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" name="nome" required />
      <button type="submit">Enviar</button>
    </form>
    <script>
      let formulario = document.getElementById("meuForm")
      formulario.addEventListener("submit", function (event) {
        event.preventDefault() // Evita o envio do formulário
        let nome = document.getElementById("nome").value
        alert("Formulário enviado! Nome: " + nome)
      })
    </script>
  </body>
</html>
```

[Material](./Adicione%20eventos%20a%20elementos%20HTML.pdf)
