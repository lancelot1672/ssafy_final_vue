import { apiInstance } from "@/api/index";

const http = apiInstance();

async function boardWrite(board, success, fail) {
    await http.post('/board', board).then(success).catch(fail);
}
export { boardWrite };
