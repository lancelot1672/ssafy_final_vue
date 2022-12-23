import { news } from "@/api/news";

const newsStore = {
    namespaced: true,
    state : {
        newsInfo: null,
        sb: {
            act: false,
            msg: "",
            color: "error",
        },

    },
    mutations:{
        //News
        CLEAR_NEWS_INFO: (state) => {
            state.newsInfo = null;
        },
        SET_NEWS_INFO: (state, newsInfo) => {
            state.newsInfo = newsInfo;
        },
        POP: (state, data) => {
            state.sb.msg = data.msg;
            state.sb.color = data.color;
            state.sb.act = false;
            if (data.act === undefined) state.sb.act = true;
            },
            TOGGLE_IS_SHOW: (state, isShow) => {
            state.isShow = isShow;
        },
    },
    actions:{
    //News
    async searchNews({ commit }, keyword) {
        await news(
            keyword,
            async ({ data }) => {
            // if (data.message === "success") {
            console.log(data.items);
            let newsInfo = [];
            let items = [
                {
                color: "red lighten-2",
                icon: "mdi-star",
                },
                {
                color: "green lighten-1",
                icon: "mdi-airballoon",
                },
                {
                color: "indigo",
                icon: 'mdi-book-variant',
                },
            ];
            for (let i = 0; i < 3; i++) {
                data.items[i].attr = items[i];
                newsInfo.push(data.items[i]);
            }
            commit("SET_NEWS_INFO", newsInfo);
            // }
            },
            (error) => {
            console.log(error);
            }
        )
        }   
    }
}

export default newsStore;