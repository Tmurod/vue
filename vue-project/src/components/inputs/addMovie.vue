<template>
  <div class="container my-4 border rounded py-4">
    <h1>Add a new movie</h1>
    <div>
      <form class="d-flex justify-content-between gap-2" @submit.prevent>
        <input
          type="text"
          class="w-50 p-2"
          placeholder="name..."
          v-model="title"
        />
        <input
          type="text"
          class="w-50"
          placeholder="rating..."
          v-model="rating"
        />
        <button class="w-25 btn-secondary" type="submit" @click="addMovie">
          add movie
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      rating: "",
    };
  },
  methods: {
    addMovie() {
      const newMovie = {
        title: this.title,
        rating: this.rating,
        favourite: false,
      };
      this.$emit("addMovie", newMovie);
    },
  },
};
</script>

<style>
</style>