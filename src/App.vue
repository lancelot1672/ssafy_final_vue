<template>
  <v-app>
    <header-nav></header-nav>

    <!-- <v-main class="grey lighten-3"> -->
    <v-main>
      <!--    <select-condition></select-condition>
      <apt-info-list></apt-info-list>
      <simple-info-list></simple-info-list> -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
// import SelectCondition from "@/components/SelectCondition.vue";
// import AptInfoList from "@/components/AptInfoList.vue";
// import SimpleInfoList from "@/components/AptSimpleInfo.vue";
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
