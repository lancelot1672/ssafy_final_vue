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
                border-radius: 70px;
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
              <v-chip :color="`red lighten-4`" label
                ><strong>검색주소</strong></v-chip
              >
              &nbsp;
              <strong
                >{{ sido }} {{ aptDetailInfo.dongName }}
                {{ aptDetailInfo.roadName }} {{ aptDetailInfo.jibun }}</strong
              >
            </div>
            <div class="detailMiddleRightInfo">
              <v-chip :color="`red lighten-4`" label
                ><strong>거래 날짜</strong></v-chip
              >
              &nbsp;
              <strong
                >{{ aptDetailInfo.dealYear }}년
                {{ aptDetailInfo.dealMonth }}월</strong
              >
            </div>
            <div class="detailMiddleRightInfo">
              <v-chip :color="`red lighten-4`" label
                ><strong>건축 년도</strong></v-chip
              >
              &nbsp; <strong>{{ aptDetailInfo.buildYear }}년</strong>
            </div>
            <div class="detailMiddleRightInfo">
              <v-chip :color="`red lighten-4`" label
                ><strong>층</strong></v-chip
              >
              &nbsp; <strong>{{ aptDetailInfo.floor }}층</strong>
            </div>
            <div class="detailMiddleRightInfo">
              <v-chip :color="`red lighten-4`" label
                ><strong>거래 금액</strong></v-chip
              >
              &nbsp; <strong>{{ aptDetailInfo.dealAmount }}만원</strong>
            </div>
          </div>
        </div>
        <div class="detailMap">지도 가져오면 됨 동흉아ㅎㅎ</div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AptInfoDetail",
  data() {
    return {};
  },
  computed: {
    ...mapState(["aptDetailInfo", "sido"]),
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
</style>