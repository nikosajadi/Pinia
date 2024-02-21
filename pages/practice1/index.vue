<script setup>
const movieList = ref([]);
const { data } = await useFetch("https://moviesapi.ir/api/v1/movies?page=1");

onMounted(async () => {
  movieList.value = data.value.data;
  console.log(movieList.value);

  const my_name = useCookie("name", { maxAge: 2000 });
  console.log(my_name.value);
  my_name.value = "reza";
  console.log(my_name.value);
});
</script>

<template>
  <div>
    <div class="grid grid-cols-4 gap-4">
      <card
        v-for="(item, i) in movieList"
        :key="i"
        :id="item.id"
        :title="item.title"
        :poster="item.poster"
      />
      <NuxtLink class="text-green-500 font-bold " to="/practice1/login">login</NuxtLink>
    </div>
  </div>
</template>
