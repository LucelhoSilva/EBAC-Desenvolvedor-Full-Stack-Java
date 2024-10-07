<script setup>
import { reactive } from 'vue';
// let contador = 0;
const estado = reactive({
  contador: 0,
  email: '',
});

function incrementar() {
  estado.contador++;
}

function decrementar() {
  estado.contador--;
}

function alteraEmail(e) {
  estado.email = e.target.value;
}
</script>

<template>
  <br />
  <hr />

  {{ estado.contador }}

  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br />
  <hr />

  {{ estado.email }}
  <input type="email" @keyup="alteraEmail">
</template>

<style scoped>
img{
  max-width: 200px;
}
</style>
