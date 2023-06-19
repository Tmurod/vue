<template>
  <div class="container py-3 border px-5 my-5 rounded">
    <h1>All movies: {{ len }}</h1>
  </div>
</template>

<script>
export default {
  props: ["len"],
};
</script>

<style>
</style>