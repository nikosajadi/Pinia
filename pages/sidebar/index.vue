<script setup>
const isOpen = ref(true);
const toggleButton = () => {
  if (isOpen.value == false) {
    isOpen.value = true;
  } else {
    isOpen.value = false;
  }
};
</script>
<template>
  <div>
    <NuxtLink class="text-green-500 font-bold" to="/">Back</NuxtLink>

    <div class="sidebar" :class="[{ close: !isOpen }]">
      <!-- isopen=!isopen -->
      <button @click="toggleButton()" type="button" class="button">
        Close
      </button>
    </div>

    <button @click="toggleButton()" type="button" class="button">Open</button>
    {{ isOpen }}
  </div>
</template>
<style>
.sidebar {
  @apply bg-red-200 text-white font-bold w-60 h-2/3   fixed top-5 right-5 rounded-lg;
  transition: all ease-in-out 0.5s;
}
.button {
  @apply ml-10 px-4 py-2 text-white bg-gradient-to-r  from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2;
}
.close {
  @apply translate-x-full right-0;
}
</style>


<!-- https://tailwindcss.com/docs/translate -->