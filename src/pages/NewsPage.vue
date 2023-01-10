<template>
  <div>
    <h1>Home</h1>
    <div v-if="newsLoading">Loading...</div>
    <div v-else-if="newsError">{{ newsError }}</div>
    <div v-else>
      <ul v-for="article in news" v-bind:key="article.id" class="articles">
        <list-item
          :url="article.url"
          :title="article.title"
          :time_ago="article.time_ago"
          :user="article.user"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
import { mapState } from "vuex";
export default {
  components: { ListItem },
  computed: {
    ...mapState("news", ["news", "newsError", "newsLoading"]),
  },
  created() {
    this.$store.dispatch("news/LOAD_NEWS");
  },
};
</script>
