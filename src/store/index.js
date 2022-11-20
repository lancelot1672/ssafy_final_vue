import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common";
import jwtDecode from "jwt-decode";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidoList : [],
    gugunList : [],
    dongList : [],
    house: null,
    sido: "",
    gugun: "",
    dong: "",
    dongCode: "",
    year: "",
    month: "",
    aptList: Object,
    aptDetailInfo: Object,
    StationApt:Object,
    isLogin : false,
    isLoginError: false,
    userInfo: null,
    isValidToken: false,

  },
  getters: {},
  mutations: {
    SET_SIMPLE_HOUSE(state, house) {
      state.house = house;
    },
    SET_SIDO(state, sido) {
      state.sido = sido;
    },
    SET_SIDOLIST(state, sidoList){
      state.sidoList = sidoList;
    },

    SET_GUGUN(state, gugun) {
      state.gugun = gugun;
    },
    SET_GUGUNLIST(state, gugunList){
      state.gugunList = gugunList;
    },
    SET_DONG(state, dong) {
      state.dong = dong;
    },
    SET_DONGLIST(state, dongList){
      state.dongList = dongList;
    }
    ,
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
    },
    CLEAR_APT(state) { 
      state.aptList = Object;
      state.aptDetailInfo = Object;
    },
    CLEAR_APT_DETAIL(state) { 
      state.aptDetailInfo = Object;
    },

    STATION_APT(state, StationApt) { 
      state.StationApt = StationApt;
    },

    //user
    SET_IS_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin;
    },
    SET_IS_LOGIN_ERROR: (state, isLoginError) => {
      state.isLoginError = isLoginError;
    },
    SET_IS_VALID_TOKEN: (state, isValidToken) => {
      state.isValidToken = isValidToken;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.isLogin = true;
      state.userInfo = userInfo;
    },

  },
  actions: {
    simpleHouse({ commit }, house) {
      commit("SET_SIMPLE_HOUSE", house);
    },
    searchSidoList({commit}){
      // 시도 리스트를 검색합니다.
      let sidoList = [];
      http.get("home/sidoName").then(({ data })=>{
        for (let i = 0; i < data.length; i++) {
          sidoList.push(data[i].sidoName);
        }
        commit("SET_SIDOLIST", sidoList);
      });
      
    },
    searchGugunList({commit}, sido){
      //시도에 따른 구군 리스트를 검색합니다.
      let gugunList = [];

      http.get(`home/gugunName?sidoName=${sido}`).then(({ data }) => {
        for (let i = 0; i < data.length; i++) {
          gugunList.push(data[i].gugunName);
        }
        commit("SET_GUGUNLIST", gugunList);
      });
    },
    searchDongList({commit}, payload){
      //구군에 따른 동 리스트를 검새합니다.
      let dongList = [];
      http
      .get(`home/dongName?sidoName=${payload.sido}&gugunName=${payload.gugun}`)
      .then(({ data }) => {
        for (let i = 0; i < data.length; i++) {
          dongList.push(data[i].dongName);
        }
        commit("SET_DONGLIST", dongList);
      });
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
    searchDongcode({ commit }, payload) {
      let dongCode;
      http
      .get(`home/dongCode?dongName=${payload.dong}&sidoName=${payload.sido}`)
      .then(({ data }) => {
        console.log(data);
        dongCode = data;
        commit("SET_DONGCODE", dongCode);
      });
      console.log(dongCode);

    },
    searchApt({ commit }, page) {
      // 검색 조건에 따른 아파트 리스트

      //아파트 리스트 초기화
      commit("CLEAR_APT");

      if (!page) {
        page = 1;
      }
      console.log(this.state.dongCode);
      http
        .get(
          `home/list?dongCode=${this.state.dongCode}&dealYear=${this.state.year}&dealMonth=${this.state.month}&page=${page}`
        )
        .then(({ data }) => {
          console.log(data.boardList);
          if(data.boardList.length == 0){
            data = null;
          }
          commit("SET_APT", data);
        });
    },
    searchBeforePage({ commit }) {
      //다음 페이지 목록 보여주기

      //aptDetail info 초기화
      commit("CLEAR_APT_DETAIL");

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
      //다음 페이지 목록 보여주기

      //aptDetail info 초기화
      commit("CLEAR_APT_DETAIL");

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
      let detail;

      if(this.state.aptList){
        const aptList = this.state.aptList.boardList;
        aptList.forEach((info)=>{
          if(info.no == no){
            detail = info;
          }
        })
      }
      commit("SET_APT_DETAIL", detail);
      
    },
    getRecommandResult({ commit }, dongName) {
      http
        .get(
          `station/list?dongName=${dongName}`
        )
        .then(({ data }) => {
          commit("STATION_APT", data);
        });
    },
    async userConfirm({commit}, user){
      console.log(user);
//비동기
      await http.post('/user/login',JSON.stringify(user)).then( ({data})=>{
        if(data.message === "success"){
          let accessToken = data["access-token"];
          let refreshToken = data["refresh-token"];
          console.log("login success token created!!!! >> ", accessToken, refreshToken);
          this.state.isLogin = true;
          commit("SET_IS_LOGIN", true);
          commit("SET_IS_LOGIN_ERROR", false);
          commit("SET_IS_VALID_TOKEN", true);
          sessionStorage.setItem("access-token", accessToken);
          sessionStorage.setItem("refresh-token", refreshToken);
        } else {
          commit("SET_IS_LOGIN", false);
          commit("SET_IS_LOGIN_ERROR", true);
          commit("SET_IS_VALID_TOKEN", false);
        }
      },
      (error) => {
        console.log(error);
      });
    },
    async getUserInfo({commit}, token){
      let decodeToken = jwtDecode(token);
      // console.log("2. getUserInfo() decodeToken :: ", decodeToken);
      console.log(decodeToken.userid);

      await http.get(`user/${decodeToken.userid}`).then(({data})=>{
        console.log(data);
        if (data.message === "success") {
          commit("SET_USER_INFO", data.userInfo);
          // console.log("3. getUserInfo data >> ", data);
        } else {
          console.log("유저 정보 없음!!!!");
        }
      }).catch(async (error)=>{
        console.log("getUserInfo() error code [토큰 만료되어 사용 불가능.] ::: ", error.response.status);
        commit("SET_IS_VALID_TOKEN", false);
        //await this.dispatch("tokenRegeneration");
      });
    },
    async tokenRegeneration({commit, state}){
      console.log("토큰 재발급 >> 기존 토큰 정보 : {}", sessionStorage.getItem("access-token"));
      console.log(state.userInfo);
      await http.post(`/user/refresh`,
        JSON.stringify(state.userInfo)
      ).then(({data})=>{
        console.log(data);
        if (data.message === "success") {
          let accessToken = data["access-token"];
          console.log("재발급 완료 >> 새로운 토큰 : {}", accessToken);
          sessionStorage.setItem("access-token", accessToken);
          commit("SET_IS_VALID_TOKEN", true);
        }
      });
    }
  },
  modules: {},
});
