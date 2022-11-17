<template>
  <div>
    <select-condition></select-condition>
    <apt-info-list></apt-info-list>
    <simple-info-list></simple-info-list>
    <kakao-map></kakao-map>
    <router-view />
  </div>
</template>

<script>
import SelectCondition from "@/components/SelectCondition.vue";
import AptInfoList from "@/components/AptInfoList.vue";
import SimpleInfoList from "@/components/AptSimpleInfo.vue";
import KakaoMap from "@/components/KakaoMap.vue";
export default {
  name: "App",
  components: {
    SelectCondition,
    AptInfoList,
    SimpleInfoList,
    KakaoMap,
  },
  data: () => ({
    //
  }),
};
</script>
<style>
</style>
