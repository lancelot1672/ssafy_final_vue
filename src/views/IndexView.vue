<template>
  <v-app>
    <header-nav></header-nav>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  name: "App",
  components: {
    HeaderNav,
    // SelectCondition,
    // AptInfoList,
    // SimpleInfoList,
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
