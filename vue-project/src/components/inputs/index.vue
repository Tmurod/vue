<template>
  <div class="container">
    <Title :len="movies.length" />
    <Search />
    <List
      v-for="(val, ind) in movies"
      :key="ind"
      :title="val.title"
      :id="val.id"
      :rating="val.rating"
    />
    <Add />
  </div>
</template>

<script>
import Title from "./title.vue";
import Search from "./search.vue";
import List from "./list.vue";
import Add from "./addMovie.vue";
export default {
  components: {
    Title,
    Search,
    List,
    Add,
  },
  data() {
    return {
      movies: [
        { id: 1, title: "Titanik", rating: 50, favourite: false },
        { id: 2, title: "Riddik", rating: 100, favourite: false },
        { id: 3, title: "Ilhaq", rating: 70, favourite: false },
      ],
    };
  },
};
</script>

<style>
</style>