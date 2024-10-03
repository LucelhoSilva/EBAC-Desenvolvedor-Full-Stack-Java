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

const enderecoDaImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAlc1H4GMy5QfQug3iJAIE8SUmx6pAJjFJg&s";

const botaoEstaDesabilitado = false;

</script>

<template>
  <h1>{{ dizOla("lucelho") }}</h1>
  <img :src="enderecoDaImage" alt="Imagem do Google">

  <button :disabled="botaoEstaDesabilitado"> enviar mensagem</button>
</template>

<style scoped>
</style>
