<template>
  <div class="container my-4 border rounded py-4">
    <h1>Add a new movie</h1>
    <div>
      <form class="d-flex justify-content-between gap-2" @submit="prevent">
        <input type="text" class="w-50 p-2" placeholder="name..."  />
        <input type="text" class="w-50" placeholder="rating..." />
        <button class="w-25 btn-secondary" type="submit">add movie</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style>
</style>