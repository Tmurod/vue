<template>
  <div class="app container">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium est
    veritatis laudantium. Iste perferendis porro sint? Ratione voluptates sequi
    <!-- minus amet nostrum expedita quo voluptate id, voluptatem cumque? Amet, ipsa. -->
<i class="fas fa-trash"></i>
    <form v-on:submit.prevent="plus">
      <input type="text" v-model="name" />
      <button type="submit">++</button>
    </form>
    <p v-for="(val, ind) in list" v-bind:key="{ ind }">
      {{ ind }} : {{ val.name }}
    </p>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      name: null,
      number: null,
      list: [
        {
          name: "ermat",
          number: 20,
        },
      ],
    };
  },
  methods: {
    plus(e) {
      let items = {
        n: this.name,
        num: this.number,
      };
      this.list.push(items);
      this.name = null;
      this.number = null;
    },
  },
};
</script>

<style>
.app {
  background: coral;
}
</style>