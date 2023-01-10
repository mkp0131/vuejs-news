<template>
  <div>
    <h1>Jobs</h1>
    <div v-if="jobsLoading">Loading...</div>
    <div v-else-if="jobsError">{{ jobsError }}</div>
    <div v-else>
      <ul v-for="article in jobs" v-bind:key="article.id" class="articles">
        <li>
          <a :href="article.url" target="_blank">
            <div class="title">
              {{ article.title }}
            </div>
            {{ article.time_ago }}, by {{ article.domain }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("jobs", ["jobs", "jobsError", "jobsLoading"]),
  },
  created() {
    this.$store.dispatch("jobs/LOAD_JOBS");
  },
};
</script>

<style></style>
