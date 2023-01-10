<template>
  <div>
    <h1>UserPage</h1>
    <div v-if="userLoading">Loading...</div>
    <div v-else-if="userError">{{ userError }}</div>
    <div v-else>
      <ul v-for="item in user" v-bind:key="item">
        <li>{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("user", ["user", "userError", "userLoading"]),
  },
  created() {
    this.$store.dispatch("user/LOAD_USER", this.$route.params.id);
  },
};
</script>

<style></style>
