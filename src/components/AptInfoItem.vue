<template>
  <v-container>
    <div class="card-section" v-if="aptList.boardList[0]">
      <button v-if="aptList.currPage != aptList.startPage" @click="getBeforePage">
        <v-icon style="font-size: 40px; color: red">fa-solid fa-angles-left</v-icon>
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
            <v-list-item-title class="text-h5"> {{ item.apartmentName }} </v-list-item-title>
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
          <v-list-item-subtitle>{{ item.dealAmount }}만원</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cloud-download</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{ item.dealYear }}년 {{ item.dealMonth }}월</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cloud-download</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>126.12312341</v-list-item-subtitle>
        </v-list-item>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn text> 매물보기 </v-btn>
        </v-card-actions>
      </v-card>
      <button v-if="aptList.currPage != aptList.endPage" @click="getNextPage">
        <v-icon style="font-size: 40px">fa-duotone fa-angles-right</v-icon>
      </button>
    </div>
  </v-container>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "AptInfoItem",
  components: {},
  data() {
    return {};
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
</style>
