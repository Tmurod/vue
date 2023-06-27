<template>
  <div class="container">
    <Title :len="movies.length" />
    <Search @onSearch="onSearch" />
    <List v-for="val in movies" :key="val.id" :movie="val" @remove="remove" />
    <AddMovie @addMovie="addMovie" />
  </div>
</template>

<script>
import Title from "./title.vue";
import Search from "./search.vue";
import List from "./list.vue";
import AddMovie from "./addMovie.vue";
import axios from "axios";
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
        { id: 1, title: "Titanik", rating: 50, favourite: false, like: false },
        { id: 2, title: "Riddik", rating: 100, favourite: false, like: false },
        { id: 3, title: "Ilhaq", rating: 70, favourite: false, like: false },
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
    onSearch(e) {
      this.movies = this.movies.filter((val) => {
        return val.title.toLowerCase().includes(e);
      });
    },
  },
};
</script>

<style>
</style>