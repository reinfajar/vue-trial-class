import { defineStore } from 'pinia'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export const useTodosStore = defineStore('todos', {
  state: () => ({
    todoList: []
  }),
  getters: {
    todos: (state) => state.todoList
  },
  actions: {
    getTodos() {
      api({
        url: '/todos',
        method: 'get'
      })
        .then(({ data }) => {
          this.todoList = data
        })
    },
    changeStatusTodo({ id, title, status, date }) {
      api({
        url: '/todos/' + id,
        method: 'patch',
        data: {
          id, title, status: !status, date
        }
      })
        .then(() => {
          this.getTodos()
        })
    },
    addTodo({title, status, date}) {
      api({
        url: '/todos',
        method: 'post',
        data: {
          title, status, date
        }
      })
        .then(() => {
          this.getTodos()
        })
    }
  }
})