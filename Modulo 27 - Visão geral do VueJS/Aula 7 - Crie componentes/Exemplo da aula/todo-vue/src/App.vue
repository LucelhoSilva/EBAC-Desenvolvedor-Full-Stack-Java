<script setup>
import { reactive } from 'vue';

const estado = reactive({
  filtro: 'todas',
  tarefaTemp: '',
  tarefas: [
    { titulo: 'Estudar ES6', finalizada: false },
    { titulo: 'Estudar VueJS', finalizada: false },
    { titulo: 'Estudar React', finalizada: false },
    { titulo: 'Estudar Angular', finalizada: true },
    { titulo: 'Estudar NodeJS', finalizada: false },
    { titulo: 'Estudar MongoDB', finalizada: false },
    { titulo: 'Estudar MySQL', finalizada: true },
  ],
});

const getTarefasPendentas = () => {
  return estado.tarefas.filter(tarefa => !tarefa.finalizada);
};
const getTarefasFinalizadas = () => {
  return estado.tarefas.filter(tarefa => tarefa.finalizada);
};

const getTarefasFiltradas = () => {

  const { filtro } = estado;

  switch (filtro) {
    case 'pendentes':
      return getTarefasPendentas();
    case 'finalizadas':
      return getTarefasFinalizadas();
    default:
      return estado.tarefas;
      break;
  }
}

const cadastraTarefa = () => {
  const tarefaNova = {
    titulo: estado.tarefaTemp,
    finalizada: false,
  };
  estado.tarefas.push(tarefaNova);
  estado.tarefaTemp = '';
};
</script>

<template>
  <div class="container">
    <header class="p-5 mb-4 mt-4 bg-light rounded-3">
      <h1>Minas Tarefas</h1>
      <p>
        Você possui {{ getTarefasPendentas().length }} tarefas pendentes
      </p>
    </header>
    <form @submit.prevent="cadastraTarefa">
      <div class="row">
        <div class="col">
          <input :value="estado.tarefaTemp" @change="e => estado.tarefaTemp = e.target.value" required type="text"
            placeholder="Digite aqui a descrição da tarefa" class="form-control">
        </div>
        <div class="col-md-2">
          <button type="submit" class="btn btn-primary">Cadastrar</button>
        </div>
      </div>
      <div class="col-md-2">
        <select @change="e => estado.filtro = e.target.value" class="form-control">
          <option value="todas">Todas tarefas</option>
          <option value="pendentes">Pendentes</option>
          <option value="finalizadas">Finalizadas</option>
        </select>
      </div>
    </form>
    <ul class="list-goup mt-4">
      <li class="list-group-item" v-for="tarefa in getTarefasFiltradas()">
        <input @change="e => tarefa.finalizada = e.target.checked" :checked="tarefa.finalizada" :id="tarefa.titulo"
          type="checkbox">
        <label :class="{ done: tarefa.finalizada }" class="ms-3" :for="tarefa.titulo">
          {{ tarefa.titulo }}
        </label>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
