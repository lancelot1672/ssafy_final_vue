<template>
  <div>
    <v-card>
      <v-card-title class="text-h5 grey lighten-2"
        >{{ aptDetailInfo.apartmentName }}
      </v-card-title>

      <v-card-actions> </v-card-actions>
      <v-divider></v-divider>
      <v-card-text>
        <div>Word of the Day</div>
        <p class="text-h4 text--primary">el·ee·mos·y·nar·y</p>
        <p>adjective</p>
        <div class="text--primary">{{ aptDetailInfo.apartmentName }}"</div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        
      </v-card-actions>
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