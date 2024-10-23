## 📝 Aula 02: Aprenda a Sintaxe de SASS e SCSS

### Compreender e Diferenciar a Sintaxe do SASS e do SCSS

SASS (Syntactically Awesome Stylesheets) é um pré-processador CSS que oferece uma sintaxe mais robusta para escrever CSS. Ele possui duas sintaxes:

1. **SASS**: Utiliza uma sintaxe indentada (sem chaves e ponto e vírgula), que é mais concisa e semelhante a Python.
2. **SCSS**: Utiliza uma sintaxe mais semelhante ao CSS tradicional (com chaves e ponto e vírgula).

### Exemplos de Sintaxe SASS e SCSS

#### Sintaxe SASS (Indentada)

```sass
$primary-color: #3498db

body
  font-family: Arial, sans-serif
  background-color: $primary-color
  color: #fff

.container
  margin: 0 auto
  padding: 20px
```

#### Sintaxe SCSS (Semelhante ao CSS)

```scss
$primary-color: #3498db;

body {
  font-family: Arial, sans-serif;
  background-color: $primary-color;
  color: #fff;
}

.container {
  margin: 0 auto;
  padding: 20px;
}
```

### Configurar o Uso do SASS

Para usar o SASS em seu projeto, siga os passos abaixo:

1. **Crie um Arquivo SASS ou SCSS**: Crie um arquivo com extensão `.sass` ou `.scss` contendo o código desejado.
2. **Instale o SASS Globalmente com npm**: Caso ainda não tenha instalado, utilize o comando:

   ```bash
   npm install -g sass
   ```

### Compilar Código SASS em Código CSS

Para compilar seu código SASS ou SCSS em CSS, use o comando `sass` no terminal. Veja um exemplo:

#### Compilação Simples

```bash
sass style.scss style.css
```

#### Compilação Automática (Modo de Observação)

Para compilar automaticamente sempre que o arquivo for salvo, use a opção `--watch`:

```bash
sass --watch style.scss:style.css
```

### Entender as Dependências e Gerenciar Pacotes

Gerenciar pacotes e dependências é crucial para manter seu projeto organizado e eficiente. O `npm` (Node Package Manager) é a ferramenta padrão para isso.

#### Inicializar um Projeto npm

```bash
npm init -y
```

Esse comando cria um arquivo `package.json` que armazena informações sobre o projeto e suas dependências.

#### Instalar Dependências

Para instalar pacotes adicionais, como bibliotecas de CSS ou ferramentas de build, use o comando `npm install` seguido do nome do pacote. Por exemplo:

```bash
npm install bootstrap
```

### Exemplo de Uso do SASS e SCSS

Vamos criar um exemplo completo utilizando SCSS, desde a criação do arquivo SCSS até a inclusão do CSS compilado em um documento HTML.

#### Arquivo SCSS: `style.scss`

```scss
$primary-color: #3498db;

body {
  font-family: Arial, sans-serif;
  background-color: $primary-color;
  color: #fff;
}

.container {
  margin: 0 auto;
  padding: 20px;
}
```

#### Compilação do SCSS para CSS

No terminal, execute:

```bash
sass style.scss style.css
```

#### Código HTML Utilizando o CSS Compilado

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exemplo SASS</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h1>Bem-vindo ao SASS!</h1>
      <p>Este é um exemplo de como usar SASS em seu projeto.</p>
    </div>
  </body>
</html>
```

### Resumo

Nesta aula, aprendemos a diferenciar a sintaxe do SASS e do SCSS, configuramos o uso do SASS, e compilamos código SASS em código CSS usando os comandos apropriados. Também entendemos a importância das dependências e como gerenciá-las com `npm`. Com essas ferramentas, você pode criar estilos mais poderosos e organizados para seus projetos web.
