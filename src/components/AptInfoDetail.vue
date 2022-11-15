<template>
  <div>
    <v-card>
      <v-card-title class="text-h5 grey lighten-2"
        >{{ aptDetailInfo.dealAmount }}
      </v-card-title>

      <v-card-actions>{{ aptDetailInfo.dealAmount }} </v-card-actions>
      <v-divider></v-divider>
      <v-card-text></v-card-text>

      <v-divider></v-divider>

      <v-card-actions> </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AptInfoDetail",
  data() {
    return {};
  },
  computed: {
    ...mapState(["aptDetailInfo"]),
  },
};
</script>

<style>
</style>