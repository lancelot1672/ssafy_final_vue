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
          <v-btn color="#FFFFFF" elevation="2" @click="searchResult()"><strong>검색</strong></v-btn>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="card-section" v-if="StationApt != null">
      <v-card
        class="mx-auto"
        max-width="300"
        min-width="300"
        max-height="300"
        elevation="17"
        color="#FF6450"
        style="text-align: center; padding-top: 2.5rem; border-radius: 1rem"
        round
      >
        <h1 style="color: white">{{ StationApt[0].apartmentName }}</h1>
        <p style="color: white; font-size: 13px">
          {{ sido }} {{ StationApt[0].dongName }} {{ StationApt[0].roadName }}
          {{ StationApt[0].jibun }}
        </p>
        <v-img
          src="@/assets/bus.png"
          max-height="120"
          max-width="120"
          style="margin: 0 auto"
        ></v-img>
      </v-card>
      <v-card
        class="mx-auto"
        max-width="300"
        min-width="300"
        max-height="300"
        elevation="17"
        color="#04DC00"
        style="text-align: center; padding-top: 2.5rem; border-radius: 1rem"
        round
      >
        <h1 style="color: black">{{ StationApt[1].apartmentName }}</h1>
        <p style="color: black; font-size: 13px">
          {{ sido }} {{ StationApt[1].dongName }} {{ StationApt[1].roadName }}
          {{ StationApt[1].jibun }}
        </p>
        <v-img
          src="@/assets/subway.png"
          max-height="120"
          max-width="120"
          style="margin: 0 auto"
        ></v-img>
      </v-card>
      <v-card
        class="mx-auto"
        max-width="300"
        min-width="300"
        max-height="300"
        elevation="17"
        color="#06A0E6"
        style="text-align: center; padding-top: 2.5rem; border-radius: 1rem"
        round
      >
        <h1 style="color: white">{{ StationApt[2].apartmentName }}</h1>
        <p style="color: white; font-size: 13px">
          {{ sido }} {{ StationApt[2].dongName }} {{ StationApt[2].roadName }}
          {{ StationApt[2].jibun }}
        </p>
        <v-img
          src="@/assets/bike.png"
          max-height="120"
          max-width="120"
          style="margin: 0 auto"
        ></v-img>
      </v-card>
    </div>
    <div class="info-section">
      <p>※ 추천 매물은 교통의 종합적인 데이터를 바탕으로 ..</p>
    </div>

    <div class="stationDetail" v-if="StationApt != null">
      <div>
        <div class="traffic-info">
          <h1>{{ StationApt[0].apartmentName }} 아파트 상세 정보</h1>
        </div>
      </div>
      <div class="stationDetailSubway">
        <div class="SDSubwayLeft">
          <v-img src="@/assets/subwaygif.gif" style="margin: 0 auto; border-radius: 2rem"></v-img>
        </div>
        <div class="SDSubwayRight">
          <h1>직선거리 500m 이내의</h1>
          <h1>지하철역은 {{ StationApt[0].stationList.length }}개 입니다.</h1>
          <br />
          <div v-for="(station, index) in StationApt[0].stationList" :key="index">
            <v-chip class="ma-2" color="green" text-color="white"> 2호선 </v-chip>
            <strong>{{ StationApt[0].stationList[index].name }}역</strong>까지
            {{ StationApt[0].stationList[index].distance }} 거리입니다.
          </div>
        </div>
      </div>
      <div class="stationDetailBus">
        <div class="SDBusLeft">
          <h1>직선거리 100m 이내의</h1>
          <h1>버스정류장은 {{ StationApt[0].busList.length }}개 입니다.</h1>
        </div>
        <div class="SDBusRight">
          <v-img
            src="@/assets/busgif.gif"
            style="margin: 0 auto; border-radius: 2rem"
            max-height="280px"
          ></v-img>
        </div>
      </div>
      <div class="stationDetailBike">
        <div class="SDBikeLeft">
          <v-img
            src="@/assets/bikegif.gif"
            style="margin: 0 auto; border-radius: 2rem"
            max-height="300px"
          ></v-img>
        </div>
        <div class="SDBikeRight">
          <h1>직선거리 100m 이내의</h1>
          <h1>따릉이는 {{ StationApt[1].bikeList.length }}개 입니다.</h1>
        </div>
      </div>
    </div>
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
  computed: {
    ...mapState(["gugunList", "dongList", "StationApt"]),
  },
  created() {
    this.sido = "서울특별시";
    console.log(this.sido);
    this.searchGugunList(this.sido);
  },
  methods: {
    gugunChange() {
      //action
      this.searchDongList({
        sido: this.sido,
        gugun: this.gugun,
      });
    },
    dongChange() {
      //동코드 가져와
      this.searchDongcode({
        dong: this.dong,
        sido: this.sido,
      });
    },
    // 검색 버튼 누를때 실행됨
    searchResult() {
      this.getRecommandResult(this.dong);
    },
    ...mapActions(["searchGugunList", "searchDongList", "searchDongcode", "getRecommandResult"]),
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
.stationDetail {
  width: 70%;
  margin: 0 auto;
  height: 1000px;
}
.stationDetailSubway {
  height: 33.3%;
  margin: 1rem;
}
.stationDetailBus {
  height: 33.3%;
}
.stationDetailBike {
  height: 33.3%;
}
.SDSubwayLeft {
  width: 40%;
  height: 100%;
  float: left;
}
.SDSubwayRight {
  width: 60%;
  height: 100%;
  float: left;
  text-align: center;
}
.SDBusLeft {
  width: 60%;
  height: 100%;
  float: left;
  text-align: center;
}
.SDBusRight {
  width: 40%;
  height: 100%;
  float: left;
}
.SDBikeLeft {
  width: 40%;
  height: 100%;
  float: left;
}
.SDBikeRight {
  width: 60%;
  height: 100%;
  float: left;
  text-align: center;
}
</style>
