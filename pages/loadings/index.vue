<script setup>
const isLoading = ref(false);
const doing = () => {
  isLoading.value = true;
  setTimeout(() => {
    console.log('respons');
    isLoading.value  = false;
  }, 5000);

};
</script>
<template>
  <div>
    <p>loding</p>
    <h1 v-if="isLoading">pls wait.......</h1>
    <div>
      <button
        @click="doing" v-if="!isLoading"
        type="button"
        class=" ml-10 px-4 py-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        linkToB
      </button>
     
      <!-- {{ isLoading }} -->
    </div>
  </div>
</template>
