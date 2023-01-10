<template>
  <li>
    <a :href="url" target="_blank">
      <div class="title">
        {{ title }}
      </div>
      {{ time_ago }}, by
      <span v-if="user">
        <router-link :to="`/user/${user}`">
          {{ user }}
        </router-link>
      </span>
      <span v-else-if="domain">{{ domain }}</span>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    url: String,
    title: String,
    time_ago: String,
    user: String,
    domain: String,
  },
};
</script>

<style></style>
