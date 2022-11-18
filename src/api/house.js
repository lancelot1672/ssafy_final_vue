import { aptInstance } from "@/api/index";

const http = aptInstance();

function sidoList(success, fail){
    http.get(`home/sidoName`).then(success).catch(fail);
}
function gugunList(params, success, fail){
    http.get(`home/gugunName?sidoName=${params.sido}`).then(success).catch(fail);
}
export{sidoList, gugunList};