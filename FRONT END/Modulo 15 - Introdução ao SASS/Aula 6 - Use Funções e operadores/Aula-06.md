## 📝 Aula 06: Use Funções e Operadores

### Entender Como os Operadores Matemáticos Podem Ser Aplicados no SASS

No SASS, você pode usar operadores matemáticos para realizar cálculos diretamente em seu código CSS. Isso é útil para criar layouts responsivos, ajustar tamanhos de fontes e espaçamentos de forma dinâmica.

### Criar Funções Personalizadas no SASS

Funções personalizadas permitem encapsular cálculos complexos ou lógicas específicas que podem ser reutilizadas em todo o projeto. Isso ajuda a manter o código DRY (Don't Repeat Yourself).

### Explorar o Uso de Funções Nativas do SASS

O SASS oferece várias funções nativas que facilitam o desenvolvimento, como funções de cor, matemáticas e de string. Usar essas funções pode simplificar seu código e melhorar a eficiência do desenvolvimento.

### Estrutura de Pastas e Arquivos

Vamos criar uma estrutura de pastas para organizar nosso projeto com mixins, variáveis e funções personalizadas:

```
source/
│
├── config/
│   ├── reset.scss
│   └── variaveis.scss
│
└── main.scss
```

#### Arquivo `variaveis.scss` (dentro da pasta `config`)

```scss
// Fontes
$fontPrincipal: Roboto, sans-serif;

// Esquema de cores
$corDeFundo: #c8d6e5;
$corPrincipal: #01aea4;
$corSecundaria: #00d2d3;

// Breakpoints
$mobile: 767px;
$tablet: 1023px;
```

#### Arquivo `reset.scss` (dentro da pasta `config`)

```scss
@use "variaveis";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: variaveis.$fontPrincipal;
}
```

#### Arquivo `main.scss`

```scss
@use "config/reset";
@use "config/variaveis.scss";
@use "sass:math";

@mixin elementoForm($margin: 16px) {
  padding: 8px;
  display: block;
  width: 100%;
  margin-bottom: $margin;
}

@function pixelParaEm($alvoEmPixel, $contextoEmPixel: 16) {
  @return math.div($alvoEmPixel, $contextoEmPixel) + em;
}

body {
  background-color: variaveis.$corDeFundo;
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

header {
  padding: 16px 0;
  background-color: variaveis.$corPrincipal;
  text-align: center;
  color: #fff;
}

.form-container {
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 760px;

  h2 {
    font-size: pixelParaEm(48px);
    text-align: center;
  }

  form {
    width: 100%;
    max-width: 480px;
    margin-top: 40px;

    label {
      font-weight: bold;
      cursor: pointer;
    }

    input {
      @include elementoForm();
      background-color: transparent;
      border: none;
      border-bottom: 3px solid variaveis.$corPrincipal;
    }

    button {
      @include elementoForm();
      background-color: variaveis.$corSecundaria;
      border: none;
      cursor: pointer;
      font-size: 18px;
      font-weight: bold;
      color: #fff;

      &:hover {
        background-color: darken(variaveis.$corSecundaria, 15%);
      }
    }
  }
}

@media screen and (max-width: variaveis.$mobile) {
  .container {
    max-width: 80%;
  }
}
```

### Compilar o Código SASS para CSS

No terminal, execute o comando para compilar o arquivo `main.scss` para `main.css`:

```bash
sass source/main.scss build/main.css
```

### Código HTML Utilizando o CSS Compilado

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Projeto com SASS</title>
    <link rel="stylesheet" href="build/main.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
  </head>

  <body>
    <header>
      <div class="container">
        <h1>Projeto com SASS</h1>
      </div>
    </header>
    <div class="form-container container">
      <h2>Se inscreva na newsletter para receber dicas sobre CSS</h2>
      <form action="">
        <label for="nome-completo">Nome Completo:</label>
        <input type="text" id="nome-completo" />
        <label for="email">Seu melhor e-mail</label>
        <input type="email" id="email" />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </body>
</html>
```

### Resumo

Nesta aula, aprendemos a usar operadores matemáticos no SASS, criando cálculos diretamente no código CSS. Também criamos funções personalizadas, como `pixelParaEm`, para converter pixels em ems, e exploramos o uso de funções nativas do SASS. Com esses conhecimentos, você pode criar estilos mais dinâmicos e flexíveis, melhorando a eficiência e a manutenção do seu código CSS.
