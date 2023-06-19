<template>
  <div class="container border rounded">
    <div class="d-flex align-items-center justify-content-between">
      <h2 class="py-3">{{ title }}</h2>
      <h2>
        {{ rating }}
      </h2>
      <div class="d-flex gap-2">
        <button class="border-0 btn">
          <i class="fas fa-trash"></i>
        </button>
        <button class="border-0 btn">
          <i class="fas fa-star text-warning "></i>
        </button>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "Game of thrones",
      validator(val) {
        return true;
      },
    },
    id: {
      type: Number,
      required: true,
      default: 10,
      validator(val) {
        return true;
      },
    },
    rating: {
      type: Number,
      required: true,
      default: 100,
    },
  },
};
</script>

<style scoped>
.fa-star {
  transition: 0.8s;
  transform: translate(30px);
  opacity: 0;
}
.star {
  opacity: 1;
  transform: translate(0);
}
</style>