module.exports = function(grunt) {

  // Configuração do projeto
  grunt.initConfig({
    less: {
      development: {
        files: {
          "dist/style.css": "src/style.less" // Exemplo de compilação LESS
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/script.min.js': ['src/script.js'] // Exemplo de compressão JS
        }
      }
    }
  });

  // Carregando plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Tarefas padrão
  grunt.registerTask('default', ['less', 'uglify']); 
};