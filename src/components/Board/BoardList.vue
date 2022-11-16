<template>
  <v-app id="inspire">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <!-- 왼쪽 -->
          <v-col cols="10" sm="3">
            <v-sheet min-height="70vh" rounded="lg">
              <v-responsive class="overflow-y-auto" max-height="70vh">
                <!-- 내용 -->
                <v-toolbar flat color="transparent">
                  <v-toolbar-title>GuGun</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="$refs.search.focus()">
                    <v-icon>mdi-magnify</v-icon>
                  </v-btn>
                </v-toolbar>

                <!-- search -->
                <v-container class="py-0">
                  <v-row align="center" justify="start">
                    <v-col
                      v-for="(selection, i) in selections"
                      :key="selection.text"
                    >
                      <v-chip
                        :disabled="loading"
                        close
                        @click:close="selected.splice(i, 1), close()"
                      >
                        <v-icon
                          left
                          v-text="selection.icon"
                          color="red"
                        ></v-icon>
                        {{ selection.text }}
                      </v-chip>
                    </v-col>

                    <v-col v-if="!allSelected" cols="12">
                      <v-text-field
                        ref="search"
                        v-model="search"
                        full-width
                        hide-details
                        label="Search"
                        single-line
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>

                <v-divider v-if="!allSelected"></v-divider>

                <!-- 선택 되어질 list들-->
                <v-list>
                  <template v-for="item in categories">
                    <v-list-item
                      v-if="!selected.includes(item)"
                      :key="item.text"
                      :disabled="loading"
                      @click="selected.push(item), changeTable(item)"
                    >
                      <v-list-item-avatar>
                        <v-icon :disabled="loading" v-text="item.icon"></v-icon>
                      </v-list-item-avatar>
                      <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item>
                  </template>
                </v-list>

                <v-divider></v-divider>
              </v-responsive>
            </v-sheet>
          </v-col>

          <!-- 오른쪽 -->
          <v-col cols="12" sm="9">
            <v-sheet min-height="70vh" rounded="lg">
              <!-- <div style="background-color: gray; min-height: 53vh">asdf</div> -->
              <div style="min-height: 50vh">
                <v-simple-table>

                    <thead>
                      <tr>
                        <th class="text-left" width="10%">#</th>
                        <th class="text-left" width="40%">제목</th>
                        <th class="text-left" width="15%">주소</th>
                        <th class="text-left" width="10%">작성자</th>
                        <th class="text-left" width="15%">작성일시</th>
                        <th class="text-left" width="10%">조회수</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in boardList.boardList" :key="item.name">
                        <td>{{ item.bno }}</td>
                        <td>
                          <router-link
                            :to="{
                              name: 'read',
                              query: { bno: item.bno },
                            }"
                            >{{ item.title }}</router-link
                          >
                        </td>
                        <td>{{ item.sido }} {{ item.gugun }}</td>
                        <td>{{ item.user_id }}</td>
                        <td>{{ item.regtime }}</td>
                        <td>{{ item.hit }}</td>
                      </tr>
                    </tbody>

                </v-simple-table>
              </div>
              <!-- nav-bar -->
              <div class="text-center" style="min-height: 3vh">
                <!-- <v-pagination v-model="page" :length="10"></v-pagination> -->
                <button class="page-btn" v-if="boardList.startPage > 1">
                <v-icon>fa-duotone fa-chevron-left</v-icon>
                </button>
                <button class="page-btn" v-for="page in pageRange()" :key="page" @click="getBoardList(page)">
                  {{page}}
                </button>
                <button class="page-btn" v-if="boardList.endPage < boardList.totalPage" >
                  <v-icon>fa-duotone fa-chevron-right</v-icon></button>
              </div>

              <div style="min-height: 7vh">
                <v-btn
                  style="float: right"
                  class="mx-4"
                  fab
                  dark
                  color="cyan"
                  @click="moveWritePage()"
                >
                  <v-icon dark> mdi-pencil </v-icon>
                </v-btn>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import http from "@/util/http-common";

export default {
  data: () => ({
    items: [],
    loading: false,
    search: "",
    selected: [],
    boardList: [],
    page: 0,
  }),
  created() {
    //gugun 가져오기 - 나중에 user의 정보에서 빼오기
    http.get(`home/gugunName?sidoName=서울특별시`).then(({ data }) => {
      for (let i = 0; i < data.length; i++) {
        this.items.push({
          text: data[i].gugunName,
          icon: "mdi-map-marker",
        });
      }
    });
  },
  computed: {
    allSelected() {
      return this.selected.length === this.items.length;
    },
    categories() {
      const search = this.search.toLowerCase();

      if (!search) return this.items;

      return this.items.filter((item) => {
        const text = item.text.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
    selections() {
      const selections = [];

      for (const selection of this.selected) {
        selections.push(selection);
      }

      return selections;
    },
  },

  watch: {
    selected() {
      this.search = "";
    },
  },

  methods: {
    next() {
      this.loading = true;

      setTimeout(() => {
        this.search = "";
        this.selected = [];
        this.loading = false;
      }, 2000);
    },
    changeTable(item) {   //구 정보를 선택했을 때 처음 가지고 오는 boardList
      console.log(item.text);
      http.get(`board?page=1&gugun=${item.text}`).then(({ data }) => {
        console.log(data);
        this.boardList = data;
        console.log(this.boardList);
      });
    },
    close() {
      this.boardlist = [];
    },
    moveWritePage() {
      this.$router.push({ name: "write" });
    },
    pageRange(){
      let start = this.boardList.startPage;
      let end = this.boardList.endPage;

      let list = [];
      for(let i=start; i<= end; i++){
        list.push(i);
      }
      return list;
    },
    getBoardList(page){
      let selected = this.selected;
      http.get(`board?page=${page}&gugun=${selected[0].text}`).then(({ data }) => {
        this.boardList = data;
        console.log(this.boardList);
      });
    }
  },
};
</script>

<style >
  .page-btn {
    border-style: solid;
    border: none;
    border-radius: 5px;
    background: #FFFFFF;

    min-width: 34px;
    height: 34px;
    padding: 0 5px;
    margin: 0 5px;
    text-decoration: none;
    transition: 0.3s cubic-bezier(0, 0, 0.2, 1);

    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  }
</style>