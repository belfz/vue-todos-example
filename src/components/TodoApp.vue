<template>
  <div>
    <!-- TODO add links to all / done / undone -->
    <div>
      <router-link to="/todos/all">all</router-link>
      <router-link to="/todos/done">done</router-link>
      <router-link to="/todos/undone">undone</router-link>
    </div>
    <input type="text" @keyup.enter="addTodo">
    <TodoItem v-for="todoItem of filteredTodos" :key="todoItem.id" :item="todoItem" :toggleDone="toggleDone" @removexxx="removeTodo"></TodoItem>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem';
import uuidv1 from 'uuid/v1';

const saveTodos = todos => localStorage.setItem('todos', JSON.stringify(todos));

export default {
  name: 'TodoApp',
  props: ['initialTodos', 'type'],
  data() {
    return {
      todos: this.initialTodos,
    };
  },
  computed: {
    filteredTodos() {
      switch (this.type) {
        case 'done':
          return this.todos.filter(({ done }) => done);
        case 'undone':
          return this.todos.filter(({ done }) => !done);
        default:
          return this.todos;
      }
    },
  },
  methods: {
    addTodo({ target }) {
      this.todos.push({
        done: false,
        text: target.value,
        id: uuidv1(),
      });
      // eslint-disable-next-line
      target.value = '';
      saveTodos(this.todos);
    },
    removeTodo(element) {
      const index = this.todos.findIndex(el => el === element);
      this.todos.splice(index, 1);
      saveTodos(this.todos);
    },
    toggleDone(element) {
      // eslint-disable-next-line
      element.done = !element.done;
      saveTodos(this.todos);
    },
  },
  components: {
    TodoItem,
  },
};
</script>

<style scoped>
  div {
    width: 50%;
    margin: 0 auto;
  }
</style>

