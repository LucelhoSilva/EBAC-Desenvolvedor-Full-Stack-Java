const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
  return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
  return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'));
}

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


exports.default = function (){
  gulp.watch('./source/styles/*.scss',{ ignoreInitial: false }, gulp.series(compilaSass));
  gulp.watch('./source/scripts/*.js',{ ignoreInitial: false }, gulp.series(comprimeJavaScript));
  gulp.watch('./source/images/*',{ ignoreInitial: false }, gulp.series(comprimeImagens));
}
