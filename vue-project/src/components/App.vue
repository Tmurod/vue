<template>
  <div class="app">
    <AppInfoVue />
  </div>
</template>

<script>
import AppInfoVue from "@/components/app-info/AppInfo.vue";
export default {
  components: {
    AppInfoVue,
  },
};
</script>

<style>
.app {
  background: purple;
  
}
</style>