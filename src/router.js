import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";

Vue.use(Router); // .use() permite ir agregando plugins o funcionalidades

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "*",
      name: "Error",
      component: Error,
    },
  ],
});
