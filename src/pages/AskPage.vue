<template>
  <div>
    <h1>Ask</h1>
    <div v-if="askLoading">Loading...</div>
    <div v-else-if="askError">{{ askError }}</div>
    <div v-else>
      <ul v-for="article in ask" v-bind:key="article.id" class="articles">
        <li>
          <a :href="article.url" target="_blank">
            <div class="title">
              {{ article.title }}
            </div>
            {{ article.time_ago }}, by {{ article.user }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListMixin from "../mixins/ListMixin";
export default {
  computed: {
    ...mapState("ask", ["ask", "askError", "askLoading"]),
  },
  // Mixin 주입해준다.
  mixins: [ListMixin],
};
</script>

<style></style>
