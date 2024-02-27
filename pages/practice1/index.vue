<script setup>
definePageMeta({
  middleware: ["auth"], middleware: ["auth"],
  // or middleware: 'auth'
});
const router = useRouter();
const movieList = ref([]);
const { data } = await useFetch("https://moviesapi.ir/api/v1/movies?page=1");

const logout = () => {
  const my_token = useCookie("token");
  my_token.value = undefined;
  router.push({ path: "/practice1/login" });
};

onMounted(async () => {
  movieList.value = data.value.data;
  console.log(movieList.value);

});
</script>

<template>
  <div>
    <div class="flex flex-col">
      <NuxtLink class="text-green-500 font-bold" to="/practice1/login"
        >login</NuxtLink
      >

      <h2 class="text-red-700 my-3" style="cursor: pointer" @click="logout">
        LogOut
      </h2>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <card
        v-for="(item, i) in movieList"
        :key="i"
        :id="item.id"
        :title="item.title"
        :poster="item.poster"
      />
    </div>
  </div>
</template>
