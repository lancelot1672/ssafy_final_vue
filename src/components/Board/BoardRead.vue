<template>
  <div>
    <div class="AddWrap">
      <h1>
        게시판 상세보기&nbsp;<v-btn
          depressed
          color="error"
          @click="moveBoardListPage()"
        >
          목록
        </v-btn>
        <span style="float: right">
          <v-btn depressed color="error"> 수정 </v-btn>
          &nbsp;
          <v-btn depressed color="error" @click="deletePage(board.bno)">
            삭제
          </v-btn>
          &nbsp;
        </span>
      </h1>

      <div class="boardclass">
        <div class="titleclass">
          <h2>{{ board.title }}</h2>
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
        </div>
      </div>
      <div class="commentclass">댓글 작성하는 곳</div>
      <div class="commentclass">댓글 보여주는 곳</div>
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
.boardclass {
  height: 50%;
  border-radius: 0.5em;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(224, 224, 224);
}
.titleclass {
  height: 13%;
  border-radius: 0.5em 0.5em 0em 0em;
  background-color: rgb(204, 204, 204);
  border: 1px;
  text-align: center;
  padding: 0.5em;
}
.writerclass {
  height: 8%;
  background-color: rgb(255, 255, 255);
  border: 1px;
  margin: 1em;
}
.contentclass {
  margin: 1em;
  text-align: center;
}
.commentclass {
  height: 20%;
  border-radius: 0.5em;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(224, 224, 224);
}
</style>