## 📝 Aula 02: Crie Tarefas no Gulp

### Compreender o Conceito de Automação de Tarefas

Automação de tarefas é o processo de utilizar ferramentas para automatizar tarefas repetitivas no desenvolvimento de software, como compilação de código, minificação de arquivos, otimização de imagens e muito mais. O Gulp é uma dessas ferramentas que facilita a automação de várias tarefas de desenvolvimento.

### Criar Tarefas no Gulp, Utilizando Funções

Vamos criar um arquivo chamado `sum.js` e outro chamado `aritimetica.js` para entender melhor como criar e utilizar tarefas no Gulp.

#### Arquivo `sum.js`

Este arquivo contém uma função simples de soma:

```javascript
function somar(a, b) {
  return a + b
}

module.exports = somar
```

#### Arquivo `aritimetica.js`

Este arquivo utiliza a função `somar` do arquivo `sum.js`:

```javascript
const somar = require("./sum")

console.log("Somar: ", somar(10, 20)) // 30
```

### Configurar o `gulpfile.js`

Agora vamos configurar o `gulpfile.js` para entender a diferença entre tarefas públicas e privadas no Gulp.

#### Arquivo `gulpfile.js`

```javascript
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

exports.default = funcaoPadrao
exports.dizOi = dizOi
```

### Executar Tarefas Automaticamente

Para executar essas tarefas, você pode usar o seguinte comando no terminal:

```bash
gulp
```

Isso executará a tarefa `funcaoPadrao`, que é a tarefa padrão exportada.

Para executar a tarefa `dizOi`, você pode usar o comando:

```bash
gulp dizOi
```

### Distinguir Entre Tarefas Públicas e Privadas no Gulp

- **Tarefas Públicas**: São aquelas que exportamos usando `exports`. Elas podem ser chamadas diretamente via terminal. No exemplo acima, `funcaoPadrao` e `dizOi` são tarefas públicas.
- **Tarefas Privadas**: São aquelas que não exportamos. Elas não podem ser chamadas diretamente via terminal, mas podem ser usadas dentro de outras tarefas. No exemplo acima, `dizTchau` é uma tarefa privada.

### Resumo

Nesta aula, compreendemos o conceito de automação de tarefas e como criar tarefas no Gulp utilizando funções. Vimos como essas tarefas podem ser executadas automaticamente e distinguimos entre tarefas públicas e privadas no Gulp.
