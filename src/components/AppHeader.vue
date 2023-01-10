<template>
  <header class="header">
    <router-link to="/news">News</router-link>
    <router-link to="/jobs">Jobs</router-link>
    <router-link to="/ask">Ask</router-link>
    <!-- <input type="text" v-model="search" @keyup.enter="submit" /> -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  background: #42b883;
  display: flex;
  a {
    color: #fff;
    padding: 10px 20px 14px;
    display: block;
    font-size: 20px;
    text-decoration: none;
  }
  a.router-link-exact-active {
    color: blue;
    font-weight: 700;
  }
}
</style>
