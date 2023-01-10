import { getFetchUser } from "@/api";

const user = {
  namespaced: true,
  state: {
    user: [],
    userError: "",
    userLoading: false,
  },
  mutations: {
    LOAD_USER_REQUEST(state) {
      state.userLoading = true;
      state.userError = "";
    },
    LOAD_USER_SUCCESS(state, data) {
      state.userLoading = false;
      state.user = data;
    },
    LOAD_USER_FAILURE(state, error) {
      state.userLoading = false;
      state.user = [];
      state.userError = error;
    },
  },
  actions: {
    async LOAD_USER(context, id) {
      // 로딩상태를 불러옴.
      context.commit("LOAD_USER_REQUEST");
      try {
        const result = await getFetchUser(id);
        context.commit("LOAD_USER_SUCCESS", result.data);
      } catch (error) {
        console.log(error);
        context.commit("LOAD_USER_FAILURE", error.message);
      }
    },
  },
};

export default user;
