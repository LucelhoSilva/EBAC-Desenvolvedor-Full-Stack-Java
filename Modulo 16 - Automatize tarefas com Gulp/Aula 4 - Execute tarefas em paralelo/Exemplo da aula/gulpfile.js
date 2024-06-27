const gulp = require('gulp');

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
exports.default = gulp.series(funcaoPadrao, dizOi); // ganho de perfomace
exports.dizOi = dizOi;