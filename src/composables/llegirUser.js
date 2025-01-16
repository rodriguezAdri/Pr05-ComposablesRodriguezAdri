import { ref } from "vue";

const URL = "https://jsonplaceholder.typicode.com/users";

export default function llegirUsers() {
  const usuario = ref(null);

  const llegirUser = async (id) => {
      const response = await fetch(`${URL}/${id}`);
      usuario.value = await response.json();
  };

  return {
    usuario,
    llegirUser
  };
}
