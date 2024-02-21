<script setup>
const route = useRoute();
console.log(route.params);

const movieID = route.params.code;
//
const { data } = await useFetch(
  `https://moviesapi.ir/api/v1/movies/${movieID}`
);
console.log(data.value);

const my_name = useCookie("name", { maxAge: 2000 });
console.log(my_name.value);
</script>
<template>
  <div>
    <h1
      class="mb-8 text-2xl font-extrabold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-6xl dark:text-white"
    >
      {{ data.title }}
    </h1>
    {{ my_name }}
    <div class="flex flex-row">
      <img
        v-for="(img, i) in data.images"
        :key="i"
        :src="img"
        class="my-3 w-32 h-32 object-cover"
        alt="x"
      />
    </div>

    <NuxtLink class="text-green-500 font-bold" to="/">Back</NuxtLink>
  </div>
</template>
