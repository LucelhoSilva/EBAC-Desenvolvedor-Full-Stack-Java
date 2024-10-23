## 📝 Aula 05: Inicie um Projeto com o Grunt

### Organizar um Projeto com o Grunt

Nesta aula, vamos aprender a organizar um projeto utilizando o Grunt, incluindo a criação de estruturas de pastas e a configuração de ambientes de desenvolvimento e produção. Também vamos configurar tarefas no Grunt para compilar código CSS usando um pré-processador como o LESS e explorar o uso de variáveis e importações de fontes externas para melhorar a manutenção e o desenvolvimento de estilos CSS.

### Estrutura do Projeto

Dentro da pasta do projeto, crie a seguinte estrutura de pastas:

```
exemplo-da-aula/
├── src/
│   ├── scripts/
│   └── styles/
│       └── main.less
└── index.html
```

### Código LESS

No arquivo `src/styles/main.less`, adicione o seguinte código:

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
}
```

### Código HTML

Crie um arquivo `index.html` dentro da pasta `src` com o seguinte conteúdo:

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
    <link rel="stylesheet" href="../dev/styles/main.css" />
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

### Configuração do Grunt

Crie um arquivo `Gruntfile.js` na raiz do projeto (fora da pasta `src`) e adicione a seguinte configuração:

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
    }
  })

  grunt.loadNpmTasks("grunt-contrib-less") // Carrega o plugin LESS

  grunt.registerTask("default", ["less:development"]) // Tarefa padrão para desenvolvimento
  grunt.registerTask("build", ["less:production"]) // Tarefa para produção
}
```

### Configuração do Package.json

Atualize o arquivo `package.json` para incluir comandos para desenvolvimento e produção:

```json
{
  "name": "inicie-um-projeto-com-o-grunt",
  "version": "1.0.0",
  "description": "Aprenda a iniciar um projeto com o grunt",
  "main": "index.js",
  "scripts": {
    "grunt": "grunt",
    "build": "grunt build",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Lucelho Silva",
  "license": "ISC",
  "devDependencies": {
    "grunt": "^1.6.1",
    "grunt-concurrent": "^3.0.0",
    "grunt-contrib-less": "^3.0.0",
    "grunt-contrib-sass": "^2.0.0"
  }
}
```

### Executar as Tarefas

Para compilar o código CSS para o ambiente de desenvolvimento, execute:

```bash
npm run grunt
```

Para compilar o código CSS para o ambiente de produção, execute:

```bash
npm run build
```

Isso criará duas pastas: `dev` e `dist`. A pasta `dev` conterá o CSS não comprimido para desenvolvimento, e a pasta `dist` conterá o CSS comprimido para produção.

### Resumo

Nesta aula, aprendemos a organizar um projeto com o Grunt, configurando ambientes de desenvolvimento e produção. Configuramos tarefas no Grunt para compilar código CSS usando o LESS e exploramos o uso de variáveis e importações de fontes externas para melhorar a manutenção e o desenvolvimento de estilos CSS. Com essa configuração, você pode automatizar a compilação de seus estilos, facilitando o fluxo de trabalho no desenvolvimento web.
