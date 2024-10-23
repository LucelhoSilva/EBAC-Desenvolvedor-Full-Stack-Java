const { option } = require("grunt");

module.exports = function (grunt) { 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        files: {
          'main.css': 'main.less'
        }
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          'main.min.css': 'main.less'
        }
      },
    },

    sass: {
      dist: {
        options: {
          style: 'compressed' // compact, compressed, expanded, nested
        },
        files: {
          'main2.css': 'main.scss'
        }
      },
    },

    concurrent: {
      target: ['olaGrunt','less','sass']
    }
  });

  grunt.registerTask('olaGrunt', function () {
    const done = this.async(); // ele aguarda o processo terminar com isso !
    setTimeout(function () {
      console.log('Olá, Grunt!');
      done();
     }, 3000); // para testar uma função mais demorada (ele nao espera o setTimeout terminar)
  });

  grunt.loadNpmTasks('grunt-contrib-less'); // carrega o plugin less
  grunt.loadNpmTasks('grunt-contrib-sass'); // carrega o plugin sass
  grunt.loadNpmTasks('grunt-concurrent'); // carrega o plugin para executa em paralelo

  grunt.registerTask('default', ['concurrent']); // com o array eu posso passar o nome de todas as funções (tarefas), que ele pode executar
}


