<template>
    <v-container>
    <v-row>
        <v-col cols="12" sm="6">
            <v-sheet min-height="10vh" rounded="lg" >
                <apt-info-item></apt-info-item>
            </v-sheet>
        </v-col>
        <v-col cols="12" sm="6">
            <v-sheet min-height="10vh" rounded="lg" >
                <kakao-map></kakao-map>
            </v-sheet>
        </v-col>
    </v-row>
    </v-container>
</template>
<script>
import AptInfoItem from "@/components/AptInfoItem.vue";
import KakaoMap from "@/components/KakaoMap.vue";
export default {
    name:"AptInfoList",
    components : {
        AptInfoItem,
        KakaoMap,
    },
    data() {
    return {
    };
  },
}
</script>
<style>
</style>