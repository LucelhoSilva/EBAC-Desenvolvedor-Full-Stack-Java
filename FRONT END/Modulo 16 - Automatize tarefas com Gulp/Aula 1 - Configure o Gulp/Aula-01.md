## 📝 Aula 01: Configure o Gulp

### Realizar a Instalação do Gulp de Forma Global e Como Dependência de Projeto

O Gulp é um automatizador de tarefas que ajuda a automatizar processos comuns de desenvolvimento web, como minificação de arquivos, compilação de pré-processadores CSS e muito mais. Primeiro, precisamos instalar o Gulp globalmente e como dependência de nosso projeto.

#### Instalar o Gulp Globalmente

Abra o terminal e execute o seguinte comando para instalar o Gulp de forma global:

```bash
npm install -g gulp-cli
```

#### Instalar o Gulp no Projeto

Depois de instalar o Gulp globalmente, precisamos configurar nosso projeto para usar o Gulp. Para isso, navegue até a pasta do seu projeto e execute:

```bash
npm init -y
npm install gulp --save-dev
```

### Configurar um Projeto Gulp

Após instalar o Gulp, vamos configurar nosso projeto criando o arquivo de configuração do Gulp.

#### Criar o Arquivo `gulpfile.js`

Na raiz do seu projeto, crie um arquivo chamado `gulpfile.js` e adicione o seguinte código básico:

```javascript
const gulp = require("gulp")

// Tarefa de exemplo
gulp.task("hello", (done) => {
  console.log("Olá, Gulp!")
  done()
})
```

Este código configura uma tarefa simples chamada "hello" que imprime "Olá, Gulp!" no console. Para executar essa tarefa, você pode usar o seguinte comando no terminal:

```bash
gulp hello
```

### Criar Arquivos `.gitignore`

Um arquivo `.gitignore` é usado para especificar quais arquivos e pastas não devem ser rastreados pelo Git. Isso é importante para evitar o commit de arquivos desnecessários ou sensíveis no repositório.

#### Criar o Arquivo `.gitignore`

Na raiz do seu projeto, crie um arquivo chamado `.gitignore` e adicione o seguinte conteúdo:

```plaintext
# Dependências do Node.js
node_modules

# Arquivos de log
npm-debug.log
yarn-debug.log
yarn-error.log

# Diretório de build
dist
build
```

Este arquivo `.gitignore` informa ao Git para ignorar a pasta `node_modules`, arquivos de log e diretórios de build (`dist` e `build`).

### Resumo

Nesta aula, aprendemos a configurar o Gulp, instalando-o globalmente e como uma dependência de projeto. Também configuramos um arquivo `gulpfile.js` básico e criamos um arquivo `.gitignore` para evitar o rastreamento de arquivos indesejados pelo Git. Com essa configuração inicial, estamos prontos para automatizar tarefas de desenvolvimento usando o Gulp.

#### Passos Finais

1. **Instalar o Gulp globalmente e como dependência de projeto**:
   ```bash
   npm install -g gulp-cli
   npm init -y
   npm install gulp --save-dev
   ```
2. **Configurar o arquivo `gulpfile.js`**:

   ```javascript
   const gulp = require("gulp")

   gulp.task("hello", (done) => {
     console.log("Olá, Gulp!")
     done()
   })
   ```

3. **Criar o arquivo `.gitignore`**:

   ```plaintext
   # Dependências do Node.js
   node_modules

   # Arquivos de log
   npm-debug.log
   yarn-debug.log
   yarn-error.log

   # Diretório de build
   dist
   build
   ```

Com essas etapas, seu ambiente de desenvolvimento com Gulp está configurado e pronto para ser usado.
