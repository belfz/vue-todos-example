import Vue from 'vue';
import TodoApp from '@/components/TodoApp';

describe('TodoApp.vue', () => {
  let vm;

  beforeEach(() => {
    const Constructor = Vue.extend(TodoApp);
    vm = new Constructor({ propsData: { initialTodos: [] } });
    window.localStorage = { setItem: jest.fn() };
  });

  it('should save new todo', () => {
    const event = { target: { value: 'newTodo' } };
    vm.addTodo(event);
    expect(vm.todos.length).toEqual(1);
    expect(window.localStorage.setItem.mock.calls.length).toEqual(1);
    expect(event.target.value).toEqual('');
  });
});
