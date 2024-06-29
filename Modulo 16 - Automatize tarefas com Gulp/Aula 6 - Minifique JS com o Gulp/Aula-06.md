## 📝 Aula 6: Minifique JS com o Gulp

### Compreender a Minificação de JavaScript e Como Ela Otimiza o Desempenho da Web

A minificação de JavaScript é um processo que remove todos os caracteres desnecessários do código-fonte sem alterar sua funcionalidade. Isso inclui espaços em branco, quebras de linha, comentários e outros elementos que não são necessários para a execução do código. A minificação reduz o tamanho dos arquivos JavaScript, resultando em tempos de carregamento mais rápidos e melhor desempenho do site.

### Configurar Tarefas de Minificação de JavaScript Usando o Gulp

Para começar, precisamos instalar os plugins necessários para minificação e ofuscação de JavaScript:

```bash
npm install --save-dev gulp-uglify gulp-obfuscate
```

### Instalar Plugins Necessários

Para instalar os plugins necessários para minificação e ofuscação de JavaScript, execute o seguinte comando no terminal:

```bash
npm install --save-dev gulp-uglify gulp-obfuscate
```

### Criar Tarefas Personalizadas no Gulp para Minificar e Ofuscar JavaScript

Vamos modificar nosso arquivo `gulpfile.js` para incluir tarefas que minificam e ofuscam arquivos JavaScript, além de comprimir imagens e compilar arquivos SASS.

#### Arquivo `gulpfile.js`

```javascript
const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const sourcemaps = require("gulp-sourcemaps")
const uglify = require("gulp-uglify")
const obfuscate = require("gulp-obfuscate")
const imagemin = require("gulp-imagemin")

// Função para comprimir imagens
function comprimeImagens() {
  return gulp.src("./source/images/*").pipe(imagemin()).pipe(gulp.dest("./build/images"))
}

// Função para comprimir e ofuscar JavaScript
function comprimeJavaScript() {
  return gulp.src("./source/scripts/*.js").pipe(uglify()).pipe(obfuscate()).pipe(gulp.dest("./build/scripts"))
}

// Função para compilar arquivos SASS
function compilaSass() {
  return gulp
    .src("./source/styles/main.scss") // Seleciona todos os arquivos .scss
    .pipe(sourcemaps.init()) // Inicializa o sourcemaps
    .pipe(
      sass({
        outputStyle: "compressed" // Compila e comprime o CSS
      }).on("error", sass.logError)
    )
    .pipe(sourcemaps.write("./maps")) // Escreve o sourcemap
    .pipe(gulp.dest("./build/styles")) // Destino do CSS compilado
}

// Função watch para atualizar automaticamente o Gulp
exports.default = function () {
  gulp.watch("./source/styles/*.scss", { ignoreInitial: false }, gulp.series(compilaSass))
  gulp.watch("./source/scripts/*.js", { ignoreInitial: false }, gulp.series(comprimeJavaScript))
  gulp.watch("./source/images/*", { ignoreInitial: false }, gulp.series(comprimeImagens))
}
```

### Explicação do Código

1. **Importar Gulp e Plugins**: Importamos os módulos necessários (`gulp`, `gulp-sass`, `gulp-sourcemaps`, `gulp-uglify`, `gulp-obfuscate`, `gulp-imagemin`).

   ```javascript
   const gulp = require("gulp")
   const sass = require("gulp-sass")(require("sass"))
   const sourcemaps = require("gulp-sourcemaps")
   const uglify = require("gulp-uglify")
   const obfuscate = require("gulp-obfuscate")
   const imagemin = require("gulp-imagemin")
   ```

2. **Definir Função para Comprimir Imagens**: Definimos a função `comprimeImagens` que comprime arquivos de imagem e os salva na pasta `./build/images/`.

   ```javascript
   function comprimeImagens() {
     return gulp.src("./source/images/*").pipe(imagemin()).pipe(gulp.dest("./build/images"))
   }
   ```

3. **Definir Função para Comprimir e Ofuscar JavaScript**: Definimos a função `comprimeJavaScript` que:

   - Seleciona arquivos `.js` na pasta `./source/scripts/`.
   - Minifica os arquivos JavaScript.
   - Ofusca os arquivos JavaScript.
   - Salva os arquivos JavaScript na pasta `./build/scripts/`.

   ```javascript
   function comprimeJavaScript() {
     return gulp.src("./source/scripts/*.js").pipe(uglify()).pipe(obfuscate()).pipe(gulp.dest("./build/scripts"))
   }
   ```

4. **Definir Função para Compilar Arquivos SASS**: Definimos a função `compilaSass` que compila arquivos SASS em CSS comprimido e escreve sourcemaps.

   ```javascript
   function compilaSass() {
     return gulp
       .src("./source/styles/main.scss")
       .pipe(sourcemaps.init())
       .pipe(
         sass({
           outputStyle: "compressed"
         }).on("error", sass.logError)
       )
       .pipe(sourcemaps.write("./maps"))
       .pipe(gulp.dest("./build/styles"))
   }
   ```

5. **Definir a Função Watch**: Configuramos a função `watch` para monitorar alterações em arquivos `.scss`, `.js` e de imagem, e executar as funções correspondentes automaticamente.

   ```javascript
   exports.default = function () {
     gulp.watch("./source/styles/*.scss", { ignoreInitial: false }, gulp.series(compilaSass))
     gulp.watch("./source/scripts/*.js", { ignoreInitial: false }, gulp.series(comprimeJavaScript))
     gulp.watch("./source/images/*", { ignoreInitial: false }, gulp.series(comprimeImagens))
   }
   ```

### Executar as Tarefas

Para compilar os arquivos SASS, comprimir e ofuscar os arquivos JavaScript, e comprimir as imagens, use o seguinte comando no terminal:

```bash
gulp
```

Para iniciar o watch e atualizar automaticamente os arquivos ao salvar, use o comando:

```bash
gulp watch
```

### Resumo

Nesta aula, aprendemos sobre a importância da minificação de JavaScript para otimizar o desempenho da web. Instalamos e configuramos plugins necessários como o `uglify` para minificação e `obfuscate` para ofuscação de JavaScript. Criamos tarefas personalizadas no Gulp para automatizar esses processos, além de comprimir imagens e compilar arquivos SASS, garantindo uma maior eficiência e produtividade no desenvolvimento front-end.
