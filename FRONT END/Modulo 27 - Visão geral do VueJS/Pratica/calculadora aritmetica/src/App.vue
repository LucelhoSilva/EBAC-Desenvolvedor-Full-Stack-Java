<script setup>
import Cabecalho from './components/Cabecalho.vue';
import calculadoraAritmetica from './components/calculadoraAritmetica.vue';
</script>

<template>
  <div class="app-container">
    <div class="container">
      <Cabecalho />
      <calculadoraAritmetica />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  height: 100%;
}

.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: rgb(2, 0, 36);
  background: radial-gradient(circle, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 50%, rgba(0, 212, 255, 1) 100%);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 500px;
  min-height: 400px;
  background-color: rgb(248, 248, 248);
  color: #ccc;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>