<template>
  <div id="app">
    <app-header />
    <div class="content">
      <transition name="page">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  components: { AppHeader },
};
</script>

// 전역 스타일
<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  font-family: "Noto Sans KR", sans-serif;
}
.articles li a {
  color: #000;
  text-decoration: none;
}
.articles li a .title {
  font-size: 24px;
  display: inline-block;
  font-weight: 400;
  color: #42b883;
}

/* 라우터 애니메이션 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.15s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

<style lang="scss" scoped>
.content {
  padding: 10px;
}
</style>
