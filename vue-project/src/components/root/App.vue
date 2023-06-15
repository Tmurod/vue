<template>
  <div class="container">
    <Counter />
    <Input />
  </div>
</template>

<script>
import Counter from "../counter/counter.vue";
import Input from "../inputs/index.vue";
export default {
  components: {
    Counter,
    Input,
  },
};
</script>

<style>
</style>