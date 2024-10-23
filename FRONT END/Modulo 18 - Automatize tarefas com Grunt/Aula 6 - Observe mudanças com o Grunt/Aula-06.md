## 📝 Aula 06: Observe Mudanças com o Grunt

### Instalar e Configurar o Plugin de Observação (Watch) no Grunt

Nesta aula, vamos aprender a instalar e configurar o plugin de observação (watch) no Grunt para otimizar o fluxo de trabalho. O plugin watch permite monitorar mudanças em arquivos específicos e executar tarefas automaticamente sempre que essas mudanças são detectadas.

### Passos para Instalar o Plugin de Observação

1. **Instalar o Plugin**: No terminal, execute o seguinte comando para instalar o plugin `grunt-contrib-watch`:

   ```bash
   npm install --save-dev grunt-contrib-watch
   ```

2. **Configurar o Plugin no Gruntfile**: Adicione a configuração do plugin watch no arquivo `Gruntfile.js`.

### Configuração do Gruntfile.js

Atualize o arquivo `Gruntfile.js` para incluir a configuração do plugin watch:

```javascript
const { option } = require("grunt")

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "./dev/styles/main.css": "src/styles/main.less"
        }
      },
      production: {
        options: {
          compress: true
        },
        files: {
          "dist/styles/main.min.css": "src/styles/main.less"
        }
      }
    },
    watch: {
      less: {
        files: ["src/styles/**/*.less"],
        tasks: ["less:development"]
      }
    }
  })

  grunt.loadNpmTasks("grunt-contrib-less") // Carrega o plugin LESS
  grunt.loadNpmTasks("grunt-contrib-watch") // Carrega o plugin Watch

  grunt.registerTask("default", ["less:development"]) // Tarefa padrão para desenvolvimento
  grunt.registerTask("build", ["less:production"]) // Tarefa para produção
  grunt.registerTask("watch", ["watch"]) // Tarefa para observar mudanças
}
```

### Atualizar o Arquivo LESS

Atualize o arquivo `src/styles/main.less` para testar a observação de mudanças:

```less
@fontePrincipal: Roboto, sans-serif;
@FonteDoTitulo: Lobster, cursive;
@corDotexto: #fff;
@corDeFundo: #eb3b5a;

body {
  background-color: @corDeFundo;
  font-family: @fontePrincipal;
  color: @corDotexto;
}

h1 {
  font-family: @FonteDoTitulo;
  font-size: 3em;
}
```

### Executar a Tarefa de Observação

Para iniciar a tarefa de observação, execute o seguinte comando no terminal:

```bash
grunt watch
```

### Resumo

Nesta aula, aprendemos a instalar e configurar o plugin de observação (watch) no Grunt. Entendemos como o plugin watch funciona para monitorar mudanças em arquivos e automatizar tarefas sempre que essas mudanças são detectadas. Isso otimiza o fluxo de trabalho, tornando o desenvolvimento mais eficiente e ágil.
