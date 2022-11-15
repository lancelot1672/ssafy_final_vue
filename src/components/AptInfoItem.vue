<template>
  <v-container>
    <div class="card-section" v-if="aptList.boardList[0]">
      <button
        v-if="aptList.currPage != aptList.startPage"
        @click="getBeforePage"
      >
        <v-icon style="font-size: 40px; color: RGB(229, 115, 115)"
          >fa-solid fa-angles-left</v-icon
        >
      </button>
      <v-card
        v-for="item in aptList.boardList"
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

            <v-icon>fa-soild fa-stairs</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle> {{ item.floor }}층</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>fa-solid fa-arrow-up-from-ground-water</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{ item.area }}㎡</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>fa-solid fa-sack-dollar</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{ item.dealAmount }}만원</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>fa-regular fa-calendar-days</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle
            >{{ item.dealYear }}년 {{ item.dealMonth }}월</v-list-item-subtitle
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>fa-solid fa-location-dot</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>126.12312341</v-list-item-subtitle>
        </v-list-item>

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
      <button v-if="aptList.currPage != aptList.endPage" @click="getNextPage">
        <v-icon style="font-size: 40px; color: RGB(229, 115, 115)">fa-duotone fa-angles-right</v-icon>
      </button>
    </div>
  </v-container>
</template>
<script>
import { mapState, mapActions } from "vuex";
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
  methods: {
    ...mapActions(["searchNextPage", "searchBeforePage"]),
    getNextPage() {
      this.searchNextPage();
    },
    getBeforePage() {
      this.searchBeforePage();
    },
  },
};
</script>
<style scope>
.card-section {
  display: flex;
}
.v-icon {
  font-size: 40px;
}
.v-list-item__icon {
  text-align: center;
  margin-left: 10px;
}
</style>
