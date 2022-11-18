<template>
  <div style="width: 80%; margin: auto">
    <v-card>
      <div class="detailMain">
        <div class="aptName">
          <h1>{{ aptDetailInfo.apartmentName }} 아파트</h1>
        </div>
        <div class="detailMiddle">
          <div class="detailMiddleLeft">
            <div class="detail-img">
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
            <!--  simple info -->
            <table>
              <tr>
                <td>
                  <v-chip :color="`red lighten-4`" label class="info-item"
                    ><strong>검색주소</strong></v-chip
                  >
                </td>
                <td>
                  &nbsp;
                  <strong
                    >{{ sido }} {{ aptDetailInfo.dongName }}
                    {{ aptDetailInfo.roadName }}
                    {{ aptDetailInfo.jibun }}</strong
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <v-chip :color="`red lighten-4`" label class="info-item"
                    ><strong>거래 날짜</strong></v-chip
                  >
                </td>
                <td>
                  &nbsp;
                  <strong
                    >{{ aptDetailInfo.dealYear }}년
                    {{ aptDetailInfo.dealMonth }}월</strong
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <v-chip :color="`red lighten-4`" label class="info-item"
                    ><strong>건축 년도</strong></v-chip
                  >
                </td>
                <td>
                  &nbsp; <strong>{{ aptDetailInfo.buildYear }}년</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <v-chip :color="`red lighten-4`" label class="info-item">
                    <strong>층</strong></v-chip
                  >
                </td>
                <td>
                  &nbsp; <strong>{{ aptDetailInfo.floor }}층</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <v-chip :color="`red lighten-4`" label class="info-item">
                    <strong>거래 금액</strong></v-chip
                  >
                </td>
                <td>
                  &nbsp; <strong>{{ aptDetailInfo.dealAmount }}만원</strong>
                </td>
              </tr>
            </table>
          </div>
          <div class="detailMiddleRight">
            <div
              class="map"
              id="map"
              style="width: 100%; height: 455px; border-radius: 1rem"
            ></div>
          </div>
        </div>
      </div>
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
      markers: [],
    };
  },
  computed: {
    ...mapState(["aptDetailInfo", "sido"]),
  },
  methods: {
    initMap() {
      // console.log("하이");
      this.markers.forEach((marker) => {
        marker.setMap(null);
      });

      const container = document.getElementById("map");
      console.log(container);
      const options = {
        center: new kakao.maps.LatLng(
          this.aptDetailInfo.lat,
          this.aptDetailInfo.lng
        ),
        level: 4,
      };
      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options); // 지도를 생성합니다.

      console.log(this.map);
      var markerPosition = new kakao.maps.LatLng(
        this.aptDetailInfo.lat,
        this.aptDetailInfo.lng
      );

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(this.map);
      // let marker = new kakao.maps.Marker({
      //   map: this.map,
      //   title: "abc",
      //   position: new kakao.maps.LatLng(33.450701, 126.570667),
      // });
      // console.log(marker);
    },
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=fee2964f095ecaef309e6699b5d8e22d";
      document.head.appendChild(script);
    }
  },
  watch: {
    aptDetailInfo() {
      this.map = null;
      this.initMap();
    },
  },
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
  display: flex;
  padding: 1rem;
}
.detailMiddleLeft {
  text-align: center;
  margin: 20px;
  width: 30%;
}
.detailMiddleRight {
  margin: 20px;
  width: 70%;
}
.info-item {
  width: 80px;
  text-align: center;
}
</style>
