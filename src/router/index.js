import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Elo from '@/components/Elo';
import TodoApp from '@/components/TodoApp';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/elo',
      name: 'Elo',
      component: Elo,
      props: () => ({ answer: 42 }),
    },
    {
      path: '/todos/:type?',
      name: 'TodoApp',
      component: TodoApp,
      props: ({ params }) => {
        const serializedTodos = localStorage.getItem('todos');
        const { type = 'all' } = params;

        if (serializedTodos) {
          return { todos: JSON.parse(serializedTodos), type };
        }
        return { todos: [], type };
      },
    },
  ],
});
