## 📝 Aula 07: Comprima HTML com o Grunt

### Otimizar o Código HTML de um Projeto Web usando o Grunt

Nesta aula, vamos aprender a otimizar o código HTML de um projeto web utilizando o Grunt. Vamos configurar e usar os plugins `grunt-replace` para substituir caminhos e `grunt-contrib-htmlmin` para realizar a minificação de HTML.

### Passos para Instalar e Configurar os Plugins

1. **Instalar o Plugin `grunt-replace`**: No terminal, execute o seguinte comando:

   ```bash
   npm install --save-dev grunt-replace
   ```

2. **Instalar o Plugin `grunt-contrib-htmlmin`**: No terminal, execute o seguinte comando:

   ```bash
   npm install --save-dev grunt-contrib-htmlmin
   ```

3. **Instalar o Plugin `grunt-contrib-clean`**: No terminal, execute o seguinte comando:

   ```bash
   npm install --save-dev grunt-contrib-clean
   ```

### Configuração do Gruntfile.js

Atualize o arquivo `Gruntfile.js` para incluir a configuração dos plugins `grunt-replace` e `grunt-contrib-htmlmin`:

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
    replace: {
      dev: {
        options: {
          patterns: [
            {
              match: "ENDERECO_DO_CSS",
              replacement: "./styles/main.css"
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ["src/index.html"],
            dest: "dev/"
          }
        ]
      },
      dist: {
        options: {
          patterns: [
            {
              match: "ENDERECO_DO_CSS",
              replacement: "./styles/main.min.css"
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ["prebuild/index.html"],
            dest: "dist/"
          }
        ]
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          "prebuild/index.html": "src/index.html"
        }
      }
    },
    clean: ["prebuild"],
    watch: {
      less: {
        files: ["src/styles/**/*.less"],
        tasks: ["less:development"]
      },
      html: {
        files: ["src/index.html"],
        tasks: ["replace:dev"]
      }
    }
  })

  grunt.loadNpmTasks("grunt-contrib-less") // Carrega o plugin LESS
  grunt.loadNpmTasks("grunt-contrib-watch") // Carrega o plugin Watch
  grunt.loadNpmTasks("grunt-replace") // Carrega o plugin Replace
  grunt.loadNpmTasks("grunt-contrib-htmlmin") // Carrega o plugin HTMLMin
  grunt.loadNpmTasks("grunt-contrib-clean") // Carrega o plugin Clean

  grunt.registerTask("default", ["less:development", "replace:dev"]) // Tarefa padrão para desenvolvimento
  grunt.registerTask("build", ["less:production", "htmlmin", "replace:dist", "clean"]) // Tarefa para produção
}
```

### Atualizar o Arquivo HTML

Atualize o arquivo `src/index.html` para incluir o placeholder que será substituído pelo caminho correto do CSS:

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sorteador</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="ENDERECO_DO_CSS" />
  </head>

  <body>
    <main>
      <h1>Sorteador</h1>
      <form action="">
        <div>
          <label for="numero-maximo">Número máximo</label>
          <input type="number" name="" id="numero-maximo" />
        </div>
        <button type="submit">Sortear número</button>
      </form>
    </main>
  </body>
</html>
```

### Executar as Tarefas

Para executar a tarefa de desenvolvimento, utilize o comando:

```bash
grunt
```

Para executar a tarefa de produção, utilize o comando:

```bash
grunt build
```

### Resumo

Nesta aula, aprendemos a otimizar o código HTML de um projeto web utilizando o Grunt. Configuramos e utilizamos os plugins `grunt-replace` para substituir caminhos de arquivos CSS e `grunt-contrib-htmlmin` para realizar a minificação de HTML. Também utilizamos o plugin `grunt-contrib-clean` para limpar pastas temporárias após a execução das tarefas. Isso resulta em um fluxo de trabalho mais eficiente e um código HTML otimizado para produção.
