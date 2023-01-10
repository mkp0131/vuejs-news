import { getFetchJobs } from "@/api";

const jobs = {
  namespaced: true,
  state: {
    jobs: [],
    jobsError: "",
    jobsLoading: false,
  },
  mutations: {
    LOAD_JOBS_REQUEST(state) {
      state.jobsLoading = true;
      state.jobsError = "";
    },
    LOAD_JOBS_SUCCESS(state, data) {
      state.jobsLoading = false;
      state.jobs = data;
    },
    LOAD_JOBS_FAILURE(state, error) {
      state.jobsLoading = false;
      state.jobs = [];
      state.jobsError = error;
    },
  },
  actions: {
    LOAD_JOBS(context) {
      const loadData = async () => {
        // 로딩상태를 불러옴.
        context.commit("LOAD_JOBS_REQUEST");
        try {
          const result = await getFetchJobs();
          context.commit("LOAD_JOBS_SUCCESS", result.data);
        } catch (error) {
          console.log(error);
          context.commit("LOAD_JOBS_FAILURE", error.message);
        }
      };

      loadData();
    },
  },
};

export default jobs;
