import { getFetchItem } from "@/api";

const item = {
  namespaced: true,
  state: {
    item: [],
    itemError: "",
    itemLoading: false,
  },
  mutations: {
    LOAD_ITEM_REQUEST(state) {
      state.itemLoading = true;
      state.itemError = "";
    },
    LOAD_ITEM_SUCCESS(state, data) {
      state.itemLoading = false;
      state.item = data;
    },
    LOAD_ITEM_FAILURE(state, error) {
      state.itemLoading = false;
      state.item = [];
      state.itemError = error;
    },
  },
  actions: {
    LOAD_ITEM(context, id) {
      const loadData = async () => {
        // 로딩상태를 불러옴.
        context.commit("LOAD_ITEM_REQUEST");
        try {
          const result = await getFetchItem(id);
          context.commit("LOAD_ITEM_SUCCESS", result.data);
        } catch (error) {
          console.log(error);
          context.commit("LOAD_ITEM_FAILURE", error.message);
        }
      };

      loadData();
    },
  },
};

export default item;
