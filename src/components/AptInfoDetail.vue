<template>
  <div>
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
                >{{ sido }} {{ aptDetailInfo.dongName }} {{ aptDetailInfo.roadName }}
                {{ aptDetailInfo.jibun }}</strong
              >
            </div>
            <div class="detailMiddleRightInfo">
              <v-chip :color="`red lighten-4`" label class="info-item"
                ><strong>거래 날짜</strong></v-chip
              >
              &nbsp;
              <strong>{{ aptDetailInfo.dealYear }}년 {{ aptDetailInfo.dealMonth }}월</strong>
            </div>
            <div class="detailMiddleRightInfo">
              <v-chip :color="`red lighten-4`" label class="info-item"
                ><strong>건축 년도</strong></v-chip
              >
              &nbsp; <strong>{{ aptDetailInfo.buildYear }}년</strong>
            </div>
            <div class="detailMiddleRightInfo">
              <v-chip :color="`red lighten-4`" label class="info-item"> <strong>층</strong></v-chip>
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

      <div class="map-section">
        <div id="map2" style="width: 300px; height: 400px"></div>
      </div>
      <button @click="getMap">get</button>
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
  methods: {
    getMap() {
      this.makeMap();
    },
    makeMap() {
      if (window.kakao && window.kakao.maps) {
        console.log("있어");
        this.initMap();
      } else {
        console.log("생성해");
        const script = document.createElement("script");
        /* global kakao */
        script.onload = () => kakao.maps.load(this.initMap);
        script.src =
          "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=fee2964f095ecaef309e6699b5d8e22d";
        document.head.appendChild(script);
      }
    },
    initMap() {
      const container = document.getElementById("map2");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 5,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      const map = new kakao.maps.Map(container, options);
      this.map = map;
      this.map.relayout();
      // const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

      // const marker = new kakao.maps.Marker({
      //   position: markerPosition,
      // });
      // marker.setMap(this.map);
    },
  },
};
</script>

<style>
.detailMain {
  background-color: rgb(255, 255, 255);
  height: 600px;
}
.aptName {
  padding: 1rem;
  text-align: center;
}
.detailMiddle {
  height: 50%;
  width: 100%;
}
.detailMap {
  height: 30%;
}
.detailMiddleLeft {
  width: 40%;
  height: 100%;
  text-align: center;
  float: left;
}
.detailMiddleRight {
  width: 60%;
  height: 100%;

  padding: 1rem;
  float: left;
}
.detailMiddleRightInfo {
  padding: 0.3rem;
}
.info-item {
  width: 100px;
  text-align: center;
}
</style>
