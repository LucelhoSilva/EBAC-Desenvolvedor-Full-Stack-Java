// Tarefas publicas são aquelas que a gente exporta e podemos chamar via terminal
function funcaoPadrao(callback) {
  console.log('Executando via Gulp')
  callback();
}

function dizOi(callback){
  console.log('Olá Gulp');
  dizTchau();
  callback();
}

// Tarefas privada sao tarefas que não exportamos mais podemos usar dentro de outras tarefas
function dizTchau(){
  console.log('Tchau Gulp');
}

exports.default = funcaoPadrao;
exports.dizOi = dizOi;