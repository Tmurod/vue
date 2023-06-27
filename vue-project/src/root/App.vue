<template>
  <div class="">
    <div
      class="d-flex justify-content-center gap-5"
      v-for="val in navbar"
      :key="val.id"
    >
      <router-link :to="val.to">{{ val.title }}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbar: [
        {
          id: 1,
          to: "/counter",
          title: "Counter",
        },
        {
          id: 2,
          to: "/inputs",
          title: "Inputs",
        },
      ],
    };
  },
};
</script>

<style>
</style>