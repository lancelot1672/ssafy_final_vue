<template>
  <v-container>
    <!-- <v-row>
        <v-col cols="12" sm="6">
            <v-sheet min-height="10vh" rounded="lg" >
                <apt-info-item></apt-info-item>
            </v-sheet>
        </v-col>
        <v-col cols="12" sm="6">
            <v-sheet min-height="10vh" rounded="lg" >
                <kakao-map></kakao-map>
            </v-sheet>
        </v-col>
    </v-row> -->
    <div class="card-section">
      <button>◀</button>
      <v-card v-for="item in aptInfo" :key="item.index" class="mx-auto" max-width="300">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="text-h5"> {{ item.aptName }} </v-list-item-title>
            <v-list-item-subtitle>{{ item.aptAddress }}</v-list-item-subtitle>
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
          <v-list-item-subtitle>{{ item.price }}원</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-cloud-download</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle
            >{{ item.year }}년 {{ item.month }}월 {{ item.day }}일</v-list-item-subtitle
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
          <v-btn text> 매물보기 </v-btn>
        </v-card-actions>
      </v-card>
      <button>▶</button>
    </div>
  </v-container>
</template>
<script>
// import AptInfoItem from "@/components/AptInfoItem.vue";
// import KakaoMap from "@/components/KakaoMap.vue";
export default {
  name: "AptInfoList",
  components: {
    // AptInfoItem,
    // KakaoMap,
  },
  data() {
    return {
      aptInfo: [
        {
          index: 1,
          aptName: "자이 2차 3단지 아파트",
          aptAddress: "서울특별시 서초구 반포동 23-2",
          floor: "3층",
          area: "30",
          price: "3,000,000,000",
          year: "2017",
          month: "07",
          day: "14",
        },
        {
          index: 1,
          aptName: "자이 2차 3단지 아파트",
          aptAddress: "서울특별시 서초구 반포동 23-2",
          floor: "3층",
          area: "30",
          price: "3,000,000,000",
          year: "2017",
          month: "07",
          day: "14",
        },
        {
          index: 1,
          aptName: "자이 2차 3단지 아파트",
          aptAddress: "서울특별시 서초구 반포동 23-2",
          floor: "3층",
          area: "30",
          price: "3,000,000,000",
          year: "2017",
          month: "07",
          day: "14",
        },
        {
          index: 1,
          aptName: "자이 2차 3단지 아파트",
          aptAddress: "서울특별시 서초구 반포동 23-2",
          floor: "3층",
          area: "30",
          price: "3,000,000,000",
          year: "2017",
          month: "07",
          day: "14",
        },
      ],
    };
  },
};
</script>
<style>
.card-section {
  display: flex;
}
</style>
