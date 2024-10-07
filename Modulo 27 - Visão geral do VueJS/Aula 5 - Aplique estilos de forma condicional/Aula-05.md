## 📝 Aula 05: Aplique estilos de forma condicional

### ✅ Introdução

Nesta aula, vamos aprender a **aplicar estilos de forma condicional** utilizando Vue.js, o que nos permite alterar o visual de elementos da interface com base em determinadas condições. Isso é útil para fornecer feedback visual ao usuário ou destacar situações especiais na interface, como erros ou validações.

### ✅ Objetivos

- Aplicar classes CSS de forma condicional.
- Manipular a aparência de elementos com base em valores dinâmicos.
- Explorar o uso de **bindings** reativos no Vue.js para alterar classes de acordo com condições específicas.

### ✅ Classes Condicionais com Vue.js

No Vue.js, podemos aplicar classes de maneira condicional utilizando a **ligação de atributos** com o `v-bind` (ou o atalho `:`). Isso é feito utilizando uma sintaxe especial que nos permite definir **objetos** onde as chaves são os nomes das classes e os valores são as condições que determinam se essas classes devem ser aplicadas ou não.

#### Exemplo:

```html
<input :class="{ invalido: !validaTransferencia() }" type="number" placeholder="Quantia para transferir">
```

Aqui, a classe `invalido` será aplicada ao campo de entrada somente quando a função `validaTransferencia()` retornar `false`. Caso contrário, a classe não será aplicada.

### ✅ Manipulando Condições

Podemos criar funções ou computar propriedades para validar determinadas condições e aplicar os estilos conforme necessário. Vamos ver um exemplo prático onde aplicamos estilos condicionais com base no saldo de uma conta bancária e a quantia que está sendo transferida.

```javascript
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
  return transferindo <= saldo;
}
```

- **`mostraSaldoFuturo`**: Calcula o saldo futuro após a transferência.
- **`validaTransferencia`**: Valida se a quantia a ser transferida não excede o saldo disponível.

### ✅ Aplicando Estilos Dinâmicos

Usando o exemplo acima, podemos criar uma interface simples que destaca erros de validação, aplicando uma borda vermelha ao campo de transferência se o valor inserido for maior que o saldo.

```html
<template>
  <br/>
  <hr/>

  Saldo: {{ estado.saldo }} <br>
  Transferindo: {{ estado.transferindo }} <br>
  Saldo depois da transferência: {{ mostraSaldoFuturo() }} <br>

  <!-- Campo de transferência com classe condicional -->
  <input :class="{ invalido: !validaTransferencia() }" @keyup="e => estado.transferindo = parseInt(e.target.value)" type="number" placeholder="Quantia para transferir">
  
  <!-- Botão de transferência com validação -->
  <button v-if="validaTransferencia()" @click="estado.saldo -= estado.transferindo">Transferir</button>
  <span v-else> Valor maior que o saldo</span>
</template>
```

Nesse código, a classe `invalido` será aplicada ao campo de entrada se o valor digitado for maior que o saldo disponível. Se a validação for positiva, o botão de transferência é exibido; caso contrário, uma mensagem de erro aparece.

### ✅ Estilos no CSS

Definimos os estilos da classe `invalido` no arquivo CSS para garantir que o campo tenha um visual de erro quando necessário.

```css
<style scoped>
.invalido {
  outline-color: red;
  border-color: red;
}
</style>
```

Quando a classe `invalido` for aplicada, o campo de entrada ganhará uma borda vermelha, indicando um erro de validação.

### ✅ Conclusão

Nesta aula, vimos como aplicar **estilos de forma condicional** no Vue.js, utilizando a reatividade para alterar a aparência da interface com base em valores dinâmicos e condições específicas. Esse recurso é fundamental para fornecer um feedback visual claro e eficiente ao usuário, especialmente em formulários ou situações onde a validação de dados é necessária.

