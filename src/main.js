import Vue from "vue";
import App from "./App.vue";
// vue 라우트 설정
import router from "./routes";
import store from "./store/store";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // vue 라우트 설정
  router,
  store,
}).$mount("#app");
