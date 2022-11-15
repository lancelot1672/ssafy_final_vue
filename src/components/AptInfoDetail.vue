<template>
  <div>
    <v-card>
      <v-card-title class="text-h5 grey lighten-2">
        Privacy Policy
      </v-card-title>

      <v-card-actions> </v-card-actions>
      <v-divider></v-divider>
      <v-card-text>
        {{ item }}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions> </v-card-actions>
    </v-card>
  </div>
</template>

<script>
// import http from "@/util/http-common";
export default {
  name: "AptInfoDetail",
  data() {
    return {};
  },
  props: {
    item: Object,
  },
  //   created() {
  //     http.get("sidoName").then(({ data }) => {
  //       for (let i = 0; i < data.length; i++) {
  //         this.sidoList.push(data[i].sidoName);
  //       }
  //     });
  //   },
};
</script>

<style>
</style>