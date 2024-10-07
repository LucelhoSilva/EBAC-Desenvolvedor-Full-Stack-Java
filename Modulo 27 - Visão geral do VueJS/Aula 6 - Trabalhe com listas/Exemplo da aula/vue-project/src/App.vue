<script setup>
import { reactive } from 'vue';

const estado = reactive({
  nomes: ['João', 'Maria', 'José', 'Pedro', 'Ana'],
  nomeAInserir: '',
});

function cadastraNome() {
  if (estado.nomeAInserir.length >= 3) {
    estado.nomes.push(estado.nomeAInserir);
  }
  else {
    alert('O nome deve ter no mínimo 3 caracteres');
  }
}

</script>

<template>
<ul>
  <li v-for="nome in estado.nomes">
    {{ nome }}
  </li>
</ul>
<input @keyup="e => estado.nomeAInserir = e.target.value" type="text" placeholder="Digite um novo nome">
<button @click="cadastraNome" type="button">Cadastrar nome</button>

<h3 v-for="nome in estado.nomes"> {{ nome }}</h3>
</template>

<style scoped>

</style>
