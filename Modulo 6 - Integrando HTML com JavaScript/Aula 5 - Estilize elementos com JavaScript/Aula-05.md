## 📝 Aula 05: Estilize Elementos com JavaScript

### ✅ Introdução

Estilizar elementos diretamente com JavaScript permite que você altere dinamicamente a aparência de uma página web em resposta a ações do usuário ou outros eventos. Isso é útil para criar interfaces interativas e melhorar a experiência do usuário.

### ✅ Acesso e Manipulação de Estilos

Você pode acessar e modificar os estilos de um elemento usando a propriedade `style` do elemento em questão. A propriedade `style` permite definir valores CSS diretamente em elementos HTML.

#### Exemplo Básico

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Estilizar com JavaScript</title>
  </head>
  <body>
    <div id="meuElemento">Texto do meu elemento</div>
    <button id="botaoEstilo">Mudar Estilo</button>
    <script>
      let elemento = document.getElementById("meuElemento")
      let botao = document.getElementById("botaoEstilo")

      botao.addEventListener("click", function () {
        elemento.style.color = "blue"
        elemento.style.backgroundColor = "yellow"
        elemento.style.fontSize = "20px"
      })
    </script>
  </body>
</html>
```

### ✅ Propriedades de Estilo

#### Propriedades CSS em JavaScript

Em JavaScript, as propriedades CSS são escritas em camelCase em vez de kebab-case. Por exemplo:

- `background-color` em CSS torna-se `backgroundColor` em JavaScript.
- `font-size` em CSS torna-se `fontSize` em JavaScript.

#### Definindo Múltiplas Propriedades

Você pode definir múltiplas propriedades de estilo diretamente:

```javascript
elemento.style.color = "blue"
elemento.style.backgroundColor = "yellow"
elemento.style.fontSize = "20px"
```

#### Acesso a Estilos Computados

Para acessar os estilos computados de um elemento (os estilos aplicados após todas as folhas de estilo terem sido processadas), você pode usar `getComputedStyle`.

```javascript
let estilos = getComputedStyle(elemento)
console.log(estilos.color) // Cor aplicada ao elemento
```

### ✅ Exemplo de Alteração Dinâmica de Estilo

#### Mudança de Cor ao Passar o Mouse

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Estilizar com JavaScript</title>
    <style>
      .destaque {
        color: red;
      }
    </style>
  </head>
  <body>
    <p id="paragrafo">Passe o mouse sobre este texto.</p>
    <script>
      let paragrafo = document.getElementById("paragrafo")

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

### ✅ Usando Classes para Estilização

Adicionar e remover classes com JavaScript é uma maneira eficiente de alterar estilos, mantendo o CSS separado da lógica JavaScript.

#### Adicionar e Remover Classes

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Estilizar com JavaScript</title>
    <style>
      .ativo {
        background-color: yellow;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <button id="botaoToggle">Toggle Estilo</button>
    <div id="meuDiv">Este é um div.</div>
    <script>
      let botaoToggle = document.getElementById("botaoToggle")
      let meuDiv = document.getElementById("meuDiv")

      botaoToggle.addEventListener("click", function () {
        meuDiv.classList.toggle("ativo")
      })
    </script>
  </body>
</html>
```

### ✅ Exemplo de Animação com JavaScript

Você também pode criar animações simples manipulando os estilos com JavaScript.

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animar com JavaScript</title>
    <style>
      #caixa {
        width: 100px;
        height: 100px;
        background-color: blue;
        position: relative;
      }
    </style>
  </head>
  <body>
    <button id="botaoMover">Mover Caixa</button>
    <div id="caixa"></div>
    <script>
      let botaoMover = document.getElementById("botaoMover")
      let caixa = document.getElementById("caixa")

      botaoMover.addEventListener("click", function () {
        let pos = 0
        let id = setInterval(frame, 5)

        function frame() {
          if (pos == 350) {
            clearInterval(id)
          } else {
            pos++
            caixa.style.left = pos + "px"
          }
        }
      })
    </script>
  </body>
</html>
```

[Material](./Estilize%20elementos%20com%20JavaScript.pdf)
