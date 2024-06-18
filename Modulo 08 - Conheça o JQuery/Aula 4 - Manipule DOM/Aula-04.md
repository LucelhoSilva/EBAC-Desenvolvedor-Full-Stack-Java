## 📝 Aula 04: Manipule o DOM

### ✅ Introdução à Manipulação do DOM com jQuery

Manipular o DOM (Document Object Model) é uma parte essencial do desenvolvimento web interativo. jQuery simplifica significativamente as operações de manipulação do DOM, permitindo adicionar, remover, modificar e percorrer elementos de maneira eficiente e intuitiva.

### ✅ Vantagens de Usar Manipulação do DOM com jQuery

- **Facilidade de Uso**: Oferece métodos simples e diretos para acessar e manipular elementos do DOM.
- **Cross-browser**: Lida automaticamente com diferenças de comportamento entre navegadores.
- **Encadeamento de Métodos**: Permite encadear várias operações de manipulação em um único conjunto de elementos.

### ✅ Seleção de Elementos

jQuery permite selecionar elementos usando seletores CSS-like, tornando fácil encontrar e interagir com elementos específicos no DOM.

#### Exemplo de Seleção por ID

```javascript
let elemento = $("#meuElemento")
```

#### Exemplo de Seleção por Classe

```javascript
let elementos = $(".minhaClasse")
```

#### Exemplo de Seleção por Tag

```javascript
let paragrafos = $("p")
```

### ✅ Manipulação de Conteúdo

Você pode facilmente modificar o conteúdo dos elementos selecionados usando jQuery.

#### Exemplo de Alteração de Texto de um Elemento

```javascript
$("#meuElemento").text("Novo texto")
```

#### Exemplo de Alteração de HTML de um Elemento

```javascript
$("#meuElemento").html("<strong>Novo conteúdo HTML</strong>")
```

### ✅ Manipulação de Estilos e Classes

jQuery permite adicionar, remover e alternar classes CSS e estilos em elementos.

#### Exemplo de Adição de Classe

```javascript
$("#meuElemento").addClass("destaque")
```

#### Exemplo de Remoção de Classe

```javascript
$("#meuElemento").removeClass("destaque")
```

#### Exemplo de Alteração de Estilo

```javascript
$("#meuElemento").css("color", "blue")
```

### ✅ Inserção e Remoção de Elementos

Além de modificar o conteúdo, jQuery facilita a inserção e remoção de elementos no DOM.

#### Exemplo de Inserção de Novo Elemento

```javascript
$("#meuContainer").append("<div>Nova div</div>")
```

#### Exemplo de Remoção de Elemento

```javascript
$("#elementoParaRemover").remove()
```

### ✅ Percorrendo Elementos

Você pode percorrer elementos do DOM usando jQuery para realizar operações em conjuntos de elementos.

#### Exemplo de Percorrer Elementos

```javascript
$("ul li").each(function () {
  console.log($(this).text()) // Exibe o texto de cada item da lista
})
```

[Material](./Manipule%20DOM.pdf)
