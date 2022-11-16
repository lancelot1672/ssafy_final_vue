<template>
  <v-app id="inspire">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <!-- 오른쪽 -->
          <v-col cols="18">
            <v-sheet min-height="70vh" rounded="lg">
              <v-col cols="12">
                <div>
                  <v-btn tile color="success" @click="moveBoardListPage()">
                    <v-icon left> mdi-pencil </v-icon>
                    목록
                  </v-btn>
                </div>
                <br />
                <v-text-field
                  v-model="title"
                  :counter="200"
                  label="title"
                  required
                  outlined
                ></v-text-field>
                <v-text-field
                  v-model="user_id"
                  :counter="200"
                  label="writer"
                  required
                  outlined
                ></v-text-field>
                <v-combobox
                  outlined
                  v-model="select"
                  :items="items"
                  label="구 / 군을 선택해주세요"
                  multiple
                  chips
                >
                  <template v-slot:selection="data">
                    <v-chip
                      :key="JSON.stringify(data.item)"
                      v-bind="data.attrs"
                      :input-value="data.selected"
                      :disabled="data.disabled"
                      @click:close="data.parent.selectItem(data.item)"
                    >
                      <v-avatar
                        class="accent white--text"
                        left
                        v-text="data.item.slice(0, 1).toUpperCase()"
                      ></v-avatar>
                      {{ data.item }}
                    </v-chip>
                  </template>
                </v-combobox>
                <div id="app">
                  <ckeditor
                    v-model="editorData"
                    :config="editorConfig"
                  ></ckeditor>
                </div>
                <br />
                <v-btn tile color="success" @click="write()">
                  <v-icon left> mdi-pencil </v-icon>
                  글쓰기
                </v-btn>
              </v-col>
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
  data() {
    return {
      title: "",
      user_id: "",
      select: "",
      items: [],
      sido: "서울특별시",
      editorData: "",
      editorConfig: {
        // The configuration of the editor.
      },
    };
  },
  created() {
    http.get(`home/gugunName?sidoName=서울특별시`).then(({ data }) => {
      for (let i = 0; i < data.length; i++) {
        this.items.push(data[i].gugunName);
      }
    });
  },
  methods: {
    write() {
      // console.log(this.editorData);
      http
        .post(
          `board`,
          JSON.stringify({
            title: this.title,
            user_id: this.user_id,
            gugun: this.select[0],
            content: this.editorData,
            sido: this.sido,
          })
        )
        .then(({ data }) => {
          console.log(data);
          this.$router.push({ name: "board" });
        })
        .catch((resp) => {
          console.log(resp);
          alert("다시 작성해주세요");
        });
    },
    moveBoardListPage() {
      this.$router.push({ name: "board" });
    },
  },
};
</script>

<style>
</style>