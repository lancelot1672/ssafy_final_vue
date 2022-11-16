<template>
  <div>
    <select-condition></select-condition>
    <apt-info-list></apt-info-list>
    <simple-info-list></simple-info-list>
    <router-view />
  </div>
</template>

<script>
import SelectCondition from "@/components/SelectCondition.vue";
import AptInfoList from "@/components/AptInfoList.vue";
import SimpleInfoList from "@/components/AptSimpleInfo.vue";
export default {
  name: "App",
  components: {
    SelectCondition,
    AptInfoList,
    SimpleInfoList,
  },
  data: () => ({
    //
  }),
};
</script>
<style>
</style>
