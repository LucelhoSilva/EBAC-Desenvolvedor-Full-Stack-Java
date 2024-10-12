<script setup>
import { ref, computed } from 'vue';

const num1 = ref(0);
const num2 = ref(0);
const operacao = ref('+');

const result = computed(() => {
  switch (operacao.value) {
    case '+':
      return num1.value + num2.value;
    case '-':
      return num1.value - num2.value;
    case '*':
      return num1.value * num2.value;
    case '%':
      return num1.value % num2.value;
    case '/':
      return num2.value !== 0 ? num1.value / num2.value : 'Erro: Divisão por zero';
    default:
      return 'Operação inválida';
  }
});
</script>

<template>
  <main>
    <div class="input-group">
      <input v-model.number="num1" type="number" placeholder="Número 1">
      <select v-model="operacao">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">×</option>
        <option value="%">%</option>
        <option value="/">÷</option>
      </select>
      <input v-model.number="num2" type="number" placeholder="Número 2">
    </div>
    <div class="result">
      Resultado: {{ result }}
    </div>
  </main>
</template>

<style scoped>
.input-group {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.input-group input,
.input-group select {
  width: 120px;
  height: 35px;
  font-size: 20px;
  text-align: center;
  margin: 50px 10px;
}

.result {
  margin-top: 50px;
  font-size: 20px;
  color: black;
  font-weight: bold;
}
</style>