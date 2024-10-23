## 📝 Aula 03: Execute Tarefas em Série no Gulp

### Compreender o Conceito e a Importância da Execução de Tarefas em Série no Gulp

A execução de tarefas em série no Gulp permite que você controle a ordem em que as tarefas são executadas. Isso é útil quando uma tarefa depende do resultado de outra ou quando a ordem de execução é crucial para o funcionamento correto do fluxo de trabalho.

### Configurar e Executar Tarefas em Série

Vamos modificar nosso arquivo `gulpfile.js` para executar tarefas em série usando o método `gulp.series`.

#### Arquivo `gulpfile.js`

```javascript
const gulp = require("gulp")

// Tarefas públicas são aquelas que exportamos e podemos chamar via terminal
function funcaoPadrao(callback) {
  console.log("Executando via Gulp")
  callback()
}

function dizOi(callback) {
  console.log("Olá Gulp")
  dizTchau()
  callback()
}

// Tarefas privadas são tarefas que não exportamos mas podemos usar dentro de outras tarefas
function dizTchau() {
  console.log("Tchau Gulp")
}

// Configurando tarefas para serem executadas em série
exports.default = gulp.series(funcaoPadrao, dizOi)
exports.dizOi = dizOi
```

### Explicação do Código

1. **Importar o Gulp**: Importamos o módulo Gulp.

   ```javascript
   const gulp = require("gulp")
   ```

2. **Definir Tarefas**: Definimos três funções de tarefas: `funcaoPadrao`, `dizOi` e `dizTchau`.

   ```javascript
   function funcaoPadrao(callback) {
     console.log("Executando via Gulp")
     callback()
   }

   function dizOi(callback) {
     console.log("Olá Gulp")
     dizTchau()
     callback()
   }

   function dizTchau() {
     console.log("Tchau Gulp")
   }
   ```

3. **Configurar Tarefas em Série**: Usamos `gulp.series` para configurar `funcaoPadrao` e `dizOi` para serem executadas em série. A função `dizTchau` é chamada dentro de `dizOi` e não precisa ser exportada.
   ```javascript
   exports.default = gulp.series(funcaoPadrao, dizOi)
   exports.dizOi = dizOi
   ```

### Executar Tarefas em Série

Para executar as tarefas em série, use o seguinte comando no terminal:

```bash
gulp
```

Isso executará a tarefa padrão configurada (`gulp.series(funcaoPadrao, dizOi)`), que primeiro executará `funcaoPadrao` e depois `dizOi`.

### Resumo

Nesta aula, compreendemos o conceito e a importância da execução de tarefas em série no Gulp. Configuramos e executamos tarefas em série para garantir que sejam realizadas na ordem correta, facilitando o gerenciamento e a automação de processos dependentes.
