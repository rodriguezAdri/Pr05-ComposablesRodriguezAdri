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
import llegirPost from "../composables/llegirPost.js";
import llegirUsers from "../composables/llegirUser.js";

const route = useRoute();
const id = route.params.id; 

const { post, llegirPostById } = llegirPost();
const { usuario, llegirUser } = llegirUsers();


const loadingPost = ref(true);
const loadingUser = ref(false);
const user = ref(null);

onMounted(async () => {
  // Cargar el post
  loadingPost.value = true;
  await llegirPostById(id);
  loadingPost.value = false;

  // Si el post té un userId carrega el nom de l'usuari
  if (post.value && post.value.userId) {
    loadingUser.value = true;
    await llegirUser(post.value.userId);
    user.value = usuario.value
    loadingUser.value = false;
  }
});
</script>
