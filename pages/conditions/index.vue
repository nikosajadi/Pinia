<!-- if  --Conditional Rendering (v-if , v-else , v-else-if, v-show)>
<!-- 
<script setup>
const max = ref(false);
</script>
<template>
  <div>
    <h1 v-if="max">text 1</h1> 
    <h1 v-if="!max">text 2</h1> 
  </div>
</template> 
-->
<!-- <h1 v-if="max == true">text 1</h1> -->

<!-- ------------------------------- -->

<!-- if - else  -->
<!-- <script setup>
const max = ref(true);
</script>
<template>
  <div>
    <h1 v-if="max">text 1</h1>
    <h1 v-else>text 2</h1>
  </div>
</template>
 -->

<!-- ------------------------------- -->

<!-- if - elseif  -->
<!-- <script setup>
const max = ref(2);
</script>
<template>
  <div>
    <h1 v-if="max == 10">text 1</h1>
    <h1 v-else-if="max == 20">text 2</h1>
    <h1 v-else>text 3</h1>
  </div>
</template> -->
<!-- ------------------------------- -->

<!-- show  -->
<script setup>
const isShow = ref(true);
</script>
<template>
  <div>
    {{ isShow }}
    <button
      @click="isShow = !isShow"
      type="button"
      class="bg-slate-500 text-white mx-4 p-2"
    >
      toggle
    </button>
    <input
      v-if="isShow"
      type="text"
      class="bg-red-500 text-white mx-4 p-2"
      placeholder="input A"
    />

    <input
      v-show="isShow"
      type="text"
      class="bg-green-500 text-black mx-4 p-2"
      placeholder="input B"
    />
    <NuxtLink class="text-green-500 font-bold " to="/">Back</NuxtLink>
  </div>
</template>

