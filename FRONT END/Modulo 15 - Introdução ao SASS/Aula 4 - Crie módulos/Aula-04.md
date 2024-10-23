## 📝 Aula 04: Crie Módulos

### Compreender a Importância de Dividir o Código de Estilos em Módulos Separados

Dividir o código de estilos em módulos separados é essencial para manter o projeto organizado e escalável. Módulos permitem que você separe diferentes partes do estilo em arquivos distintos, facilitando a manutenção, reutilização e entendimento do código.

### Organizar Códigos em Módulos

Organizar o código em módulos envolve criar uma estrutura de pastas e arquivos que separa configurações, estilos globais e estilos específicos de seções. No exemplo a seguir, criaremos uma estrutura organizada de módulos.

### Criar Variáveis para Armazenar Cores, Estilos e Outros Valores

Definir variáveis em módulos separados permite que você centralize valores que podem ser usados em várias partes do seu projeto. Isso facilita a alteração de temas e estilos globais de forma consistente.

### Importar Módulos e Variáveis em Arquivos SASS

Usar a diretiva `@use` permite que você importe módulos e suas variáveis em outros arquivos SASS, garantindo que o código fique modular e bem estruturado.

### Estrutura de Pastas e Arquivos

Vamos criar uma estrutura de pastas para organizar nossos módulos de estilo:

```
source/
│
├── config/
│   ├── cores.scss
│   └── reset.scss
│
└── secoes/
    └── produtos.scss
```

#### Arquivo `cores.scss` (dentro da pasta `config`)

```scss
$corPrincipal: green;
$corSecundaria: #111;
$corDeFundo: #eee;
```

#### Arquivo `reset.scss` (dentro da pasta `config`)

```scss
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
```

#### Arquivo `produtos.scss` (dentro da pasta `secoes`)

```scss
@use "../config/cores.scss" as cores;

.produtos {
  background-color: cores.$corPrincipal;
}
```

#### Arquivo Principal `style.scss`

Este arquivo será responsável por importar todos os módulos e compilar o CSS final.

```scss
@use "config/reset";
@use "config/cores.scss" as cores;
@use "secoes/produtos";

body {
  background-color: cores.$corDeFundo;
}
```

### Compilar o Código SASS para CSS

No terminal, execute o comando para compilar o arquivo `style.scss` para `style.css`:

```bash
sass source/style.scss style.css
```

### Código HTML Utilizando o CSS Compilado

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="biuld/main.css" />
  </head>

  <body></body>
  <header>
    <div class="contaner">
      <h1>Nome do site</h1>
    </div>
  </header>
  <button class="sucesso" type="submit">Clique aqui</button>
  <section class="produtos">
    <div class="container">
      <div class="produto">
        <h3>Livro de CSS</h3>
      </div>
      <div class="produto">
        <h3>Livro de JS</h3>
      </div>
      <div class="produto">
        <h3>Livro de SASS</h3>
      </div>
    </div>
  </section>
</html>
```

### Resumo

Nesta aula, aprendemos a importância de dividir o código de estilos em módulos separados para melhorar a organização e a escalabilidade do projeto. Criamos uma estrutura de pastas para armazenar diferentes partes do estilo, definimos variáveis em arquivos separados e importamos esses módulos em um arquivo principal. Esse método modulariza o código, tornando-o mais fácil de manter e reutilizar em diferentes partes do projeto.
