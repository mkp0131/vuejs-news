# vuejs-news

## [vue] vue-router cli 세팅

- vue2에 호환되는 vue-router 공식문서: https://v3.router.vuejs.org/installation.html#direct-download-cdn

### 설치

```
npm i vue-router@3.5.3
```

==========
완료
==========

## [vue] 축약 문법

- `v-on:click` => `@:click`
- `v-bind:href` => `:href`

## [vue] router-link 와 router.push 의 차이점

router-link 태그와 router.push의 차이점은 HTML 태그로 라우팅을 하는 것 vs JS 스크립트로 라우팅을 하는 것
원하는 것으로 사용하면된다.

## [vue] 동적 라우팅 param, get query

### param

- 라우터 설정

```js
{
  path: "/user/:id",
  component: UserPage,
},
```

- link 생성 `v-bind:to` 를 사용

```js
<router-link :to="`/user/${user}`">
  {{ user }}
</router-link>
```

- param 값 가져오기 `this.$route.params.id`

```js
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("user", ["user", "userError", "askLoading"]),
  },
  created() {
    this.$store.dispatch("user/LOAD_USER", this.$route.params.id);
  },
};
```

### get query

```js
export default {
  created() {
    console.log(this.$route.query.id);
  },
};
```

## [vue] v-html, html 을 template에 넣기

- `v-html` 속성에 값을 입력한다.
- 참고문서1: https://vuejs.org/api/#v-html
- 참고문서2: https://vuejs.org/guide/essentials/template-syntax.html

```js
<div v-html="item.content"></div>
<div>{{ item.content }}</div>
```

## [vue] router transition 라우터 애니메이션 트랜지션

- 라우트가 전환될때 transition 효과를 줄 수 있다. super Cool!

- router-view 를 transition 으로 감싸고 원하는 name 속성을 준다.

```js
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
```

- css 정의

```js
/* 라우터 애니메이션 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.15s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
```

## [vue] v-bind 로 template 에 변수 사용

- 참고문서: https://vuejs.org/api/built-in-directives.html#v-bind

<router-link to="/주소1/주소2">클릭</router-link>

to에는 문자열만 입력 가능하고 변수 사용이 불가능 합니다.

기본적으로 template에서 사용하는 모든 태그들안에는 변수 사용이 불가능 하지만 변수를 사용할 수 있도록 도와주는 것이 v-bind 입니다.

따라서 동적인 주소 사용을 위하여 아래와 같이 사용하는 것이죠

<router-link v-bind:to="`/user/${item.id}`">클릭</router-link>

또한 v-bind: 는 v-bind 제외하고 : 하나로 아래와 같이 축약이 가능합니다.

<router-link :to="`/user/${item.id}`">클릭</router-link>

## [vue] 하이오더 HOC vs MIXIN 차이 장단점

### 장점

- HOC와 믹스인의 목적 모두 컴포넌트에 들어가는 특정 로직들을 재사용하기 위해서 사용
- 기술의 장점은 모두 컴포넌트의 코드가 간결해지면서 코드 재활용성이 높아짐

### 단점

- HOC는 컴포넌트 레벨 깊이가 깊어지는 것
- 믹스인은 여러 개를 주입했을 때 특정 코드가 어느 믹스인에서 주입된건지 확인하기가 어려움

## [vue] MIXIN 컴포넌트 재사용

- `mixins/ListMixin.js` 파일을 생성한다.

```js
// mixin 으로 중복되는 코드를 모을 수 있다.
export default {
  created() {
    this.$store.dispatch("ask/LOAD_ASK");
  },
};
```

- page 에 사용

```js
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
```

## [vue] 라우터 router 권한체크

- `beforeEnter` 옵션을 사용

```js
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
```
