## 📝 Aula 04: Execute Tarefas de Forma Paralela

### Compreender os Desafios de Executar Tarefas de Forma Serial

Executar tarefas de forma serial no Grunt significa que cada tarefa deve ser concluída antes que a próxima possa começar. Isso pode causar lentidão no processo de automação, especialmente se você tiver tarefas demoradas. Por exemplo, se você estiver compilando arquivos LESS e SASS, cada uma dessas tarefas pode demorar um pouco para ser concluída, e executá-las de forma serial pode aumentar o tempo total de execução.

### Utilizar o Plugin Concurrent para Executar Tarefas de Forma Paralela no Grunt

Para resolver o problema de lentidão, podemos usar o plugin `grunt-concurrent`, que permite executar tarefas de forma paralela. Isso pode melhorar significativamente a eficiência do processo de automação.

### Passos para Utilizar o Plugin Concurrent

#### 1. Instalar o Plugin Concurrent

No terminal, execute o comando para instalar o plugin `grunt-concurrent`:

```bash
npm install --save-dev grunt-concurrent
```

#### 2. Configurar o Gruntfile.js

Abra o arquivo `Gruntfile.js` e adicione a configuração para o plugin `grunt-concurrent`.

```javascript
const { option } = require("grunt")

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "main.css": "main.less"
        }
      },
      production: {
        options: {
          compress: true
        },
        files: {
          "main.min.css": "main.less"
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: "compressed" // compact, compressed, expanded, nested
        },
        files: {
          "main2.css": "main.scss"
        }
      }
    },

    concurrent: {
      target: ["less", "sass"]
    }
  })

  grunt.registerTask("olaGrunt", function () {
    const done = this.async() // ele aguarda o processo terminar com isso!
    setTimeout(function () {
      console.log("Olá, Grunt!")
      done()
    }, 3000) // para testar uma função mais demorada
  })

  grunt.loadNpmTasks("grunt-contrib-less") // carrega o plugin less
  grunt.loadNpmTasks("grunt-contrib-sass") // carrega o plugin sass
  grunt.loadNpmTasks("grunt-concurrent") // carrega o plugin concurrent

  grunt.registerTask("default", ["concurrent:target"]) // define a tarefa padrão para executar de forma paralela
}
```

#### 3. Executar Tarefas de Forma Paralela

Para executar as tarefas de forma paralela, basta rodar o comando no terminal:

```bash
grunt
```

Isso executará as tarefas `less:development`, `less:production` e `sass` de forma paralela, tornando o processo mais eficiente.

### Resumo

Nesta aula, compreendemos os desafios de executar tarefas de forma serial e como isso pode causar lentidão no processo de automação de tarefas no Grunt. Utilizamos o plugin `grunt-concurrent` para executar tarefas de forma paralela, melhorando a eficiência do processo de automação. Com essa configuração, você pode executar várias tarefas simultaneamente, economizando tempo e recursos no desenvolvimento de seus projetos web.
