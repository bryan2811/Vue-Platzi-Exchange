import Vue from "vue"; // Importa la librería desde NPM
import App from "./App.vue"; // Importa el componente App

Vue.config.productionTip = false;

new Vue({
  //Instancia de Vue
  render: h => h(App)
}).$mount("#app");
