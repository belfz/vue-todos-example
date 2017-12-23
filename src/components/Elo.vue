<template>
  <div>
    <p>no elo, {{ answer }}</p>
    <button v-on:click="incr">+1</button>
    <button v-on:click="decr">-1</button>
  </div>
</template>

<script>
export default {
  name: 'Elo',
  methods: {
    incr() {
      this.answer += 1;
    },
    decr() {
      this.answer -= 1;
    },
  },
  props: ['answer'],
};
</script>

<style scoped>
p {
  color: burlywood;
}
button {
  width: 5em;
}
</style>
