import { getFetchAsk } from "@/api";

const ask = {
  namespaced: true,
  state: {
    ask: [],
    askError: "",
    askLoading: false,
  },
  mutations: {
    LOAD_ASK_REQUEST(state) {
      state.askLoading = true;
      state.askError = "";
    },
    LOAD_ASK_SUCCESS(state, data) {
      state.askLoading = false;
      state.ask = data;
    },
    LOAD_ASK_FAILURE(state, error) {
      state.askLoading = false;
      state.ask = [];
      state.askError = error;
    },
  },
  actions: {
    // context 파라미로 this.$store 에 접근한다.
    LOAD_ASK(context) {
      (async function () {
        // 로딩상태를 불러옴.
        context.commit("LOAD_ASK_REQUEST");
        try {
          const result = await getFetchAsk();
          context.commit("LOAD_ASK_SUCCESS", result.data);
        } catch (error) {
          console.log(error);
          context.commit("LOAD_ASK_FAILURE", error.message);
        }
      })();
    },
  },
};

export default ask;
