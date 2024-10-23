## 📝 Aula 03: Use Grunt para Compilar LESS e SASS

### Instalar e Configurar o Plugin do LESS no Grunt

LESS e SASS são pré-processadores CSS que permite utilizar variáveis, aninhamento, mixins e outras funcionalidades que tornam o CSS mais dinâmico e fácil de manter. Para usar o Grunt para compilar arquivos LESS, precisamos instalar e configurar o plugin do LESS.

### Passos para Instalar e Configurar o Plugin do LESS

#### 1. Instalar os Plugins Necessários

No terminal, execute os seguintes comandos para instalar os plugins para LESS e SASS:

```bash
npm install --save-dev grunt-contrib-less
npm install --save-dev grunt-contrib-sass
```

#### 2. Criar Arquivos LESS e SASS

Crie um arquivo chamado `main.less` com o seguinte conteúdo:

```less
@corDeFundo: #fff;

body {
  background-color: @corDeFundo;
  color: #000;
}
```

E um arquivo chamado `main.scss` com o seguinte conteúdo:

```scss
$corDeFundo: red;

body {
  background-color: $corDeFundo;
}
```

### Configurar o Gruntfile.js

Abra o arquivo `Gruntfile.js` e configure o Grunt para compilar os arquivos LESS e SASS. Adicione a seguinte configuração:

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

  grunt.registerTask("default", ["less:development", "less:production", "sass"]) // tarefas padrão
}
```

### Criar Tarefas de Compilação para Ambientes de Desenvolvimento e Produção

A configuração acima define duas tarefas para compilar LESS:

- `less:development`: Compila o arquivo `main.less` em `main.css` sem compressão.
- `less:production`: Compila e comprime o arquivo `main.less` em `main.min.css`.

Para o SASS, a tarefa `sass:dist` compila o arquivo `main.scss` em `main2.css` com a opção de estilo comprimido.

### Utilizar o Grunt para Compilar e Automatizar Tarefas

Agora que as tarefas estão configuradas, podemos usar o Grunt para compilar os arquivos LESS e SASS automaticamente.

#### 1. Executar as Tarefas de Compilação

Para executar as tarefas definidas, abra o terminal no diretório do seu projeto e execute:

```bash
grunt
```

Isso executará as tarefas padrão, compilando os arquivos LESS e SASS conforme configurado.

### Resumo

Nesta aula, aprendemos a instalar e configurar o plugin do LESS no Grunt, criar tarefas de compilação para ambientes de desenvolvimento e produção, e utilizar o Grunt para compilar e automatizar tarefas. Com essas ferramentas, você pode automatizar a compilação de seus estilos, melhorando a eficiência do seu fluxo de trabalho de desenvolvimento web.
