<script setup>
const nome = "Lucelho Silva";
const meuObj = {
  nome: "Lucelho Silva",
  idade: 25,
  cidade: "São Paulo"
}

function dizOla(nome) {
  return `Olá meu nome é ${nome}, tenho ${meuObj.idade} anos, sou da cidade de ${meuObj.cidade}`;
}

const enderecoDaImage = "https://img.odcdn.com.br/wp-content/uploads/2024/06/imagem_2024-06-17_151110069.jpg";
const enderecoDaImage2 = "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png";

const botaoEstaDesabilitado = false;

const gostaDoBatman = false;
const gostaDoSuperman = false;

const estaAutorizado = false;
</script>

<template>
  <h1>{{ dizOla("lucelho") }}</h1>
  <img  v-if="gostaDoBatman" :src="enderecoDaImage" alt="Imagem do Google">
  <img  v-else-if="gostaDoSuperman" :src="enderecoDaImage2" alt="Imagem do Google">

  
  <h1 v-if="estaAutorizado">Bem-Vindo</h1>
  <h2 v-else>Não curte heróis da DC</h2>
  <h1 v-else>Não possui acesso</h1> 

  <button :disabled="botaoEstaDesabilitado"> enviar mensagem</button>
</template>

<style scoped>
img{
  max-width: 200px;
}
</style>
