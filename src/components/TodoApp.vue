<template>
  <pre>
    {{ todos }}
    {{ type }}
  </pre>
</template>

<script>
export default {
  name: 'TodoApp',
  props: ['todos', 'type'],
};
</script>

<style scoped>

</style>

