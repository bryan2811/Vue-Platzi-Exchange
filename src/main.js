import Vue from "vue"; // Importa la librería desde NPM
import App from "./App.vue"; // Importa el componente App
import "@/assets/css/tailwind.css"; // Importa Tailwind
import "@/router";
import router from "@/router";

Vue.config.productionTip = false;

new Vue({
  //Instancia de Vue
  router: router,
  render: (h) => h(App),
}).$mount("#app");
