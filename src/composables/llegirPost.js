import { ref } from "vue";


const URL = "https://jsonplaceholder.typicode.com/posts"

export default function llegirPost(){
    //Array reactiva para crear posts
    const posts = ref([]);
    const post = ref([null]);

    const llegirTots = async() => {
        const response = await fetch(URL);
        posts.value = await response.json();
    }

    const llegirPostById = async(id) => {
        const response = await fetch(`${URL}/${id}`);
        post.value = await response.json();
    }

    return {
        posts,
        post,
        llegirTots,
        llegirPostById
    }
}