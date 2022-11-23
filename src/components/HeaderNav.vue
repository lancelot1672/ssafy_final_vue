<template>
  <v-app-bar app color="white" flat>
    <v-avatar
      :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
      size="32"
    ></v-avatar>
    <img
      src="@/assets/logoleft1.png"
      @click="moveMainPage"
      class="header_title"
      width="240px"
    />
    <v-tabs centered class="ml-n9" color="grey darken-1">
      <v-tab
        v-for="(link, index) in links"
        :key="index"
        @click="movePage(link)"
      >
        <router-link :to="link.path">{{ link.name }}</router-link>
      </v-tab>
    </v-tabs>

    <!-- <v-avatar
      class="hidden-sm-and-down"
      color="grey darken-1 shrink"
      size="32"
    ></v-avatar> -->
    <span class="auth" v-if="!userInfo">
      <router-link :to="{ name: 'login' }">Login</router-link>
      <router-link :to="{ name: 'join' }">Regist</router-link>
    </span>
    <span class="auth" v-else>
      <img
        src="@/assets/like1.png"
        @click="moveLikePage"
        width="30rem"
        style="margin-right: 1rem"
      />

      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar
            class="hidden-sm-and-down"
            v-bind="attrs"
            v-on="on"
            color="grey darken-1 shrink"
            size="32"
          ></v-avatar>
        </template>

        <v-list>
          <v-list-item-group color="primary">
            <v-subheader>{{ this.userInfo.userName }}</v-subheader>
            <v-list-item dense>
              <v-list-item-title @click="onclickLogout"
                >로그아웃</v-list-item-title
              >
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
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
    movePage(link) {
      this.$router.push({ path: link.path }).catch(() => {});
    },
    onclickLogout() {
      console.log(this.userInfo.userid);
      this.userLogout(this.userInfo.userid);

      sessionStorage.removeItem("access-token"); //저장된 토큰 없애기
      sessionStorage.removeItem("refresh-token"); //저장된 토큰 없애기

      if (this.$route.path != "/") this.$router.push({ name: "main" });
    },
    moveLikePage() {
      this.$router.push({ name: "like" }).catch(() => {});
    },
    moveMainPage() {
      this.$router.push({ name: "main" }).catch(() => {});
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  margin: 0px 10px;
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
