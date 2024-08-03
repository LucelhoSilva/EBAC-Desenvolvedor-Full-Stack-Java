# 📝 Aula 1: Inicie o Projeto

## Objetivos

- Compreender a estrutura do projeto;
- Configurar um ambiente de desenvolvimento;
- Iniciar o controle de versão e colaboração.

## Estrutura do Projeto e Configuração

Nesta aula, configuramos o repositório, instalamos o Gulp, Gulp-SASS e SASS para automatizar a compilação e compressão de arquivos CSS a partir de arquivos SASS. Também configuramos o Gulp para observar as mudanças nos arquivos SASS e recompilar automaticamente.

### Estrutura do Projeto

A estrutura básica do projeto inclui os seguintes diretórios e arquivos:

```
meu-projeto/
├── dist/
│   └── css/
│       └── main.css
├── node_modules/
│
├── src/
│   └── styles/
│       └── main.scss
├── index.html
├── gulpfile.js
├── package.lock.json
└── packge.json
```

### Configurando o Gulp

#### Passo 1: Instalando Dependências

Primeiro, instalamos as dependências necessárias:

```sh
npm init -y
npm install --save-dev gulp gulp-sass sass
```

#### Passo 2: Criando o Arquivo `gulpfile.js`

Em seguida, criamos o arquivo `gulpfile.js` para configurar as tarefas do Gulp:

```javascript
const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))

function styles(cb) {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/css"))
}

exports.default = styles
exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(styles))
}
```

#### Passo 3: Configurando o `package.json`

Adicionamos scripts no `package.json` para facilitar a execução das tarefas:

```json
{
  "name": "meu-projeto",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "gulp",
    "watch": "gulp watch"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "gulp": "^4.0.2",
    "gulp-sass": "^5.0.0",
    "sass": "^1.32.0"
  }
}
```

#### Passo 4: Estrutura HTML Simples

Criamos uma estrutura HTML simples para visualizar as mudanças:

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="dist/css/main.css" />
  </head>

  <body>
    <h1>Olá</h1>
  </body>
</html>
```

### Executando o Projeto

Para compilar o SASS e observar as mudanças, utilizamos os seguintes comandos:

- Para compilar o SASS: `npm run build`
- Para observar mudanças: `npm run watch`

### Controle de Versão e Colaboração

Para iniciar o controle de versão, configuramos um repositório Git:

```sh
git init
git add .
git commit -m "Inicialização do projeto e configuração do Gulp"
```

### Conclusão

Com essa configuração, estamos prontos para desenvolver nosso projeto com um ambiente automatizado para compilar SASS e observar mudanças, facilitando a colaboração e controle de versão.
