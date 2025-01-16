<template>
  <div class="flex flex-wrap flex-grow">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
<script setup>
import PostCard from "../components/PostCard.vue";
import llegirPost from "../composables/llegirPost.js";

const {posts, llegirTots} = llegirPost();
llegirTots();

</script>
