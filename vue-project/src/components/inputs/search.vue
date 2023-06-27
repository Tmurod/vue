<template>
  <div class="container d-flex flex-column border rounded px-5 my-5 py-3">
    <h2 class="py-2">search movie</h2>
    <input
      type="text"
      placeholder="search..."
      class="py-2"
      v-model="search"
      @input="onSearch"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    onSearch(e) {
      this.$emit("onSearch", e.target.value);
    },
  },
};
</script>

<style>
</style>