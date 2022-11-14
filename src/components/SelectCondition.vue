<template>
    <v-container>
    <v-row>
        <v-col cols="12" sm="12">
            <v-sheet min-height="10vh" rounded="lg" >
            <v-col cols="12" sm="8" class="select_section">
                <v-select
            class="select"
            label="시도"
            :items="sidoList"
            placeholder="select"
            ></v-select>
            <v-select
            class="select"
            label="구군"
            :items="sidoList"
            placeholder="select"
            ></v-select>
            <v-select
            class="select"
            label="법정동"
            :items="sidoList"
            placeholder="select"
            ></v-select>
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
export default {
    name:"SelectCondition",
    data() {
    return {
      sido: "",
      sidoList: [],
    };
  },
}
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