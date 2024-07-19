module.exports = function (grunt) { 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  grunt.registerTask('olaGrunt', function () {
    const done = this.async(); // ele aguarda o processo terminar com isso !
    setTimeout(function () {
      console.log('Olá, Grunt!');
      done();
     }, 3000); // para testar uma função mais demorada (ele nao espera o setTimeout terminar)
  });

  grunt.registerTask('default', ['olaGrunt']); // com o array eu posso passar o nome de todas as funções (tarefas), que ele pode executar
}


