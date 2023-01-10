import { getFetchNews } from "@/api";

const news = {
  namespaced: true,
  state: {
    news: [],
    newsError: "",
    newsLoading: false,
  },
  mutations: {
    LOAD_NEWS_REQUEST(state) {
      state.newsLoading = true;
      state.newsError = "";
    },
    LOAD_NEWS_SUCCESS(state, data) {
      state.newsLoading = false;
      state.news = data;
    },
    LOAD_NEWS_FAILURE(state, error) {
      state.newsLoading = false;
      state.news = [];
      state.newsError = error;
    },
  },
  actions: {
    // context 파라미로 this.$store 에 접근한다.
    async LOAD_NEWS(context) {
      // 로딩상태를 불러옴.
      context.commit("LOAD_NEWS_REQUEST");
      try {
        const result = await getFetchNews();
        context.commit("LOAD_NEWS_SUCCESS", result.data);
      } catch (error) {
        console.log(error);
        context.commit("LOAD_NEWS_FAILURE", error.message);
      }
    },
  },
};

export default news;
