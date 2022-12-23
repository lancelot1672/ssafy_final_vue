import http from "@/util/http-common";
const aptStore = {
    namespaced : true,
    state : {
        sidoList: [],
        gugunList: [],
        dongList: [],
        house: null,
        sido: "",
        gugun: "",
        dong: "",
        dongCode: "",
        year: "",
        month: "",
        aptList: null,
        aptDetailInfo: null,
    },
    mutations:{
        SET_SIMPLE_HOUSE(state, house) {
            state.house = house;
        },
        SET_SIDO(state, sido) {
            state.sido = sido;
        },
        SET_SIDOLIST(state, sidoList) {
            state.sidoList = sidoList;
        },

        SET_GUGUN(state, gugun) {
            state.gugun = gugun;
        },
        SET_GUGUNLIST(state, gugunList) {
        state.gugunList = gugunList;
        },
        SET_DONG(state, dong) {
        state.dong = dong;
        },
        SET_DONGLIST(state, dongList) {
        state.dongList = dongList;
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
        },
        CLEAR_GUGUN(state) {
        state.gugunList = [];
        },
        CLEAR_DONG(state) {
        state.dongList = [];
        },
        CLEAR_APT(state) {
        state.aptList = null;
        state.aptDetailInfo = null;
        },
        CLEAR_APT_DETAIL(state) {
        state.aptDetailInfo = null;
        },
    },
    actions:{
        simpleHouse({ commit }, house) {
            commit("SET_SIMPLE_HOUSE", house);
          },
          searchSidoList({ commit }) {
            // 시도 리스트를 검색합니다.
            let sidoList = [];
            http.get("home/sidoName").then(({ data }) => {
              for (let i = 0; i < data.length; i++) {
                sidoList.push(data[i].sidoName);
              }
              commit("SET_SIDOLIST", sidoList);
            });
          },
          searchGugunList({ commit }, sido) {
            //시도에 따른 구군 리스트를 검색합니다.
            let gugunList = [];
      
            http.get(`home/gugunName?sidoName=${sido}`).then(({ data }) => {
              for (let i = 0; i < data.length; i++) {
                gugunList.push(data[i].gugunName);
              }
              commit("SET_GUGUNLIST", gugunList);
            });
          },
          searchDongList({ commit }, payload) {
            //구군에 따른 동 리스트를 검새합니다.
            let dongList = [];
            http.get(`home/dongName?sidoName=${payload.sido}&gugunName=${payload.gugun}`).then(({ data }) => {
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
            console.log(payload);
            http.get(`home/dongCode?dongName=${payload.dong}&sidoName=${payload.sido}`).then(({ data }) => {
              console.log(data);
              dongCode = data;
              commit("SET_DONGCODE", dongCode);
            });
          },
          searchApt({ commit, state }, page) {
            // 검색 조건에 따른 아파트 리스트
      
            //아파트 리스트 초기화
            commit("CLEAR_APT");
      
            if (!page) {  // page default 1
              page = 1;
            }

            http
              .get(
                `home/list?dongCode=${state.dongCode}&dealYear=${state.year}&dealMonth=${state.month}&page=${page}`
              )
              .then(({ data }) => {
                if (data.boardList.length == 0) {
                  data = null;
                }
                commit("SET_APT", data);
              });
          },
          searchBeforePage({ commit, state }) {
            //다음 페이지 목록 보여주기
      
            //aptDetail info 초기화
            commit("CLEAR_APT_DETAIL");
      
            let currPage = state.aptList.currPage;
            http
              .get(
                `home/list?dongCode=${state.dongCode}&dealYear=${state.year}&dealMonth=${state.month}&page=${currPage - 1
                }`
              )
              .then(({ data }) => {
                commit("SET_APT", data);
              });
          },
          searchNextPage({ commit, state }) {
            //다음 페이지 목록 보여주기
      
            //aptDetail info 초기화
            commit("CLEAR_APT_DETAIL");
      
            let currPage = state.aptList.currPage;
            http
              .get(
                `home/list?dongCode=${state.dongCode}&dealYear=${state.year}&dealMonth=${state.month}&page=${currPage + 1
                }`
              )
              .then(({ data }) => {
                commit("SET_APT", data);
              });
          },
          getAptDetailInfo({ commit, state }, no) {
            let detail;
      
            if (state.aptList) {
              const aptList = state.aptList.boardList;
              aptList.forEach((info) => {
                if (info.no == no) {
                  detail = info;
                }
              });
            }
            console.log("detail : ",detail);
            commit("SET_APT_DETAIL", detail);
          },
    },
    getters:{

    }
};

export default aptStore;