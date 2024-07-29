# README.md

## Instruções para o Exercício com Grunt

Neste exercício, você deverá configurar um projeto Grunt para compilar LESS e comprimir JavaScript. Siga os passos abaixo para completar o exercício.

### 1. Inicialize um Novo Projeto

Crie uma nova pasta para o projeto e inicialize um projeto Node.js:

```bash
mkdir projeto-grunt
cd projeto-grunt
npm init -y
```

### 2. Instale os Plugins Necessários

Instale os plugins necessários para a compilação de LESS e compressão de JavaScript:

```bash
npm install --save-dev grunt grunt-contrib-less grunt-contrib-uglify
```

### 3. Crie o Arquivo `Gruntfile.js`

Crie um arquivo `Gruntfile.js` na raiz do seu projeto com o seguinte conteúdo:

```javascript
module.exports = function (grunt) {
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
          "dist/script.min.js": ["src/script.js"] // Exemplo de compressão JS
        }
      }
    }
  })

  // Carregando plugins
  grunt.loadNpmTasks("grunt-contrib-less")
  grunt.loadNpmTasks("grunt-contrib-uglify")

  // Tarefas padrão
  grunt.registerTask("default", ["less", "uglify"])
}
```

### 4. Estrutura de Pastas e Arquivos

Crie a seguinte estrutura de pastas e arquivos:

```
projeto-grunt/
│
├── src/
│   ├── style.less
│   │
│   └── script.js
│
├── Gruntfile.js
└── package.json
```

### 5. Adicione o Código LESS e JavaScript

No arquivo `src/style.less`, adicione o seguinte código:

```less
body {
  background-color: red;

  span {
    color: blue;

    h1 {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
```

No arquivo `src/script.js`, adicione o seguinte código:

```javascript
let num1 = 2
let num2 = 5

let soma = num1 + num2

console.log(soma)
```

### 6. Execute as Tarefas do Grunt

Para compilar o LESS e gerar o CSS de desenvolvimento, execute:

```bash
grunt
```

### 7. Crie um Branch e Faça o Commit

Crie um novo branch chamado `exercicio_grunt`:

```bash
git checkout -b exercicio_grunt
```

Adicione todos os arquivos e faça o commit:

```bash
git add .
git commit -m "Configuração do projeto Grunt para compilação de LESS e compressão de JavaScript"
```

### 8. Envie o Branch para o Repositório

Envie o branch para o repositório remoto:

```bash
git push origin exercicio_grunt
```

### 9. Envie o Link do Repositório

Acesse a plataforma e envie o link do repositório onde o branch `exercicio_grunt` está armazenado.

## Links Úteis

- [Documentação do Grunt](https://gruntjs.com/getting-started)
- [Documentação do grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less)
- [Documentação do grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
