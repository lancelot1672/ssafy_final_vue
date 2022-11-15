import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:9999/home",
  headers: {
    "Content-Type": "application/json",
  },
});
