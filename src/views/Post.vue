<template>
  <div v-if="loadingPost">
    <p>Carregant post...</p>
  </div>

  <div v-else-if="post">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10" v-if="user">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>

  <div v-else>
    <p>No hi ha post</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import llegirPostYUser from "../composables/llegirPostUsuari";

const route = useRoute();
const id = route.params.id;

// Usamos la composable que obtiene el post y el usuario
const { post, user, loadingPost, loadingUser, llegirPostById } = llegirPostYUser();

onMounted(() => {
  llegirPostById(id);  // Cargar el post y su usuario
});
</script>
