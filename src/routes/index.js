import Vue from "vue";
import VueRouter from "vue-router";
import NewsPage from "../pages/NewsPage.vue";
import AskPage from "../pages/AskPage.vue";
import JobsPage from "../pages/JobsPage.vue";
import UserPage from "../pages/UserPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";
import ItemPage from "../pages/ItemPage.vue";

Vue.use(VueRouter);

// 라우터 인스턴스 생성
const router = new VueRouter({
  // url 에 '#' 을 없앤다.
  mode: "history",
  routes: [
    {
      path: "/",
      // 리다이렉트
      name: "home",
      redirect: "/news",
    },
    {
      path: "/news",
      naem: "news",
      component: NewsPage,
    },
    {
      path: "/ask",
      name: "ask",
      component: AskPage,
      beforeEnter: (to, from, next) => {
        if (to.auth) {
          return next();
        } else {
          return router.push("/");
        }
      },
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsPage,
    },
    {
      path: "/user/:id",
      name: "user",
      component: UserPage,
    },
    {
      path: "/item",
      name: "itme",
      component: ItemPage,
    },
    {
      // 404 페이지
      path: "/*",
      name: "404",
      component: NotFoundPage,
    },
  ],
});

export default router;
