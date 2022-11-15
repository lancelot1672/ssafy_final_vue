import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    house: null,
    sido: "",
    gugun: "",
    dong: "",
    dongCode: "",
    year: "",
    month: "",
    aptList: Object,
    aptDetailInfo:Object,
  },
  getters: {},
  mutations: {
    SET_SIMPLE_HOUSE(state, house) {
      state.house = house;
    },
    SET_SIDO(state, sido) {
      state.sido = sido;
    },
    SET_GUGUN(state, gugun) {
      state.gugun = gugun;
    },
    SET_DONG(state, dong) {
      state.dong = dong;
    },
    SET_YEAR(state, year) {
      state.year = year;
    },
    SET_MONTH(state, month) {
      state.month = month;
    },
    SET_DONGCODE(state, dongCode) {
      state.dongCode = dongCode;
    },
    SET_APT(state, aptList) {
      state.aptList = aptList;
    },
    SET_APT_DETAIL(state, aptDetailInfo) { 
      state.aptDetailInfo = aptDetailInfo;
    }
  },
  actions: {
    simpleHouse({ commit }, house) {
      commit("SET_SIMPLE_HOUSE", house);
    },
    searchSido({ commit }, sido) {
      commit("SET_SIDO", sido);
    },
    searchGugun({ commit }, gugun) {
      commit("SET_GUGUN", gugun);
    },
    searchDong({ commit }, dong) {
      commit("SET_DONG", dong);
    },
    searchYear({ commit }, year) {
      commit("SET_YEAR", year);
    },
    searchMonth({ commit }, month) {
      commit("SET_MONTH", month);
    },
    searchDongcode({ commit }, dongCode) {
      commit("SET_DONGCODE", dongCode);
    },
    searchApt({ commit }, page) {
      if (!page) {
        page = 1;
      }
      console.log(this.state.dongCode);
      http
        .get(
          `home/list?dongCode=${this.state.dongCode}&dealYear=${this.state.year}&dealMonth=${this.state.month}&page=${page}`
        )
        .then(({ data }) => {
          console.log(data);
          commit("SET_APT", data);
        });
    },
    searchBeforePage({ commit }) {
      let currPage = this.state.aptList.currPage;
      http
        .get(
          `home/list?dongCode=${this.state.dongCode}&dealYear=${this.state.year}&dealMonth=${
            this.state.month
          }&page=${currPage - 1}`
        )
        .then(({ data }) => {
          commit("SET_APT", data);
        });
    },
    searchNextPage({ commit }) {
      let currPage = this.state.aptList.currPage;
      http
        .get(
          `home/list?dongCode=${this.state.dongCode}&dealYear=${this.state.year}&dealMonth=${
            this.state.month
          }&page=${currPage + 1}`
        )
        .then(({ data }) => {
          commit("SET_APT", data);
        });
    },
    getAptDetailInfo({ commit }, no) { 
      console.log(no);
      console.log(commit);

      if(this.state.aptList){
        const aptList = this.state.aptList.boardList;
        aptList.forEach((info)=>{
          if(info.no == no){
            this.state.aptDetailInfo = info;
          }
        })
      }
      // http
      // .get(
      //   `view/houseRead?apartmentName=${this.state.aptList.boardList[idx].apartmentName}&floor=${this.state.aptList.boardList[idx].floor}&dealYear=${this.state.aptList.boardList[idx].dealYear}&dealMonth=${this.state.aptList.boardList[idx].dealMonth}`
      // )
      //   .then(({ data }) => {
      //     console.log(data);
      //   commit("SET_APT_DETAIL", data)
      // });
      
    }
  },
  modules: {},
});
