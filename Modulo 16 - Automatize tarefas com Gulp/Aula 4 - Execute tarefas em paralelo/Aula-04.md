## 📝 Aula 04: Execute Tarefas em Paralelo no Gulp

### Compreender o Conceito e a Importância da Execução de Tarefas em Paralelo no Gulp

A execução de tarefas em paralelo no Gulp permite que múltiplas tarefas sejam executadas ao mesmo tempo. Isso é útil quando você tem tarefas independentes entre si e deseja reduzir o tempo total de execução do seu fluxo de trabalho.

### Configurar e Executar Tarefas em Paralelo

Vamos modificar nosso arquivo `gulpfile.js` para executar tarefas em paralelo usando o método `gulp.parallel`.

#### Arquivo `gulpfile.js`

```javascript
const gulp = require('gulp');

// Tarefas públicas são aquelas que exportamos e podemos chamar via terminal
function funcaoPadrao(callback) {
  setTimeout(function() {
    console.log('Executando via Gulp');
    callback();
  }, 2000);
}

function dizOi(callback) {
  setTimeout(function(){
    console.log("Olá Gulp");
    callback();
  }, 1000);
}

// Tarefas privadas são tarefas que não exportamos, mas podemos usar dentro de outras tarefas
function dizTchau() {
  console.log('Tchau Gulp');
}

// Configurando tarefas para serem executadas em paralelo
exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
```

### Explicação do Código

1. **Importar o Gulp**: Importamos o módulo Gulp.

   ```javascript
   const gulp = require('gulp');
   ```

2. **Definir Tarefas**: Definimos três funções de tarefas: `funcaoPadrao`, `dizOi` e `dizTchau`.

   ```javascript
   function funcaoPadrao(callback) {
     setTimeout(function() {
       console.log('Executando via Gulp');
       callback();
     }, 2000);
   }

   function dizOi(callback) {
     setTimeout(function(){
       console.log("Olá Gulp");
       callback();
     }, 1000);
   }

   function dizTchau() {
     console.log('Tchau Gulp');
   }
   ```

3. **Configurar Tarefas em Paralelo**: Usamos `gulp.parallel` para configurar `funcaoPadrao` e `dizOi` para serem executadas ao mesmo tempo.

   ```javascript
   exports.default = gulp.parallel(funcaoPadrao, dizOi);
   exports.dizOi = dizOi;
   ```

### Executar Tarefas em Paralelo

Para executar as tarefas em paralelo, use o seguinte comando no terminal:

```bash
gulp
```

Isso executará a tarefa padrão configurada (`gulp.parallel(funcaoPadrao, dizOi)`), que executará `funcaoPadrao` e `dizOi` simultaneamente.

### Benefícios e Malefícios da Execução em Paralelo

**Benefícios:**

- **Eficiência de Tempo:** Reduz o tempo total de execução, pois tarefas independentes são realizadas ao mesmo tempo.
- **Melhor Utilização de Recursos:** Pode aproveitar melhor os recursos disponíveis (CPU, memória).

**Malefícios:**

- **Complexidade:** Pode ser mais difícil de gerenciar e depurar quando há muitas tarefas.
- **Conflitos:** Pode causar problemas se as tarefas não forem realmente independentes e houver conflitos de recursos.

### Benefícios e Malefícios da Execução em Série

**Benefícios:**

- **Simplicidade:** Mais fácil de gerenciar e depurar, pois as tarefas são realizadas uma após a outra.
- **Segurança:** Garante que as tarefas dependentes sejam executadas na ordem correta, evitando conflitos.

**Malefícios:**

- **Ineficiente:** Pode ser mais lento, pois cada tarefa espera a anterior terminar antes de começar.

### Resumo

Nesta aula, compreendemos o conceito e a importância da execução de tarefas em paralelo no Gulp. Configuramos e executamos tarefas em paralelo para reduzir o tempo total de execução, facilitando o gerenciamento de tarefas independentes. Também discutimos os benefícios e malefícios das abordagens em paralelo e em série, ajudando a escolher a melhor estratégia para cada situação.