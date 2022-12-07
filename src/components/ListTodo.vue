<template>
  <div class="todo-list">
    <ol class="list-group list-group-numbered">
      <li
        v-for="(todo, index) in todoList"
        :key="index"
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ todo.title }}</div>
          {{ todo.date }}
        </div>
        <button
          class="badge rounded-pill"
          :class="todo.status ? 'bg-success' : 'bg-danger'"
          @click.prevent="changeStatusTodo(todo)"
        >
          {{todo.status ? 'Done' : 'Not Done'}}
        </button>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useTodosStore } from '../stores/todos'
export default {
  computed: {
    ...mapState(useTodosStore, ['todoList'])
  },
  methods: {
    ...mapActions(useTodosStore, ['changeStatusTodo'])
  }
}
</script>

<style>

</style>