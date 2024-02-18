<script setup>
const a = ref('')
const b = ref('')
const statuss = ref('')


watch(
  () => a.value,
  () => {
    console.log(a.value) 
    statuss.value = "a is typing....."
    setTimeout(() => {
        statuss.value = ""
    }, 2000);
  },
)
watch(
  () => b.value,
  () => {
    console.log(b.value) 
    statuss.value = "b is typing....."
    setTimeout(() => {
        statuss.value = ""
    }, 2000);
  },
)


</script>
<template>
    <div class="w-1/2 p-5" >

        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">A</label>
            <input v-model="a" type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="a" required />
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">B</label>
            <input  v-model="b" type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="b" required />
        </div>

   

        <h1 class="m-5">{{ statuss }}</h1>
        <NuxtLink class="text-green-500 font-bold " to="/">back</NuxtLink>
    </div>
</template>