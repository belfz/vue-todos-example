<template>
  <div>
    <p @click="toggleDone(item)" :class="{ done: item.done }">{{ item.text }}</p>
    <button @click="remove">x</button>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  methods: {
    remove() {
      this.$emit('removexxx', this.item);
    },
  },
  props: ['item', 'toggleDone'],
};
</script>

<style scoped>
  div {
    align-items: center;
    display: flex;
    justify-content: space-between
  }

  p.done {
    text-decoration: line-through;
  }
</style>
