## 📝 Aula 01: Selecione Elementos

### ✅ Introdução ao jQuery

jQuery é uma biblioteca JavaScript rápida, pequena e rica em recursos. Facilita muito a manipulação de documentos HTML, tratamento de eventos, animação e Ajax, simplificando a tarefa de escrever scripts JavaScript que funcionem em diferentes navegadores.

### ✅ Por que Usar jQuery?

- **Simplificação**: Facilita tarefas comuns de JavaScript, como manipulação de DOM e eventos.
- **Compatibilidade**: Lida com as diferenças de comportamento entre navegadores.
- **Comunidade e Plugins**: Grande quantidade de plugins e uma comunidade ativa.

### ✅ Adicionando jQuery ao Seu Projeto

Para usar jQuery, você pode adicionar a biblioteca ao seu projeto de duas maneiras: através de um CDN ou fazendo o download do arquivo jQuery.

#### Usando um CDN

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo com jQuery</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  </head>
  <body>
    <!-- Conteúdo aqui -->
  </body>
</html>
```

#### Download do jQuery

Faça o download do arquivo jQuery do site oficial (https://jquery.com/) e adicione-o ao seu projeto:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo com jQuery</title>
    <script src="caminho/para/jquery.min.js"></script>
  </head>
  <body>
    <!-- Conteúdo aqui -->
  </body>
</html>
```

### ✅ Seleção de Elementos com jQuery

Uma das funcionalidades mais usadas do jQuery é a seleção de elementos. Utilizando a função `$`, você pode selecionar e manipular elementos de maneira muito mais simples do que com JavaScript puro.

Desculpe pela confusão anterior! Aqui está a seção específica sobre como selecionar elementos usando jQuery:

#### Selecionar por ID

```javascript
let elemento = $("#meuElemento")
```

#### Selecionar por Classe

```javascript
let elementos = $(".minhaClasse")
```

#### Selecionar por Tag

```javascript
let paragrafos = $("p")
```

#### Selecionar por Atributo

```javascript
let inputs = $("input[name='campoNome']")
```

### ✅ Encadeamento de Métodos

Uma característica poderosa do jQuery é o encadeamento de métodos, onde você pode aplicar várias operações a um conjunto de elementos selecionados em uma única linha de código.

```javascript
$("#meuElemento").css("color", "blue").hide().fadeIn(2000)
```

### ✅ Manipulação de Conteúdo

Você pode manipular facilmente o conteúdo dos elementos selecionados usando jQuery.

#### Alterar Texto de um Elemento

```javascript
$("#meuElemento").text("Novo texto")
```

#### Alterar HTML de um Elemento

```javascript
$("#meuElemento").html("<strong>Novo conteúdo HTML</strong>")
```

#### Alterar Valor de um Campo de Formulário

```javascript
$("#campoNome").val("Novo valor")
```

### ✅ Manipulação de Atributos

Você pode obter e definir atributos de elementos usando jQuery.

#### Definir Atributo

```javascript
$("#minhaImagem").attr("alt", "Nova descrição da imagem")
```

#### Remover Atributo

```javascript
$("#minhaImagem").removeAttr("alt")
```

[Material](./Selecione%20elementos.pdf)
