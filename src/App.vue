<template>
  <v-app>
    <header-nav></header-nav>
    <v-main class="grey lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
export default {
  name: 'App',
  components:{
    HeaderNav
  },
  data: () => ({
    //
  }),
};
</script>
