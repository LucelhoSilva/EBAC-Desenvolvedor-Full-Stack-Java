## 📝 Aula 04: Utilize eventos para manipular dados

### ✅ Introdução

Nesta aula, aprenderemos a **utilizar eventos para manipular dados** e a explorar a **reatividade** no Vue.js. A reatividade é um dos recursos mais poderosos do Vue.js, permitindo que os dados sejam **atualizados automaticamente** na interface sempre que seu estado mudar.

### ✅ Objetivos

- Compreender como eventos podem ser usados para modificar o estado.
- Manipular o DOM com eventos como `@click`, `@keyup`, e `@change`.
- Explorar a **reatividade** do Vue.js com o uso de `reactive` para atualizar a interface em tempo real.

### ✅ Reatividade com `reactive`

O Vue.js oferece o `reactive`, que transforma um objeto comum em um **objeto reativo**. Quando as propriedades desse objeto são alteradas, o Vue automaticamente reflete essas mudanças na interface.

```javascript
const estado = reactive({
  contador: 0,
  email: '',
});
```

Neste exemplo, `estado` é um objeto que possui as propriedades `contador` e `email`. Qualquer modificação feita nesses dados será automaticamente exibida na interface.

### ✅ Manipulação de eventos

Podemos associar eventos a elementos da interface para capturar interações do usuário e modificar o estado. No Vue.js, os eventos são definidos com o prefixo `@`:

- **@click**: É disparado quando o botão ou elemento é clicado.
- **@keyup**: Captura cada tecla pressionada enquanto o usuário digita.
- **@change**: Dispara o evento apenas quando o campo perde o foco (não após cada tecla pressionada, como o `@keyup`).

#### Exemplo de uso de eventos:

```html
<button @click="incrementar" type="button">+</button>
<button @click="decrementar" type="button">-</button>
<input type="email" @keyup="alteraEmail">
```

- O evento `@click` é usado para manipular o incremento e o decremento do contador.
- O evento `@keyup` captura cada tecla pressionada no campo de e-mail e atualiza o estado automaticamente.

### ✅ Diferença entre `@keyup`, `@change`, e `@click`

- **@keyup**: Disparado **toda vez** que uma tecla é pressionada no campo de entrada, sem precisar sair do campo.
- **@change**: Ocorre apenas quando o usuário sai do campo após realizar uma modificação.
- **@click**: Disparado quando um botão ou outro elemento interativo é **clicado**.

### ✅ Exemplo Completo

Aqui está um exemplo prático que ilustra a reatividade e manipulação de eventos em Vue.js:

```html
<script setup>
import { reactive } from 'vue';

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

  <!-- Exibe o contador -->
  {{ estado.contador }}

  <!-- Botões de incrementar e decrementar -->
  <button @click="incrementar" type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br />
  <hr />

  <!-- Exibe o email e campo de entrada -->
  {{ estado.email }}
  <input type="email" @keyup="alteraEmail">
</template>

<style scoped>
img{
  max-width: 200px;
}
</style>
```

### ✅ Conclusão

Nesta aula, vimos como **manipular dados e eventos** com o Vue.js. Usamos a reatividade para garantir que o Vue atualize automaticamente a interface sempre que houver alterações nos dados. Utilizamos os eventos como `@click`, `@keyup`, e `@change` para capturar as interações do usuário e manipular esses dados de forma eficiente. A reatividade do Vue.js facilita muito esse processo, tornando a atualização da interface praticamente automática, sem a necessidade de código adicional para renderizar novamente a UI.