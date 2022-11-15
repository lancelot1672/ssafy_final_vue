<template>
  <v-container>
    <div class="card-section" v-if="aptList[0]">
      <button>◀</button>
      <v-card
        v-for="item in aptList"
        :key="item.index"
        class="mx-auto"
        max-width="300"
        min-width="300"
      >
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="text-h5">
              {{ item.apartmentName }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ item.dongName }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle> {{ item.floor }}</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cloud-download</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{ item.area }} m2</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cloud-download</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{ item.Amount }}원</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cloud-download</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle
            >{{ item.dealYear }}년 {{ item.dealMonth }}월</v-list-item-subtitle
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cloud-download</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>126.12312341</v-list-item-subtitle>
        </v-list-item>
        <!-- 
        <v-list class="transparent">
          <v-list-item v-for="item in aptInfo" :key="item.day">
            <v-list-item-title>{{ item.day }}</v-list-item-title>

            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-subtitle class="text-right">
              {{ item.temp }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list> -->

        <v-divider></v-divider>

        <v-card-actions>
          <div class="text-center">
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
                  Show
                </v-btn>
              </template>
              <apt-info-detail :item="item"></apt-info-detail>
            </v-dialog>
          </div>
          <v-btn text> 매물보기 </v-btn>
        </v-card-actions>
      </v-card>
      <button>▶</button>
    </div>
  </v-container>
</template>
<script>
import { mapState } from "vuex";
import AptInfoDetail from "@/components/AptInfoDetail.vue";
export default {
  name: "AptInfoItem",
  components: { AptInfoDetail },
  data() {
    return { dialog: false };
  },
  computed: {
    ...mapState(["aptList"]),
  },
};
</script>
<style>
.card-section {
  display: flex;
}
</style>
