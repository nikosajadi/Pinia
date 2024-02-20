<script setup>

const movieList = ref([])
const { data } = await useFetch('https://moviesapi.ir/api/v1/movies?page=1')

onMounted(async () => {
    movieList.value = data.value.data;
    console.log(movieList.value)

    const my_name = useCookie('name')
  
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
 
  </div>
    
</div>
</template>