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

    <!-- <v-avatar
      class="hidden-sm-and-down"
      color="grey darken-1 shrink"
      size="32"
    ></v-avatar> -->
    <span class="auth" v-if="!userInfo">
      <a href="/user/login">Login</a>
      <a href="/user/join">Join</a>
    </span>
    <span class="auth" v-if="userInfo">
      <a @click="onclickLogout">Logout</a>
    </span>
  </v-app-bar>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "HeaderNav",
  data: () => ({
    links: [
      { name: "AptMain", path: "/aptmain" },
      { name: "Board", path: "/board" },
      { name: "Station", path: "/recommend" },
      { name: "Animal", path: "/rmAnimalView" },
    ],
    authLinks: [
      { name: "Login", path: "/user/login" },
      { name: "Join", path: "/user/join" },
    ],
  }),
  computed: {
    ...mapState(["userInfo"]),
  },
  methods: {
    ...mapActions(["userLogout"]),
    movePage() {
      this.$router.push({ path: "/" });
    },
    onclickLogout() {
      console.log(this.userInfo.userid);
      this.userLogout(this.userInfo.userid);

      sessionStorage.removeItem("access-token"); //저장된 토큰 없애기
      sessionStorage.removeItem("refresh-token"); //저장된 토큰 없애기

      if (this.$route.path != "/") this.$router.push({ name: "main" });
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.header_title {
  position: absolute;
  left: 40px;
}
.auth {
  position: absolute;
  display: flex;
  right: 20px;
}
</style>
