## 📝 Aula 01: Configure o Grunt

### Compreender o Propósito e os Benefícios da Ferramenta Grunt

Grunt é um task runner JavaScript que automatiza tarefas comuns no desenvolvimento de projetos web, como minificação de arquivos, compilação de pré-processadores CSS (SASS, LESS), teste de código e muito mais. Ele ajuda a aumentar a eficiência e a consistência do fluxo de trabalho, permitindo que os desenvolvedores concentrem-se em tarefas mais importantes.

### Passos para Instalar o Grunt

Para utilizar o Grunt, é necessário instalá-lo tanto globalmente quanto localmente no seu projeto.

#### 1. Instalar o Grunt CLI Globalmente

Abra o terminal e execute o comando:

```bash
npm install -g grunt-cli
```

Este comando instala a interface de linha de comando do Grunt globalmente no seu sistema.

#### 2. Inicializar um Projeto Node.js

No diretório do seu projeto, inicialize um novo projeto Node.js (caso ainda não tenha um):

```bash
npm init
```

Este comando cria um arquivo `package.json` com as configurações padrão.

#### 3. Instalar o Grunt Localmente

Dentro do diretório do seu projeto, instale o Grunt como uma dependência de desenvolvimento:

```bash
npm install grunt --save-dev
```

### Criar o Arquivo de Configuração (Gruntfile.js)

O arquivo `Gruntfile.js` é onde você define e configura as tarefas que o Grunt irá executar. Vamos criar uma configuração básica.

#### 1. Criar o Arquivo Gruntfile.js

No diretório raiz do seu projeto, crie um arquivo chamado `Gruntfile.js` com o seguinte conteúdo:

```javascript
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json")
  })
}
```

#### 2. Adicionar Tarefas ao Gruntfile.js

Para que o Grunt realize tarefas específicas, é necessário adicionar plugins e configurar essas tarefas no `Gruntfile.js`. Vamos adicionar um exemplo de configuração para minificação de arquivos JavaScript.

#### 3. Configurar a Tarefa de Minificação

Atualize o `Gruntfile.js` para incluir a configuração da tarefa de minificação:

```javascript
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    uglify: {
      build: {
        src: "src/js/app.js",
        dest: "dist/js/app.min.js"
      }
    }
  })

  grunt.loadNpmTasks("grunt-contrib-uglify")
  grunt.registerTask("default", ["uglify"])
}
```

### Executar Tarefas com Grunt

Para executar a tarefa de minificação configurada, basta rodar o comando no terminal:

```bash
npm run grunt
```

### Resumo

Nesta aula, compreendemos o propósito e os benefícios do Grunt para automação de tarefas no desenvolvimento de projetos web. Instalamos o Grunt globalmente e localmente, e criamos um arquivo de configuração `Gruntfile.js` básico. Também configuramos uma tarefa de minificação de arquivos JavaScript como exemplo prático. Com o Grunt, você pode automatizar diversas tarefas repetitivas, melhorando a eficiência do seu fluxo de trabalho de desenvolvimento.
