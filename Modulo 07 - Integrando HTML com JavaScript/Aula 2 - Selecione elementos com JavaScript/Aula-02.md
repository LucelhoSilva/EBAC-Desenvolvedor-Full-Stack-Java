## 📝 Aula 2: Selecione Elementos com JavaScript

### ✅ Introdução à Seleção de Elementos

Selecionar elementos no DOM (Document Object Model) é uma tarefa fundamental em JavaScript. Através da seleção de elementos, podemos manipulá-los, adicionar interatividade e dinamismo às páginas web. Existem diversos métodos em JavaScript para selecionar elementos do DOM, cada um adequado para diferentes necessidades.

### ✅ Métodos de Seleção de Elementos

#### `getElementById`

O método `getElementById` seleciona um elemento com base no seu ID. IDs devem ser únicos dentro de uma página HTML.

```javascript
let elemento = document.getElementById("meuId")
console.log(elemento)
```

#### `getElementsByClassName`

O método `getElementsByClassName` seleciona todos os elementos com uma determinada classe. Ele retorna uma coleção HTML (HTMLCollection), que é uma lista dinâmica dos elementos correspondentes.

```javascript
let elementos = document.getElementsByClassName("minhaClasse")
console.log(elementos)
```

#### `getElementsByTagName`

O método `getElementsByTagName` seleciona todos os elementos com uma determinada tag (por exemplo, `div`, `p`, `span`). Ele também retorna uma coleção HTML.

```javascript
let paragrafos = document.getElementsByTagName("p")
console.log(paragrafos)
```

#### `querySelector`

O método `querySelector` seleciona o primeiro elemento que corresponde a um seletor CSS fornecido. É muito útil para selecionar elementos de forma mais específica e flexível.

```javascript
let elemento = document.querySelector(".meuElemento")
console.log(elemento)
```

#### `querySelectorAll`

O método `querySelectorAll` seleciona todos os elementos que correspondem a um seletor CSS. Ele retorna uma NodeList, que é uma lista estática dos elementos correspondentes.

```javascript
let elementos = document.querySelectorAll(".meusElementos")
console.log(elementos)
```

### ✅ Exemplos Práticos

#### Selecionando e Alterando o Conteúdo de um Elemento

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de Seleção</title>
  </head>
  <body>
    <div id="meuId">Conteúdo original</div>
    <script>
      let elemento = document.getElementById("meuId")
      elemento.textContent = "Conteúdo alterado"
    </script>
  </body>
</html>
```

#### Selecionando e Alterando o Estilo de Elementos com Classe

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de Seleção</title>
    <style>
      .minhaClasse {
        color: blue;
      }
    </style>
  </head>
  <body>
    <p class="minhaClasse">Parágrafo 1</p>
    <p class="minhaClasse">Parágrafo 2</p>
    <script>
      let elementos = document.getElementsByClassName("minhaClasse")
      for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.color = "red"
      }
    </script>
  </body>
</html>
```

#### Selecionando Todos os Parágrafos e Alterando o Texto

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de Seleção</title>
  </head>
  <body>
    <p>Parágrafo 1</p>
    <p>Parágrafo 2</p>
    <p>Parágrafo 3</p>
    <script>
      let paragrafos = document.getElementsByTagName("p")
      for (let i = 0; i < paragrafos.length; i++) {
        paragrafos[i].textContent = "Texto alterado"
      }
    </script>
  </body>
</html>
```

#### Usando `querySelector` para Selecionar um Elemento Específico

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de Seleção</title>
  </head>
  <body>
    <div class="container">
      <p class="meuParagrafo">Parágrafo dentro do container</p>
    </div>
    <script>
      let elemento = document.querySelector(".container .meuParagrafo")
      elemento.textContent = "Texto alterado com querySelector"
    </script>
  </body>
</html>
```

#### Usando `querySelectorAll` para Selecionar Múltiplos Elementos

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo de Seleção</title>
  </head>
  <body>
    <p class="meusParagrafos">Parágrafo 1</p>
    <p class="meusParagrafos">Parágrafo 2</p>
    <p class="meusParagrafos">Parágrafo 3</p>
    <script>
      let elementos = document.querySelectorAll(".meusParagrafos")
      elementos.forEach(function (elemento) {
        elemento.textContent = "Texto alterado com querySelectorAll"
      })
    </script>
  </body>
</html>
```

### ✅ Por que Aprender a Selecionar Elementos?

- **Manipulação de DOM**: Permite a manipulação e atualização dinâmica do conteúdo da página.
- **Interatividade**: Facilita a adição de interatividade e resposta a eventos do usuário.
- **Desenvolvimento Dinâmico**: Essencial para o desenvolvimento de aplicações web dinâmicas e responsivas.

Dominar a seleção de elementos no DOM é crucial para qualquer desenvolvedor web que deseja criar páginas interativas e dinâmicas usando JavaScript.

[Material](./Selecione%20elementos%20com%20JavaScript.pdf)
