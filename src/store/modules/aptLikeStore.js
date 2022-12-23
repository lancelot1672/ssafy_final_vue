import { like, unlike } from "@/api/house";
import http from "@/util/http-common";
const aptLikeStore = {
    state:{

    },
    mutations:{
        SET_LIKEDETAILLIST(state, likeAptDetailList) {
            //console.log(likeAptDetailList);
            state.likeAptDetailList = likeAptDetailList;
        },
    },
    actions:{
        async like({ dispatch }, likeInfo) {
            await like(
                likeInfo,
                async ({ data }) => {
                    console.log(data);
                    if (data === "likeSuccess") {
                    //좋아요 했으면 정보 갱신
                    let token = sessionStorage.getItem("access-token");
                    await dispatch("getUserInfo", token);
                    }
                },
                (error) => {
                    console.log(error);
                }
                );
            },
            async unlike({ dispatch }, no) {
                console.log(no);
                await unlike(
                no,
                async ({ data }) => {
                    if (data === "unlikeSuccess") {
                    //좋아요 했으면 정보 갱신
                    let token = sessionStorage.getItem("access-token");
                    await dispatch("getUserInfo", token);
                    }
                },
                (error) => {
                    console.log(error);
                }
                );
            },
            async getLikeAptDetailInfo({ commit }) {
                let likeAptDetailList = [];
                this.state.likeList.forEach((likeList) => {
                    http.get(`view/houseRead?no=${likeList.houseCode}`).then(({ data }) => {
                    likeAptDetailList.push(data);
                    });
                });
                commit("SET_LIKEDETAILLIST", likeAptDetailList);
                // console.log(likeAptDetailList);
                }
    }
};
export default aptLikeStore;