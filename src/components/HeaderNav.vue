<template>
  <v-app-bar app color="white" flat>
    <v-avatar
      :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
      size="32"
    ></v-avatar>
    <img
      src="@/assets/logoleft1.png"
      @click="movePage"
      class="header_title"
      width="240px"
    />
    <v-tabs centered class="ml-n9" color="grey darken-1">
      <v-tab v-for="(link, index) in links" :key="index">
        <router-link :to="link.path">{{ link.name }}</router-link>
      </v-tab>
    </v-tabs>

    <v-avatar
      class="hidden-sm-and-down"
      color="grey darken-1 shrink"
      size="32"
    ></v-avatar>
  </v-app-bar>
</template>
<script>
export default {
  name: "HeaderNav",
  data: () => ({
    links: [
      { name: "AptMain", path: "/aptmain" },
      { name: "Board", path: "/board" },
      { name: "Recommend", path: "/recommend" },
      { name: "Updates", path: "aptmain" },
      // { name: "Login", path: "/user/login" },
      // { name: "Join", path: "/user/join" },
    ],
  }),
  methods: {
    movePage() {
      this.$route.push({ path: "/" });
    },
  },
};
</script>
<style>
a {
  text-decoration: none;
}
.header_title {
  position: absolute;
  left: 40px;
}
</style>
