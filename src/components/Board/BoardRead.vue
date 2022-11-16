<template>
    <div class="AddWrap">
      <div class="menuclass">
        <button class="previous-btn" @click="moveBoardListPage"><v-icon style="color : #E57373">fa-solid fa-square-caret-left</v-icon>
         목록보기</button>
      </div>

      <div class="boardclass">
        <div class="titleclass">
          <span class="board_title">{{ board.title }}</span>
          <!-- 버튼들 -->
          <button class="update-btn"><v-icon style="color : rgb(255,255,255);">fa-light fa-wrench</v-icon></button>
          <button class="delete-btn"><v-icon style="color : rgb(255,255,255);">fa-regular fa-trash-can</v-icon></button>
        </div>
        <div class="writerclass">
          <v-chip
            v-if="1"
            :color="`red lighten-4`"
            class="ml-0 mr-2 black--text"
            label
            small
          >
            작성자
          </v-chip>

          <span> {{ board.user_id }}</span>
          <br />
          <br />
          <v-chip
            v-if="1"
            :color="`red lighten-4`"
            class="ml-0 mr-2 black--text"
            label
            small
          >
            주소
          </v-chip>
          <span> {{ board.sido }} {{ board.gugun }}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <v-chip
            v-if="1"
            :color="`red lighten-4`"
            class="ml-0 mr-2 black--text"
            label
            small
          >
            등록일자
          </v-chip>
          <span> {{ board.regtime }}</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <v-chip
            v-if="1"
            :color="`red lighten-4`"
            class="ml-0 mr-2 black--text"
            label
            small
          >
            조회수
          </v-chip>
          <span> {{ board.hit }}</span>
          <br />
          <br />
          <v-divider></v-divider>
          <div class="contentclass" v-html="board.content"></div>
          <v-divider></v-divider>
          <!-- comment -->
        </div>
      </div>
    </div>
</template>

<script>
import http from "@/util/http-common";
export default {
  data() {
    return {
      board: [],
    };
  },
  created() {
    this.detailBoard(this.$route.query.bno);
  },
  methods: {
    detailBoard(bno) {
      http.get(`board/read?bno=` + bno).then(({ data }) => {
        this.board = data;
        console.log(data);
      });
    },
    moveBoardListPage() {
      this.$router.push({ name: "board" });
    },
    deletePage(bno) {
      http.delete(`board?bno=` + bno).then(({ data }) => {
        console.log(data);
        this.$router.push({ name: "board" });
      });
    },
  },
};
</script>

<style>
.AddWrap {
  width: 60%;
  height: 800px;
  margin: auto;
}
.menuclass{
  margin-top: 10px;
}
.boardclass {
  border-radius: 0.5em;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(224, 224, 224);

  min-height: 80vh;
  max-height: 100vh;
  margin-top: 10px;
}
.titleclass {
  height: 13%;
  border-radius: 0.5em 0.5em 0em 0em;
  background-color: #E57373;
  color : #FFFFFF;
  border: 1px;
  text-align: left;
  padding: 0.5em;

  position: relative;
}
.board_title {
  font-weight: bold;
  font-size: 24px;
  margin-left: 10px;
}
.writerclass {
  height: 8%;
  background-color: rgb(255, 255, 255);
  border: 1px;
  margin: 1em;


}
.contentclass {
  margin: 1em;
  max-height: 50vh;
  min-height: 50vh;
}
.commentclass {
  height: 20%;
  border-radius: 0.5em;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(224, 224, 224);


}

.update-btn{
  
  position: absolute;
  right: 50px;
  top : 10px;
}
.delete-btn{
  position: absolute;
  right: 15px;
  top : 10px;
}
.previous-btn {
  color: #E57373;
  font-weight: bold;
  font-size: 20px;
}
</style>