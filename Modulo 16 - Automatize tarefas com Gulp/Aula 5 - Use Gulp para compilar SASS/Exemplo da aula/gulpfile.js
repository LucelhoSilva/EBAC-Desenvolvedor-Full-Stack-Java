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

// Tarefas publicas são aquelas que a gente exporta e podemos chamar via terminal
function funcaoPadrao(callback) {
  setTimeout(function() {
    console.log('Executando via Gulp')
    callback();
  },2000);
}

function dizOi(callback){
  setTimeout(function(){
    console.log("Olá Gulp");
    dizTchat();
    callback();
  },1000);
  console.log('Olá Gulp');
  dizTchau();
  callback();
}

// Tarefas privada sao tarefas que não exportamos mais podemos usar dentro de outras tarefas
function dizTchau(){
  console.log('Tchau Gulp');
}

exports.default = gulp.parallel(funcaoPadrao,dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;
exports.watch = function (){
  gulp.watch('./source/styles/*.scss',{ ignoreInitial: false }, gulp.series(compilaSass));
}
