<template>
  <apt-info-item></apt-info-item>
</template>
<script>
import AptInfoItem from "@/components/AptInfoItem.vue";
export default {
  name: "AptInfoList",
  components: {
    AptInfoItem,
  },
  data() {
    return {};
  },
};
</script>
<style>
.card-section {
  display: flex;
}
</style>
