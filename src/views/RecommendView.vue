<template>
  <v-container>
    <div class="main-header-section">
      <div class="section1">
        <img src="@/assets/detailsmallhouse.png" width="100px" />
        <span class="main-header-title">교통 정보 맞춤 매물 추천</span>
      </div>
      <div class="section1">
        <span class="main-header-title2"
          >시군구를 선택하고 추천된 아파트 상세 정보를 확인하세요</span
        >
        <div class="select_section">
          <v-select
            class="select"
            label="구군"
            :items="gugunList"
            dense
            solo
            placeholder="select"
            v-model="gugun"
            @change="gugunChange()"
          >
            <option v-for="gugun in gugunList" :key="gugun" :value="gugun">
              {{ gugun }}
            </option>
          </v-select>
          <v-select
            class="select"
            label="법정동"
            :items="dongList"
            dense
            solo
            placeholder="select"
            v-model="dong"
            @change="dongChange()"
          >
            <option v-for="dong in dongList" :key="dong" :value="dong">
              {{ dong }}
            </option>
          </v-select>
          <v-btn color="#FFFFFF" elevation="2" @click="monthChange()"
            ><strong>검색</strong></v-btn
          >
        </div>
      </div>
    </div>
    <!--  -->
    <div class="card-section">
      <v-card
        class="mx-auto"
        max-width="300"
        min-width="300"
        elevation="17"
      ></v-card>
      <v-card
        class="mx-auto"
        max-width="300"
        min-width="300"
        elevation="17"
      ></v-card>
      <v-card
        class="mx-auto"
        max-width="300"
        min-width="300"
        elevation="17"
      ></v-card>
    </div>
    <div class="info-section">
      <p>※ 추천 매물은 교통의 종합적인 데이터를 바탕으로 ..</p>
    </div>
    <div class="traffic-section">
      <div class="traffic-info">
        <img src="@/assets/metro.png" width="100px" height="100px" />
        <div class="traffic-detail">
          <h3 class="traffic-title">지하철</h3>
          <p class="traffic-content">
            가장 가까운 지하철역은 ____입니다. 500m안에 지하철역이 존재합니다.
          </p>
        </div>
      </div>
      <v-divider />
      <div class="traffic-info">
        <img src="@/assets/metro.png" width="100px" height="100px" />
        <div class="traffic-detail">
          <h3 class="traffic-title">지하철</h3>
          <p class="traffic-content">
            가장 가까운 지하철역은 ____입니다. 500m안에 지하철역이 존재합니다.
          </p>
        </div>
      </div>
      <v-divider />
      <div class="traffic-info">
        <img src="@/assets/metro.png" width="100px" height="100px" />
        <div class="traffic-detail">
          <h3 class="traffic-title">지하철</h3>
          <p class="traffic-content">
            가장 가까운 지하철역은 ____입니다. 500m안에 지하철역이 존재합니다.
          </p>
        </div>
      </div>
    </div>

    <v-card color="basil">
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold text-h2 basil--text">Kakao Map</h1>
      </v-card-title>

      <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item">
          <v-card color="basil" flat>
            <v-card-text>{{ text }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "RecommendView",
  data() {
    return {
      sido: "",
      gugun: "",
      dong: "",
      dongCode: "",
      tab: null,
      items: ["지하철", "버스", "따릉이"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  computed:{
    ...mapState(["gugunList", "dongList"]),
  },
  created() {
    this.sido = "서울특별시";
    this.searchGugunList(this.sido);
  },
  methods: {
    gugunChange() {
      //action
      this.searchDongList({
        sido : this.sido,
        gugun : this.gugun,
      });
    },
    dongChange(){
      //동코드 가져와
      this.searchDongcode({
        dong : this.dong,
        sido : this.sido
      });
    },
    ...mapActions(["searchGugunList","searchDongList","searchDongcode"]),
  },
};
</script>

<style scoped>
.select_section {
  display: flex;
  margin-left: 100px;
}
.select {
  margin: 0px 20px;
  width: 200px;
}
.v-btn {
  background: none;
  width: 150px;
}
.card-section {
  max-height: 40vh;
  min-height: 40vh;

  margin: 60px 200px;

  display: flex;
}
.info-section {
  margin: 0px 250px;
  text-align: right;
}

.traffic-section {
  margin: 50px 300px;
}
.traffic-info {
  display: flex;
  margin: 40px 0;
}

.traffic-detail {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-left: 20px;
}
.traffic-title {
  margin-top: 14px;
  font-size: 20px;
}
.traffic-content {
  color: gray;
}

/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
  width: 1200px;
  margin: auto;
}
.basil--text {
  color: #356859 !important;
}
</style>
