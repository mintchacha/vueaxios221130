import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/view/HomeView.vue";
import AboutView from "@/view/AboutView.vue";
import PostList from "@/view/PostList.vue";
import CreatePost from "@/view/CreatePost.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/list",
    name: "list",
    component: PostList,
  },
  {
    path: "/create",
    name: "create",
    component: CreatePost,
  },
];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});
export default router;
