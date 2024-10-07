## 📝 Aula 06: Trabalhe com listas

### ✅ Introdução

Nesta aula, aprenderemos a **manipular listas de elementos** no Vue.js, facilitando a renderização dinâmica de conteúdos na interface com base em coleções de dados. Manipular listas é uma das tarefas mais comuns em aplicações web, e o Vue.js oferece mecanismos simples e eficientes para isso.

### ✅ Objetivos

- Renderizar listas de itens de forma dinâmica.
- Usar o `v-for` para iterar sobre arrays e exibir dados na interface.
- Adicionar novos itens a uma lista de forma reativa.
- Manter a interface atualizada automaticamente com a inserção de novos elementos.

### ✅ Renderização de Listas com `v-for`

No Vue.js, utilizamos a diretiva `v-for` para iterar sobre arrays e renderizar cada item individualmente na interface. Essa abordagem é muito útil para exibir coleções de dados, como listas de produtos, nomes, tarefas, etc.

#### Exemplo básico:

```html
<ul>
  <li v-for="nome in estado.nomes" :key="nome">
    {{ nome }}
  </li>
</ul>
```

No exemplo acima, estamos percorrendo a lista `estado.nomes` e renderizando cada nome dentro de uma tag `<li>`. A diretiva `v-for` também requer a utilização de uma chave única (`key`), que ajuda o Vue a identificar e otimizar as renderizações de itens.

### ✅ Adicionando Itens à Lista

Vamos agora adicionar um campo de entrada e um botão que permitirá ao usuário inserir novos nomes na lista. Utilizaremos a função `cadastraNome` para validar o nome e adicioná-lo à lista caso ele tenha pelo menos 3 caracteres.

#### Exemplo:

```javascript
const estado = reactive({
  nomes: ['João', 'Maria', 'José', 'Pedro', 'Ana'],
  nomeAInserir: '',
});

function cadastraNome() {
  if (estado.nomeAInserir.length >= 3) {
    estado.nomes.push(estado.nomeAInserir);
    estado.nomeAInserir = '';  // Limpa o campo após inserir o nome
  }
  else {
    alert('O nome deve ter no mínimo 3 caracteres');
  }
}
```

Aqui, a função `cadastraNome` insere o nome na lista `estado.nomes` se a validação for bem-sucedida, e limpa o campo de entrada após a inserção.

### ✅ Exemplo Completo

Abaixo está um exemplo completo que ilustra como renderizar uma lista de nomes e permitir ao usuário adicionar novos nomes a essa lista de forma dinâmica:

```html
<script setup>
import { reactive } from 'vue';

const estado = reactive({
  nomes: ['João', 'Maria', 'José', 'Pedro', 'Ana'],
  nomeAInserir: '',
});

function cadastraNome() {
  if (estado.nomeAInserir.length >= 3) {
    estado.nomes.push(estado.nomeAInserir);
    estado.nomeAInserir = '';  // Limpa o campo de entrada após inserir o nome
  }
  else {
    alert('O nome deve ter no mínimo 3 caracteres');
  }
}
</script>

<template>
  <!-- Lista de nomes -->
  <ul>
    <li v-for="nome in estado.nomes" :key="nome">
      {{ nome }}
    </li>
  </ul>

  <!-- Campo para inserir novo nome -->
  <input @keyup="e => estado.nomeAInserir = e.target.value" v-model="estado.nomeAInserir" type="text" placeholder="Digite um novo nome">
  
  <!-- Botão para cadastrar nome -->
  <button @click="cadastraNome" type="button">Cadastrar nome</button>

  <!-- Renderização opcional da lista em outro lugar -->
  <h3 v-for="nome in estado.nomes" :key="nome"> {{ nome }}</h3>
</template>

<style scoped>
/* Adicione aqui seus estilos personalizados */
</style>
```

Neste exemplo:

- A lista de nomes é renderizada duas vezes: uma na tag `<ul>` e outra nos `<h3>`. O Vue.js mantém ambas sincronizadas automaticamente.
- O campo de entrada captura o valor que o usuário digita e, ao clicar no botão, o nome é validado e adicionado à lista.
- O `v-model` no campo de entrada mantém o estado reativo e atualizado conforme o usuário digita.

### ✅ Conclusão

Nesta aula, aprendemos a **manipular e renderizar listas** no Vue.js utilizando a diretiva `v-for`. Também vimos como adicionar itens a uma lista de forma reativa, garantindo que a interface seja atualizada automaticamente. Manipular listas é essencial para construir interfaces dinâmicas e interativas, e o Vue.js simplifica bastante esse processo.