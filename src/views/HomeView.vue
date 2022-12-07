<script>
import TheWelcome from '../components/TheWelcome.vue'
import { mapActions } from 'pinia'
import { useTodosStore } from '../stores/todos'
export default {
  components: {
    TheWelcome
  },
  methods: {
    ...mapActions(useTodosStore, ['getTodos'])
  },
  created () {
    this.getTodos()
  }
}
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
