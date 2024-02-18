<script setup>
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";

const notify = () => {
    toast("Hello! Wow so easy!", {
  "theme": "dark",
  "type": "success",
  "position": "bottom-right",
  "rtl": true,
  "transition": "zoom",
  "dangerouslyHTMLString": true
})
}

</script>
<template>
   <div>
    <button @click="notify">Notify !</button>
    <NuxtLink class="text-green-500 font-bold " to="/">back</NuxtLink>
  </div>
</template>




<!-- https://www.npmjs.com/package/vue3-toastify -->
<!-- https://vue3-toastify.js-bridge.com/ -->