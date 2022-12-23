<template>
  <apt-info-item></apt-info-item>
</template>
<script>
import AptInfoItem from "@/components/apt/AptInfoItem.vue";
import { mapMutations } from 'vuex';
const aptStore = "aptStore";

export default {
  name: "AptInfoList",
  components: {
    AptInfoItem,
  },
  data() {
    return {};
  },
  created() {
    //싹 다 초기화
    this.CLEAR_APT;
  },
  methods:{
    ...mapMutations(aptStore, ["CLEAR_APT"]),
  }
};
</script>
<style>
.card-section {
  display: flex;
}
</style>
