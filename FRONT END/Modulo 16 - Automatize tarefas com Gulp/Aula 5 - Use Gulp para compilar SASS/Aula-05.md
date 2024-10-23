## 📝 Aula 5: Compilar SASS com Gulp

### Compreender o Propósito da Automação de Tarefas com o Gulp no Trabalho de Desenvolvimento Front-End

A automação de tarefas com Gulp é essencial no desenvolvimento front-end, pois agiliza processos repetitivos, melhora a eficiência e minimiza erros. Ao configurar Gulp para compilar arquivos SASS, comprimir imagens e realizar outras tarefas comuns, você pode focar mais na codificação e menos na execução manual de tarefas.

### Instalar e Configurar os Plugins Necessários no Gulp

Para começar, precisamos instalar o Gulp e os plugins necessários:

```bash
npm install --save-dev gulp gulp-sass gulp-sourcemaps
```

### Criar Tarefas Personalizadas no Gulp para Automatizar Processos de Desenvolvimento

Vamos modificar nosso arquivo `gulpfile.js` para compilar arquivos SASS e automatizar a atualização dos mesmos.

#### Arquivo `gulpfile.js`

```javascript
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

// Função para compilar arquivos SASS
function compilaSass() {
  return gulp.src('./source/styles/main.scss')  // Seleciona todos os arquivos .scss
    .pipe(sourcemaps.init())                    // Inicializa o sourcemaps
    .pipe(sass({
      outputStyle: 'compressed'                 // Compila e comprime o CSS
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))           // Escreve o sourcemap
    .pipe(gulp.dest('./build/styles'));         // Destino do CSS compilado
}

// Função watch para atualizar automaticamente o Gulp
exports.watch = function () {
  gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
};

// Exporta a tarefa de compilação de SASS como padrão
exports.default = gulp.series(compilaSass);
```

### Explicação do Código

1. **Importar Gulp e Plugins**: Importamos os módulos necessários (`gulp`, `gulp-sass`, `gulp-sourcemaps`).

   ```javascript
   const gulp = require('gulp');
   const sass = require('gulp-sass')(require('sass'));
   const sourcemaps = require('gulp-sourcemaps');
   ```

2. **Definir a Função de Compilação de SASS**: Definimos a função `compilaSass` que:
   - Seleciona arquivos `.scss` na pasta `./source/styles/`.
   - Inicializa o sourcemaps.
   - Compila os arquivos SASS em CSS comprimido.
   - Escreve o sourcemap.
   - Salva o CSS compilado na pasta `./build/styles/`.

   ```javascript
   function compilaSass() {
     return gulp.src('./source/styles/main.scss')
       .pipe(sourcemaps.init())
       .pipe(sass({
         outputStyle: 'compressed'
       }).on('error', sass.logError))
       .pipe(sourcemaps.write('./maps'))
       .pipe(gulp.dest('./build/styles'));
   }
   ```

3. **Definir a Função Watch**: Configuramos a função `watch` para monitorar alterações em arquivos `.scss` e executar a função `compilaSass` automaticamente.

   ```javascript
   exports.watch = function () {
     gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
   };
   ```

4. **Exportar a Função Default**: Configuramos a tarefa padrão para executar a função `compilaSass`.

   ```javascript
   exports.default = gulp.series(compilaSass);
   ```

### Executar as Tarefas

Para compilar os arquivos SASS, use o seguinte comando no terminal:

```bash
gulp
```

Para iniciar o watch e compilar automaticamente os arquivos SASS ao salvar, use o comando:

```bash
gulp watch
```

### Resumo

Nesta aula, aprendemos sobre a importância da automação de tarefas com Gulp no desenvolvimento front-end. Instalamos e configuramos plugins necessários para compilar arquivos SASS, criamos uma tarefa personalizada no Gulp para automatizar esse processo e configuramos uma função watch para atualização automática. Isso facilita o desenvolvimento e garante uma maior eficiência e produtividade.