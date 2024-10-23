## 📝 Aula 02: Crie Tarefas

### Criar Tarefas Personalizadas Usando o Grunt

O Grunt permite a criação de tarefas personalizadas para automatizar processos específicos do seu fluxo de trabalho. Tarefas personalizadas são definidas diretamente no arquivo `Gruntfile.js`, onde você pode especificar as ações que deseja que o Grunt execute.

### Passos para Criar Tarefas Personalizadas

#### 1. Configurar o Gruntfile.js

Vamos adicionar uma tarefa personalizada simples que imprime uma mensagem no console.

Abra o arquivo `Gruntfile.js` e adicione a seguinte configuração básica:

```javascript
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json")
  })

  // Definir uma tarefa personalizada
  grunt.registerTask("olaGrunt", function () {
    console.log("Olá, Grunt!")
  })

  // Definir a tarefa padrão
  grunt.registerTask("default", ["olaGrunt"])
}
```

#### 2. Executar a Tarefa Personalizada

Para executar a tarefa personalizada `olaGrunt`, abra o terminal no diretório do seu projeto e execute o comando:

```bash
grunt
```

Isso imprimirá "Olá, Grunt!" no console.

### Entender a Ordem de Execução das Tarefas com o Grunt

O Grunt executa as tarefas na ordem em que são definidas no array passado para o método `grunt.registerTask`. Vamos adicionar mais uma tarefa para entender como a ordem de execução funciona.

Atualize o `Gruntfile.js` para incluir outra tarefa personalizada:

```javascript
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json")
  })

  grunt.registerTask("olaGrunt", function () {
    console.log("Olá, Grunt!")
  })

  grunt.registerTask("adeusGrunt", function () {
    console.log("Adeus, Grunt!")
  })

  grunt.registerTask("default", ["olaGrunt", "adeusGrunt"])
}
```

Quando você executa o comando `grunt`, a saída será:

```
Olá, Grunt!
Adeus, Grunt!
```

Isso demonstra que o Grunt executa as tarefas na ordem em que foram definidas no array.

### Simular Tarefas Demoradas e Assíncronas

Algumas tarefas podem ser demoradas ou assíncronas. Para lidar com isso, o Grunt fornece o método `this.async()`, que permite ao Grunt aguardar a conclusão de uma tarefa assíncrona antes de prosseguir.

#### 1. Criar uma Tarefa Demorada

Vamos modificar a tarefa `olaGrunt` para simular uma tarefa demorada utilizando `setTimeout`.

Atualize o `Gruntfile.js` para incluir uma tarefa assíncrona:

```javascript
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json")
  })

  grunt.registerTask("olaGrunt", function () {
    const done = this.async()
    setTimeout(function () {
      console.log("Olá, Grunt!")
      done()
    }, 3000) // Simula uma tarefa que demora 3 segundos para ser concluída
  })

  grunt.registerTask("adeusGrunt", function () {
    console.log("Adeus, Grunt!")
  })

  grunt.registerTask("default", ["olaGrunt", "adeusGrunt"])
}
```

#### 2. Executar a Tarefa Assíncrona

Ao executar o comando `grunt`, a saída será:

```
Olá, Grunt!
Adeus, Grunt!
```

O Grunt aguardará 3 segundos antes de imprimir "Olá, Grunt!" e, em seguida, imprimirá "Adeus, Grunt!".

### Resumo

Nesta aula, aprendi a criar tarefas personalizadas usando o Grunt, a entender a ordem de execução das tarefas e a simular tarefas demoradas e assíncronas. Com essas habilidades, você pode personalizar o Grunt para atender às necessidades específicas do seu projeto, tornando o processo de desenvolvimento mais eficiente e automatizado.
