<template>
  <div>
    <h1>Item</h1>
    <div v-if="itemLoading">Loading...</div>
    <div v-else-if="itemError">{{ itemError }}</div>
    <div v-else>
      <div v-html="item.content"></div>
      <div>{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("item", ["item", "itemError", "itemLoading"]),
  },
  created() {
    this.$store.dispatch("item/LOAD_ITEM", this.$route.query.id);
  },
};
</script>

<style></style>
