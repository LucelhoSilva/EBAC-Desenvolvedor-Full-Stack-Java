## 📝 Aula 01: Documente HTML com DOM

### ✅ O que é o DOM?

O DOM (Document Object Model) é uma interface de programação que permite aos desenvolvedores acessar e manipular documentos HTML e XML como uma estrutura de árvore. Cada elemento, atributo e texto no documento é representado como um nó no DOM, permitindo que o JavaScript interaja e altere a estrutura e o conteúdo da página dinamicamente.

### ✅ Como Acessar Elementos do DOM

Para acessar elementos do DOM em JavaScript, podemos usar diversos métodos:

#### `getElementById`

Seleciona um elemento com base no seu ID.

```javascript
let elemento = document.getElementById("meuId")
console.log(elemento)
```

#### `getElementsByClassName`

Seleciona todos os elementos com uma determinada classe. Retorna uma coleção HTML.

```javascript
let elementos = document.getElementsByClassName("minhaClasse")
console.log(elementos)
```

#### `getElementsByTagName`

Seleciona todos os elementos com uma determinada tag. Retorna uma coleção HTML.

```javascript
let paragrafos = document.getElementsByTagName("p")
console.log(paragrafos)
```

#### `querySelector`

Seleciona o primeiro elemento que corresponde a um seletor CSS.

```javascript
let elemento = document.querySelector(".meuElemento")
console.log(elemento)
```

#### `querySelectorAll`

Seleciona todos os elementos que correspondem a um seletor CSS. Retorna uma NodeList.

```javascript
let elementos = document.querySelectorAll(".meusElementos")
console.log(elementos)
```

### ✅ Manipulação de Elementos do DOM

#### Alterar Conteúdo de Texto

```javascript
let elemento = document.getElementById("meuId")
elemento.textContent = "Novo conteúdo de texto"
```

#### Alterar HTML Interno

```javascript
let elemento = document.getElementById("meuId")
elemento.innerHTML = "<strong>Conteúdo em negrito</strong>"
```

#### Alterar Estilos

```javascript
let elemento = document.getElementById("meuId")
elemento.style.color = "red"
elemento.style.fontSize = "20px"
```

#### Adicionar e Remover Classes

```javascript
let elemento = document.getElementById("meuId")
elemento.classList.add("novaClasse")
elemento.classList.remove("outraClasse")
```

### ✅ Criar e Inserir Elementos no DOM

#### Criar um Novo Elemento

```javascript
let novoParagrafo = document.createElement("p")
novoParagrafo.textContent = "Este é um novo parágrafo."
```

#### Inserir um Elemento Filho

```javascript
let container = document.getElementById("container")
container.appendChild(novoParagrafo)
```

#### Inserir Elemento Antes de Outro

```javascript
let elementoExistente = document.getElementById("meuId")
container.insertBefore(novoParagrafo, elementoExistente)
```

### ✅ Remover Elementos do DOM

```javascript
let elemento = document.getElementById("meuId")
elemento.remove()
```

### ✅ Exemplos Práticos

#### Exemplo: Adicionar um Item a uma Lista

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Manipulação DOM</title>
  </head>
  <body>
    <ul id="minhaLista">
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
    <button id="botaoAdicionar">Adicionar Item</button>

    <script>
      document.getElementById("botaoAdicionar").addEventListener("click", function () {
        let novoItem = document.createElement("li")
        novoItem.textContent = "Novo Item"
        document.getElementById("minhaLista").appendChild(novoItem)
      })
    </script>
  </body>
</html>
```

### ✅ Por que Documentar HTML com DOM?

- **Interatividade**: Permite criar páginas web interativas e dinâmicas.
- **Atualização Dinâmica**: Facilita a atualização do conteúdo da página sem precisar recarregar o navegador.
- **Manipulação de Dados**: Permite manipular dados diretamente na página web, melhorando a experiência do usuário.

Dominar a manipulação do DOM é essencial para desenvolver aplicações web modernas e responsivas em JavaScript.

[Material](./Documente%20HTML%20com%20DOM.pdf)
