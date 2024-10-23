<script setup>
import { reactive } from 'vue';

const estado = reactive({
  saldo: 5000,
  transferindo: 0,
});

function mostraSaldoFuturo() {
  const { saldo, transferindo } = estado;
  return saldo - transferindo;
}

function validaTransferencia() {
  const { saldo, transferindo } = estado;
  return transferindo > saldo;
}

</script>

<template>
 <br/>
 <hr/>

 Saldo: {{ estado.saldo }} <br>
 Transferindo: {{ estado.transferindo }} <br>
 Saldo depois da transferência: {{mostraSaldoFuturo}} <br>

<input :class="{invalido: !validaTransferencia() }" @keyup="e => e.transferindo = e.target.value" type="number" placeholder="Quantia para transferir">
<button v-if="validaTransferencia()"> Transferir</button>
<span v-else> Valor maior que o saldo</span>
</template>

<style scoped>
img{
  max-width: 200px;
}

.invalido{
  outline-color: red;
  border-color: red;
}
</style>
