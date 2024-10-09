<script setup>
const props = defineProps(['tarefas']);
</script>

<template>
  <ul class="list-goup mt-4">
    <li class="list-group-item" v-for="tarefa in props.tarefas">
      <input @change="e => tarefa.finalizada = e.target.checked" :checked="tarefa.finalizada" :id="tarefa.titulo"
        type="checkbox">
      <label :class="{ done: tarefa.finalizada }" class="ms-3" :for="tarefa.titulo">
        {{ tarefa.titulo }}
      </label>
    </li>
  </ul>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>