import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Blogs from "./Blogs.vue";
import User from "./components/User.vue"
let routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/blogs", name: "Blogs", component: Blogs },
  { path: "/users/:userId", component: User}
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
