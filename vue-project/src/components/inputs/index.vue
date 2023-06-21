<template>
  <div class="container">
    <Title :len="movies.length" />
    <Search />
    <List v-for="val in movies" :key="val.id" :movie="val" @remove="remove" />
    <AddMovie @addMovie="addMovie" />
  </div>
</template>

<script>
import Title from "./title.vue";
import Search from "./search.vue";
import List from "./list.vue";
import AddMovie from "./addMovie.vue";
export default {
  components: {
    Title,
    Search,
    List,
    AddMovie,
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
  methods: {
    addMovie(list) {
      this.movies.push(list);
    },
    remove(e) {
      let res = this.movies.filter((val) => val.id !== e);
      this.movies = res;
    },
  },
};
</script>

<style>
</style>