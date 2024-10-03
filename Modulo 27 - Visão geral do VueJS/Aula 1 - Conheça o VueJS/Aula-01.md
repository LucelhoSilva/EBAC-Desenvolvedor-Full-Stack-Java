## 📝 Aula 01: Conheça o Vue.js

### ✅ Introdução

Nesta aula, exploramos o **Vue.js**, um framework JavaScript progressivo para construir interfaces de usuário. Ele é amplamente utilizado para criar **aplicações web dinâmicas** e **componentes reutilizáveis**. O Vue.js se destaca pela simplicidade e flexibilidade, sendo ideal tanto para iniciantes quanto para desenvolvedores mais experientes.

### ✅ Objetivos

- Criar um projeto Vue.js do zero.
- Compreender a **estrutura básica** de um projeto Vue.js.
- Familiarizar-se com os componentes, importações e o arquivo `package.json`.

### ✅ Criando um Projeto Vue.js

Para começar, criamos um novo projeto **Vue.js** utilizando o comando:

```bash
npm create vue@latest
```

Esse comando inicializa o processo de criação de um projeto Vue.js. Durante a execução, você será guiado por algumas perguntas, como nome do projeto e bibliotecas opcionais que deseja incluir (por exemplo, TypeScript, Vue Router, Pinia para gerenciamento de estado, entre outros).

Após a configuração inicial, você terá uma estrutura básica de um projeto Vue.js, pronto para começar a desenvolver.

### ✅ Estrutura Básica do Projeto

Após a criação do projeto, a estrutura de pastas e arquivos será semelhante à seguinte:

```
/meu-projeto-vue
├── /node_modules
├── /public
│   └── index.html
├── /src
│   ├── /assets
│   ├── /components
│   │   └── HelloWorld.vue
│   ├── App.vue
│   └── main.js
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

### ✅ Importações e Componentes

#### `main.js`

O arquivo `main.js` é o ponto de entrada da aplicação. Ele importa o **Vue.js** e o componente `App.vue` para renderizar o conteúdo na página.

```javascript
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

Aqui, usamos a função `createApp()` para iniciar o aplicativo Vue e vinculá-lo ao elemento `#app` no arquivo `index.html`.

#### `App.vue`

O arquivo `App.vue` é o componente raiz do projeto. Ele pode conter a estrutura da interface principal da aplicação, além de gerenciar os outros componentes.

```vue
<template>
  <div id="app">
    <HelloWorld msg="Bem-vindo ao Vue.js"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>
```

Neste exemplo, o componente `HelloWorld` é importado do diretório `/components` e utilizado dentro do template do `App.vue`.

#### `HelloWorld.vue`

O componente `HelloWorld.vue` é um exemplo de **componente reutilizável** no Vue.js. Ele utiliza **propriedades** (props) para receber dados dinamicamente e exibir no template.

```vue
<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>
```

### ✅ O Arquivo `package.json`

O arquivo `package.json` contém as dependências e scripts necessários para a execução do projeto. No projeto Vue.js, ele terá a seguinte estrutura básica:

```json
{
  "name": "meu-projeto-vue",
  "version": "0.0.1",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview"
  },
  "dependencies": {
    "vue": "^3.0.0"
  },
  "devDependencies": {
    "vite": "^2.0.0"
  }
}
```

Aqui, você pode ver as dependências do **Vue.js** e do **Vite**, que é a ferramenta de build utilizada para rodar o servidor de desenvolvimento e gerar os arquivos de produção.

### ✅ Conclusão

Nesta aula, você aprendeu a **criar um projeto Vue.js** e conheceu a estrutura básica de um projeto. Exploramos os principais arquivos e componentes, além de entender o papel do **`package.json`** para gerenciamento de dependências e scripts. Agora você está pronto para começar a desenvolver aplicações dinâmicas utilizando Vue.js!