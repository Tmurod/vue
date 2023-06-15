<template>
  <div
    class="container d-flex flex-column bg-white rounded border border-warning text-center my-5 py-5"
  >
    <h2 v-if="selected === 1">Default selected: {{ selected }}</h2>
    <h2 v-else>Your selected: {{ selected }}</h2>
    <select
      name="sonlar"
      v-model="selected"
      class="custom-select border-primary rounded my-5 text-center"
      id="inputGroupSelect01"
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <h1>Coutner: {{ counter }}</h1>
    <div class="btns d-flex justify-content-center p-5 gap-5">
      <button
        class="btn btn-success px-5"
        @click="counter = counter + +selected"
      >
        add
      </button>
      <button
        class="btn btn-danger px-5"
        @click="counter = counter - +selected"
      >
        remove
      </button>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      selected: 1,
    };
  },
};
</script>

<style scoped>
body {
  background: grey;
}
</style>