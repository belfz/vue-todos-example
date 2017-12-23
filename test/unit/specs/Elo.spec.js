import Vue from 'vue';
import Elo from '@/components/Elo';

describe('Elo.vue', () => {
  let vm;

  beforeEach(() => {
    const Constructor = Vue.extend(Elo);
    vm = new Constructor({ propsData: { answer: 42 } });
  });

  it('should set initial value of \'a\'', () => {
    expect(vm.answer).toEqual(42);
  });

  it('should render correct contents', () => {
    vm.$mount();
    expect(vm.$el.querySelector('p').textContent).toEqual('no elo, 42');
    expect(vm.$el.querySelectorAll('button').length).toEqual(2);
  });

  it('should increment \'a\' value', () => {
    vm.incr();
    expect(vm.answer).toEqual(43);
  });

  it('should decrement \'a\' value', () => {
    vm.decr();
    expect(vm.answer).toEqual(41);
  });
});
