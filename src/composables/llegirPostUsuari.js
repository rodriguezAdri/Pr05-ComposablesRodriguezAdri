import { ref } from 'vue';

const URL_POSTS = "https://jsonplaceholder.typicode.com/posts";
const URL_USERS = "https://jsonplaceholder.typicode.com/users";

export default function llegirPostYUser() {
  const post = ref(null);
  const user = ref(null);
  const loadingPost = ref(false);
  const loadingUser = ref(false);

  // Función para obtener un post por ID
  const llegirPostById = async (id) => {
    try {
      loadingPost.value = true;
      const responsePost = await fetch(`${URL_POSTS}/${id}`);
      if (!responsePost.ok) {
        throw new Error("No se pudo obtener el post.");
      }
      post.value = await responsePost.json();
      loadingPost.value = false;

      // Si el post tiene un userId, obtener el usuario
      if (post.value && post.value.userId) {
        await llegirUser(post.value.userId);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
      loadingPost.value = false;
    }
  };

  // Función para obtener un usuario por ID
  const llegirUser = async (id) => {
    try {
      loadingUser.value = true;
      const responseUser = await fetch(`${URL_USERS}/${id}`);
      if (!responseUser.ok) {
        throw new Error("No se pudo obtener el usuario.");
      }
      user.value = await responseUser.json();
      loadingUser.value = false;
    } catch (error) {
      console.error("Error fetching user:", error);
      loadingUser.value = false;
    }
  };

  return {
    post,
    user,
    loadingPost,
    loadingUser,
    llegirPostById,
  };
}
