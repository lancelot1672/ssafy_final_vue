<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <div class="select_section" min-height="10vh" rounded="lg">
          <v-select
            class="select"
            label="시도"
            :items="sidoList"
            dense
            outlined
            placeholder="select"
            v-model="sido"
            @change="sidoChange()"
          >
            <option v-for="sido in sidoList" :key="sido" :value="sido">
              {{ sido }}
            </option>
          </v-select>
          <v-select
            class="select"
            label="구군"
            :items="gugunList"
            dense
            outlined
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
            outlined
            placeholder="select"
            v-model="dong"
            @change="dongChange()"
          >
            <option v-for="dong in dongList" :key="dong" :value="dong">
              {{ dong }}
            </option>
          </v-select>
          <v-select
            class="select"
            label="년"
            :items="yearList"
            dense
            outlined
            placeholder="select"
            v-model="year"
            @change="yearChange()"
          >
            <option v-for="year in yearList" :key="year" :value="year">
              {{ gugun }}
            </option>
          </v-select>
          <v-select
            class="select"
            label="월"
            :items="monthList"
            dense
            outlined
            placeholder="select"
            v-model="month"
          >
            <option v-for="month in monthList" :key="month" :value="month">
              {{ month }}
            </option>
          </v-select>
          <v-btn outlined color="rgb(117,117,117)" @click="monthChange()"
            >검색</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import http from "@/util/http-common";
import { mapActions } from "vuex";

export default {
  name: "SelectCondition",
  data() {
    return {
      sido: "",
      sidoList: [],
      gugun: "",
      gugunList: [],
      dong: "",
      dongList: [],
      year: "",
      yearList: [],
      month: "",
      monthList: [],
      dongCode: "",
    };
  },
  created() {
    http.get("home/sidoName").then(({ data }) => {
      for (let i = 0; i < data.length; i++) {
        this.sidoList.push(data[i].sidoName);
      }
    });
  },
  methods: {
    sidoChange() {
      this.gugunList = [];
      this.dongList = [];
      //선택된 시도를 state에 저장
      this.searchSido(this.sido);

      http.get(`home/gugunName?sidoName=${this.sido}`).then(({ data }) => {
        for (let i = 0; i < data.length; i++) {
          this.gugunList.push(data[i].gugunName);
        }
      });
    },
    gugunChange() {
      this.dongList = [];
      this.searchGugun(this.gugun);
      http
        .get(`home/dongName?sidoName=${this.sido}&gugunName=${this.gugun}`)
        .then(({ data }) => {
          for (let i = 0; i < data.length; i++) {
            this.dongList.push(data[i].dongName);
          }
        });
    },
    dongChange() {
      for (let i = 2022; i >= 2000; i--) {
        this.yearList.push(i);
      }
    },
    yearChange() {
      for (let i = 1; i <= 12; i++) {
        this.monthList.push(i);
      }
    },
    monthChange() {
      this.searchDong(this.dong);
      this.searchYear(this.year);
      this.searchMonth(this.month);
      http
        .get(`home/dongCode?dongName=${this.dong}&sidoName=${this.sido}`)
        .then(({ data }) => {
          this.dongCode = data;
          this.searchDongcode(this.dongCode);
          this.searchApt();
        });
    },
    ...mapActions([
      "searchApt",
      "searchSido",
      "searchGugun",
      "searchDong",
      "searchYear",
      "searchMonth",
      "searchDongcode",
      "searchApt",
    ]),
  },
};
</script>

<style scoped>
.select_section {
  display: flex;
  padding-left: 100px;
  padding-right: 100px;

  margin-top: 20px;
}
.select {
  margin: 0px 20px;
  width: 300px;
}
.search_btn {
  width: 200px;
  margin-top: 10px;
  background: none;
}
.v-btn {
  background: none;
  width: 200px;
}
</style>
