<template>
  <div class="mb-5 bg-white rounded">
    <form @submit.prevent="onSubmit" class="py-3 green px-3">
      <div class="row mb-3">
        <label for="text" class="col-sm-2 col-form-label">To Do</label>
        <div class="col-sm-10">
          <input v-model="text" type="text" class="form-control" id="text" />
        </div>
      </div>
      <div class="row mb-3">
        <label for="date" class="col-sm-2 col-form-label">Date</label>
        <div class="col-sm-10">
          <input v-model="date" type="date" class="form-control" id="date" />
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-success">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useTodosStore } from '../stores/todos'
export default {
  data() {
    return {
      text: '',
      date: ''
    }
  },
  methods: {
    ...mapActions(useTodosStore, ['addTodo']),
    onSubmit() {
      // console.log('hello world')
      this.addTodo({
        title: this.text,
        date: this.date,
        status: false
      })
    }
  }
}
</script>

<style>

</style>