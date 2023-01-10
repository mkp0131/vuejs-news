import Vue from "vue";
import Vuex from "vuex";
import ask from "./modules/ask";
import item from "./modules/item";
import jobs from "./modules/jobs";
import news from "./modules/news";
import user from "./modules/user";

// Vue.use(): Vue 플러그인 기능
// Vue 에 글러벌로 사용을 하기 원할때 사용한다.
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { news, jobs, ask, user, item },
});

export default store;
