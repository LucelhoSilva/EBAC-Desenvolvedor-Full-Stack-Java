## 📝 Aula 03: Faça a renderização condicional

### ✅ Introdução

Nesta aula, vamos aprender como **realizar a renderização condicional** de elementos com base em condições no Vue.js. Renderizar condicionalmente é uma técnica importante quando precisamos mostrar ou esconder elementos da interface dependendo de variáveis ou estados específicos.

### ✅ Objetivos

- Realizar a renderização condicional de conteúdo usando as diretivas `v-if`, `v-else-if` e `v-else`.
- Entender as diferenças entre `v-if` e `v-show`.
- Praticar o controle de exibição de elementos de forma dinâmica e eficiente.

### ✅ Renderização Condicional com `v-if`

O Vue.js oferece a diretiva `v-if` para **renderizar elementos condicionalmente**. Se a condição for verdadeira, o elemento é renderizado. Caso contrário, ele é removido do DOM.

#### Exemplo:

```html
<img v-if="gostaDoBatman" :src="enderecoDaImage" alt="Imagem do Google">
```

- Se a variável `gostaDoBatman` for verdadeira, a imagem será renderizada. Caso contrário, ela não será exibida.

### ✅ Usando `v-else-if` e `v-else`

Para **criar condições alternativas**, podemos usar `v-else-if` e `v-else`, que funcionam como em outras linguagens de programação. Essas diretivas funcionam em conjunto com `v-if` para testar várias condições.

#### Exemplo:

```html
<img v-else-if="gostaDoSuperman" :src="enderecoDaImage2" alt="Imagem do Superman">
<h2 v-else>Não curte heróis da DC</h2>
```

- Se a condição `gostaDoBatman` não for atendida, o Vue.js testa `gostaDoSuperman`. Se nenhuma das condições for verdadeira, o Vue renderiza o conteúdo de `v-else`.

### ✅ Renderização com `v-show`

Diferente de `v-if`, a diretiva `v-show` **não remove o elemento do DOM** quando a condição é falsa. Ela apenas altera a propriedade CSS `display` para `none`. Isso pode ser mais eficiente quando você apenas deseja **esconder** elementos sem removê-los do DOM.

### ✅ Cuidado com o Agrupamento

Ao usar **`v-if`, `v-else-if` e `v-else`**, é importante manter o agrupamento correto dessas diretivas para evitar problemas de renderização. Todas devem estar relacionadas ao mesmo bloco condicional.

### ✅ Exemplo Completo

Aqui está um exemplo de aplicação prática das diretivas de renderização condicional:

```html
<script setup>
const nome = "Lucelho Silva";
const meuObj = {
  nome: "Lucelho Silva",
  idade: 25,
  cidade: "São Paulo"
}

function dizOla(nome) {
  return `Olá, meu nome é ${nome}, tenho ${meuObj.idade} anos, sou da cidade de ${meuObj.cidade}`;
}

const enderecoDaImage = "https://img.odcdn.com.br/wp-content/uploads/2024/06/imagem_2024-06-17_151110069.jpg";
const enderecoDaImage2 = "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png";

const botaoEstaDesabilitado = false;

const gostaDoBatman = false;
const gostaDoSuperman = false;

const estaAutorizado = false;
</script>

<template>
  <h1>{{ dizOla("Lucelho") }}</h1>
  
  <!-- Renderização condicional de imagens -->
  <img v-if="gostaDoBatman" :src="enderecoDaImage" alt="Imagem do Batman">
  <img v-else-if="gostaDoSuperman" :src="enderecoDaImage2" alt="Imagem do Superman">

  <!-- Renderização condicional de textos -->
  <h1 v-if="estaAutorizado">Bem-vindo!</h1>
  <h2 v-else>Não curte heróis da DC</h2>
  
  <!-- Botão com estado controlado -->
  <button :disabled="botaoEstaDesabilitado">Enviar Mensagem</button>
</template>

<style scoped>
img {
  max-width: 200px;
}
</style>
```

### ✅ Conclusão

Com a renderização condicional usando `v-if`, `v-else-if`, `v-else`, e `v-show`, conseguimos **controlar a exibição de elementos** de forma eficiente no Vue.js. Essa técnica é fundamental para a criação de interfaces dinâmicas, permitindo que o conteúdo seja exibido conforme as condições desejadas.