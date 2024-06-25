## 📝 Aula 05: Reutilize Código com Mixins

### Criar Mixins Personalizados

Mixins são uma funcionalidade poderosa do SASS que permite encapsular grupos de declarações CSS que podem ser reutilizados em todo o seu projeto. Isso ajuda a reduzir a repetição de código e a manter o CSS mais organizado e consistente.

### Definir Mixins com Parâmetros

Mixins podem aceitar parâmetros, permitindo que você passe valores diferentes para cada uso do mixin, tornando-o ainda mais flexível.

### Aplicar Mixins em Seletores Específicos

Você pode aplicar mixins em qualquer seletor CSS, reutilizando o código em diferentes partes do seu projeto.

### Entender como Chamar Mixins Dentro de Seletores CSS

Para chamar um mixin dentro de um seletor, você usa a diretiva `@include` seguida do nome do mixin e dos parâmetros (se houver).

### Estrutura de Pastas e Arquivos

Vamos criar uma estrutura de pastas para organizar nosso projeto com mixins:

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
$fontPrincipal: Roboto, sans-serif;
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

@mixin elementoForm($margin: 16px) {
  padding: 8px;
  display: block;
  width: 100%;
  margin-bottom: $margin;
}

body {
  background-color: #eee;
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

header {
  padding: 16px 0;
  background-color: yellow;
  text-align: center;
}

.form-container {
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    max-width: 480px;
    margin-top: 40px;

    input {
      @include elementoForm();
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #000;
    }

    button {
      @include elementoForm();
    }
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

Nesta aula, aprendemos a criar mixins personalizados no SASS, definir mixins com parâmetros e aplicar mixins em seletores específicos. Mixins são uma ferramenta poderosa para reutilizar código e manter o CSS organizado e eficiente. A estrutura modular do código facilita a manutenção e a escalabilidade do projeto.
