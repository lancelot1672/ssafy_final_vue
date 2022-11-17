import Vue from "vue";
import VueRouter from "vue-router";
import AptMain from "@/components/AptMain";
import BoardList from "@/components/Board/BoardList";
import BoardRead from "@/components/Board/BoardRead";
import BoardWrite from "@/components/Board/BoardWrite";
import BoardModify from "@/components/Board/BoardModify";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/views/IndexView"),
  },
  {
    path: "/aptMain",
    name: "aptMain",
    component: AptMain,
  },
  {
    path: "/board",
    name: "board",
    component: BoardList,
  },
  {
    path: "/read",
    name: "read",
    component: BoardRead,
  },
  {
    path: "/write",
    name: "write",
    component: BoardWrite,
  },
  {
    path: "/modify",
    name: "modify",
    component: BoardModify,
  },
  {
    path: "/recommend",
    name: "Recommend",
    component: () => import("@/views/RecommendView"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
