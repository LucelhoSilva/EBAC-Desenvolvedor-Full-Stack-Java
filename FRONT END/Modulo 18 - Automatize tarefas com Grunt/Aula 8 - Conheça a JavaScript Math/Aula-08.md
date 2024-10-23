## 📝 Aula 08: Conheça a JavaScript Math

Nesta aula, vamos explorar a biblioteca `Math` do JavaScript, que fornece várias funções matemáticas úteis. Vamos nos concentrar em como gerar números aleatórios e arredondar números usando `Math.random()`, `Math.floor()`, `Math.ceil()`, e `Math.round()`.

### Gerar um Número Aleatório com Math.random()

Para gerar um número aleatório em JavaScript, usamos a função `Math.random()`, que retorna um número pseudo-aleatório entre 0 (inclusivo) e 1 (exclusivo).

### Arredondar Números em JavaScript

- `Math.floor()`: Arredonda um número para baixo. Exemplo:

  - `Math.floor(5.9)` retorna `5`
  - `Math.floor(5.1)` retorna `5`

- `Math.ceil()`: Arredonda um número para cima. Exemplo:

  - `Math.ceil(5.9)` retorna `6`
  - `Math.ceil(5.1)` retorna `6`

- `Math.round()`: Arredonda um número para o inteiro mais próximo. Se a parte decimal for 0.5 ou maior, arredonda para cima; caso contrário, arredonda para baixo. Exemplo:
  - `Math.round(5.5)` retorna `6`
  - `Math.round(5.4)` retorna `5`

### Exemplo Prático

Vamos usar essas funções para criar um sorteador de números. O usuário insere um número máximo, e o script gera um número aleatório entre 1 e o número máximo.

### HTML

Crie um arquivo `index.html` com o seguinte conteúdo:

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sorteador</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="./styles/main.css" />
  </head>
  <body>
    <main>
      <h1>Sorteador</h1>
      <form id="form-sorteador" action="">
        <div>
          <label for="numero-maximo">Número máximo</label>
          <input type="number" id="numero-maximo" required />
        </div>
        <button type="submit">Sortear número</button>
      </form>
      <div class="resultado" style="display: none;">
        <p>Resultado: <span id="resultado-valor"></span></p>
      </div>
    </main>
    <script src="./scripts/main.js"></script>
  </body>
</html>
```

### JavaScript

Crie um arquivo `main.js` na pasta `scripts` com o seguinte conteúdo:

```javascript
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("form-sorteador").addEventListener("submit", function (event) {
    event.preventDefault()
    let numeroMaximo = document.getElementById("numero-maximo").value
    numeroMaximo = parseInt(numeroMaximo)

    let numeroAleatorio = Math.random() * numeroMaximo
    numeroAleatorio = Math.floor(numeroAleatorio + 1)

    document.getElementById("resultado-valor").innerText = numeroAleatorio
    document.querySelector(".resultado").style.display = "block"
  })
})
```

### Resumo

Nesta aula, aprendemos a usar a biblioteca `Math` do JavaScript para gerar números aleatórios e arredondar números. Criamos um sorteador de números que usa `Math.random()` para gerar um número aleatório e `Math.floor()` para arredondá-lo para baixo, garantindo que o número gerado esteja entre 1 e o número máximo especificado pelo usuário.
