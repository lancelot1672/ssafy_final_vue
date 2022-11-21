<template>
  <index-view></index-view>
</template>

<script>
import IndexView from "./views/IndexView.vue";
export default {
  name: "App",
  components: {
    IndexView,
  },
  data: () => ({
    //
  }),
};
</script>
<style>
.container {
  max-width: 1500px;
}
</style>
