import Vue from "vue"; // Importa la librería desde NPM
import App from "./App.vue"; // Importa el componente App
import "@/assets/css/tailwind.css" // Importa Tailwind

Vue.config.productionTip = false;

new Vue({
  //Instancia de Vue
  render: h => h(App)
}).$mount("#app");
