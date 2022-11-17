<template>
  <div style="width: 80%; margin: auto">
    <v-card>
      <div class="detailMain">
        <div class="aptName">
          <h1>{{ aptDetailInfo.apartmentName }} 아파트</h1>
        </div>
        <div class="detailMiddle">
          <div class="detailMiddleLeft">
            <img
              src="@/assets/detailbighouse.jpg"
              width="200px"
              style="
                border-radius: 50px;
                -moz-border-radius: 70px;
                -khtml-border-radius: 70px;
                -webkit-border-radius: 70px;
              "
            />
            <br />
            <strong> {{ aptDetailInfo.area }} ㎡ </strong>
          </div>
          <div class="detailMiddleRight">
            <div class="detailMiddleRightInfo">
              <v-chip :color="`red lighten-4`" label class="info-item"
                ><strong>검색주소</strong></v-chip
              >
              &nbsp;
              <strong
                >{{ sido }} {{ aptDetailInfo.dongName }}
                {{ aptDetailInfo.roadName }} {{ aptDetailInfo.jibun }}</strong
              >
            </div>
            <div class="detailMiddleRightInfo">
              <v-chip :color="`red lighten-4`" label class="info-item"
                ><strong>거래 날짜</strong></v-chip
              >
              &nbsp;
              <strong
                >{{ aptDetailInfo.dealYear }}년
                {{ aptDetailInfo.dealMonth }}월</strong
              >
            </div>
            <div class="detailMiddleRightInfo">
              <v-chip :color="`red lighten-4`" label class="info-item"
                ><strong>건축 년도</strong></v-chip
              >
              &nbsp; <strong>{{ aptDetailInfo.buildYear }}년</strong>
            </div>
            <div class="detailMiddleRightInfo">
              <v-chip :color="`red lighten-4`" label class="info-item">
                <strong>층</strong></v-chip
              >
              &nbsp; <strong>{{ aptDetailInfo.floor }}층</strong>
            </div>
            <div class="detailMiddleRightInfo">
              <v-chip :color="`red lighten-4`" label class="info-item">
                <strong>거래 금액</strong></v-chip
              >
              &nbsp; <strong>{{ aptDetailInfo.dealAmount }}만원</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="map-section">
        <div>
          <div id="map" style="width: 100%; height: 60vh"></div>
        </div>
      </div> -->
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AptInfoDetail",
  components: {},
  data() {
    return {
      map: Object,
    };
  },
  computed: {
    ...mapState(["aptDetailInfo", "sido"]),
  },
  methods: {},
};
</script>

<style>
.detailMain {
  margin-top: 5rem;
  background-color: rgb(255, 255, 255);
  height: 600px;
}
.aptName {
  padding: 1rem;
  text-align: center;
}
.detailMiddle {
  width: 30%;
  padding: 1rem;
  float: left;
}
.detailMiddleLeft {
  text-align: center;
}
.detailMiddleRight {
  padding: 1rem;
}
.detailMiddleRightInfo {
  padding: 0.3rem;
}
/* .map-section {
  background-color: bisque;
  float: left;
  width: 70%;
} */
.info-item {
  width: 80px;
  text-align: center;
}
</style>
