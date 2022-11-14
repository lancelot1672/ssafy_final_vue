<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12">
        <v-sheet min-height="10vh" rounded="lg">
          <v-col cols="12" sm="8" class="select_section">
            <v-select
              class="select"
              label="시도"
              :items="sidoList"
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
              placeholder="select"
            >
              <option v-for="dong in dongList" :key="dong" :value="dong">
                {{ dong }}
              </option>
            </v-select>
            <v-select
              class="select"
              label="년"
              :items="sidoList"
              placeholder="select"
            ></v-select>
            <v-select
              class="select"
              label="월"
              :items="sidoList"
              placeholder="select"
            ></v-select>
          </v-col>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import axios from "axios";
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
    };
  },
  created() {
    fetch("http://localhost:9999/home/sidoName", {
      method: "get",
    })
      .then((resp) => resp.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          this.sidoList.push(data[i].sidoName);
        }
        // console.log(this.sidoList);
      });
  },
  methods: {
    sidoChange() {
      //console.log(this.sido);
      fetch("http://localhost:9999/home/gugunName?sidoName=" + this.sido, {
        method: "get",
      })
        .then((resp) => resp.json())
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            this.gugunList.push(data[i].gugunName);
          }
          // console.log(this.gugunList);
        });
    },
    gugunChange() {
      fetch(
        `http://localhost:9999/home/dongName?sidoName=${this.sido}&gugunName=${this.gugun}`,
        {
          method: "get",
        }
      )
        .then((resp) => resp.json())
        .then((data) => {
          for (let i = 0; i < data.length; i++) {
            this.dongList.push(data[i].dongName);
          }
          console.log(this.dongList);
        });
    },
  },
};
</script>

<style scoped>
.select_section {
  display: flex;
}
.select {
  margin: 0px 50px;
  width: 150px;
}
</style>