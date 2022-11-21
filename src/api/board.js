import { apiInstance } from "@/api/index";

const http = apiInstance();

async function boardWrite(board, success, fail) {
    await http.post('home/board', board).then(success).catch(fail);
}
export { boardWrite };
