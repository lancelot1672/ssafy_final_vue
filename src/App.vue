<template>
  <v-app>
    <header-nav></header-nav>

    <v-main class="grey lighten-3">
      <select-condition></select-condition>
      <apt-info-list></apt-info-list>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import SelectCondition from "@/components/SelectCondition.vue";
import AptInfoList from "@/components/AptInfoList.vue";
export default {
  name: 'App',
  components:{
    HeaderNav,
    SelectCondition,
    AptInfoList,
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
