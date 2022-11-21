<template>
  <v-container>
    <div class="main-header-section">
      <div class="section1">
        <img src="@/assets/detailsmallhouse.png" width="100px" />
        <span class="main-header-title">반려동물 정보 맞춤 매물 추천</span>
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
          <v-btn color="#FFFFFF" elevation="2" @click="searchResult()"
            ><strong>검색</strong></v-btn
          >
        </div>
      </div>
    </div>
    <!-- 반려동물 -->
    <div class="card-section" v-if="AnimalApt != null">
      <v-card
        class="mx-auto"
        max-width="300"
        min-width="300"
        max-height="300"
        elevation="17"
        color="#F7A4A4"
        style="text-align: center; padding-top: 2.5rem; border-radius: 1rem"
        round
      >
        <h1 style="color: white">{{ AnimalApt[0].apartmentName }}</h1>
        <p style="color: white; font-size: 13px">
          {{ sido }} {{ AnimalApt[0].dongName }} {{ AnimalApt[0].roadName }}
          {{ AnimalApt[0].jibun }}
        </p>
        <v-img
          src="@/assets/dog.png"
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
        color="#FFFBC1"
        style="text-align: center; padding-top: 2.5rem; border-radius: 1rem"
        round
      >
        <h1 style="color: black">{{ AnimalApt[1].apartmentName }}</h1>
        <p style="color: black; font-size: 13px">
          {{ sido }} {{ AnimalApt[1].dongName }} {{ AnimalApt[1].roadName }}
          {{ AnimalApt[1].jibun }}
        </p>
        <v-img
          src="@/assets/cat.png"
          max-height="120"
          max-width="120"
          style="margin: 0 auto; margin-left: 33%"
        ></v-img>
      </v-card>
      <v-card
        class="mx-auto"
        max-width="300"
        min-width="300"
        max-height="300"
        elevation="17"
        color="#B6E2A1"
        style="text-align: center; padding-top: 2.5rem; border-radius: 1rem"
        round
      >
        <h1 style="color: white">{{ AnimalApt[2].apartmentName }}</h1>
        <p style="color: white; font-size: 13px">
          {{ sido }} {{ AnimalApt[2].dongName }} {{ AnimalApt[2].roadName }}
          {{ AnimalApt[2].jibun }}
        </p>
        <v-img
          src="@/assets/bird.png"
          max-height="120"
          max-width="120"
          style="margin: 0 auto"
        ></v-img>
      </v-card>
    </div>
    <div class="info-section">
      <p>※ 추천 매물은 교통의 종합적인 데이터를 바탕으로 .. 여기 내용 수정</p>
    </div>

    <div class="stationDetail" v-if="AnimalApt != null">
      <!-- 상세정보 step 1-->
      <!-- 아파트 이름 -->
      <div>
        <div class="traffic-info">
          <h1>{{ AnimalApt[0].apartmentName }} 아파트 상세 정보</h1>
        </div>
      </div>
      <div class="stationDetailSubway">
        <div class="SDSubwayLeft">
          <!-- <v-img
            src="@/assets/subwaygif.gif"
            style="margin: 0 auto; border-radius: 2rem"
            max-height="300px"
          ></v-img> -->
        </div>
        <div class="SDSubwayRight">
          <!-- <h1 style="text-align: center; font-size: 1.5rem">
            직선거리 500m 이내의
          </h1>
          <h1 style="text-align: center">
            지하철역은 {{ AnimalApt[0].stationList.length }}개 입니다.
          </h1>
          <div
            style="margin-left: 25%"
            v-for="(station, index) in StationApt[0].stationList"
            :key="index"
          >
            <v-chip
              class="ma-2"
              color="#044E94"
              text-color="white"
              v-if="StationApt[0].stationList[index].line == `01호선`"
            >
              {{ StationApt[0].stationList[index].line }}
            </v-chip>

            <strong>{{ StationApt[0].stationList[index].name }}역</strong>까지
            {{ StationApt[0].stationList[index].distance | distance }}
            m 떨어져 있습니다.
          </div> -->
        </div>
      </div>
      <!-- 버스 시작 -->
      <!-- <div class="stationDetailBus">
        <div class="SDBusLeft">
          <h1 style="text-align: center; font-size: 1.5rem">
            직선거리 100m 이내의
          </h1>
          <h1 style="text-align: center">
            버스정류장은 {{ StationApt[0].busList.length }}개 입니다.
          </h1>
          <div v-for="(bus, index) in StationApt[0].busList" :key="index">
            <v-chip class="ma-2" color="#FF6450" text-color="white">
              {{ StationApt[0].busList[index].stop_nm }}
            </v-chip>
            정류소까지
            {{ StationApt[0].busList[index].dis | distance }}
            m 떨어져 있습니다.
          </div>
        </div>
        <div class="SDBBusMid"></div>
        <div class="SDBusRight">
          <v-img
            src="@/assets/busgif.gif"
            style="margin: 0 auto; border-radius: 2rem"
            max-height="280px"
          ></v-img>
        </div>
      </div> -->
      <!-- <div class="stationDetailBike">
        <div class="SDBikeLeft">
          <v-img
            src="@/assets/bikegif.gif"
            style="margin: 0 auto; border-radius: 2rem"
            max-height="300px"
          ></v-img>
        </div>
        <div class="SDBikeRight">
          <h1 style="text-align: center; font-size: 1.5rem">
            직선거리 100m 이내의
          </h1>
          <h1 style="text-align: center">
            따릉이는 {{ StationApt[0].bikeList.length }}개 입니다.
          </h1>
          <div
            v-for="(bike, index) in StationApt[0].bikeList"
            :key="index"
            style="margin-left: 20%"
          >
            <v-chip class="ma-2" color="#06A0E6" text-color="white">
              {{ StationApt[0].bikeList[index].rent_name }}
            </v-chip>
            까지
            {{ StationApt[0].bikeList[index].dis | distance }}
            m 떨어져 있습니다.
          </div>
        </div>
      </div> -->
      <v-divider></v-divider>
      <!-- **********************************************************************아파트 시작1개 -->

      <!-- 끝-->
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
    };
  },
  computed: {
    ...mapState(["gugunList", "dongList", "AnimalApt"]),
  },
  created() {
    this.sido = "서울특별시";
    console.log(this.sido);
    this.searchGugunList(this.sido);
    this.$store.commit("ANIMAL_APT", null);
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
      this.getRecommandAnimalResult(this.dong);
    },
    ...mapActions([
      "searchGugunList",
      "searchDongList",
      "searchDongcode",
      "getRecommandAnimalResult",
    ]),
  },
  filters: {
    distance(value) {
      return parseInt(value);
    },
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
/* detail 상세 들어가는 곳 */
.stationDetail {
  width: 70%;
  margin: 0 auto;
  height: 1200px;
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
}
.SDBusLeft {
  width: 40%;
  height: 100%;
  float: left;
}
.SDBBusMid {
  width: 10%;
  height: 100%;
  float: left;
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
}
</style>
