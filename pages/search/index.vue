<script setup>
const list = ref([
  { id: 1, title: "Ali" },
  { id: 2, title: "Alice" },
  { id: 3, title: "Alireza" },
  { id: 4, title: "Reza" },
]);

const search = ref("");

const doSearch = () => {
  if (search.value != "") {
    return list.value.filter((item) => item.title.includes(search.value));
  } else return list.value;
};
</script>
<template>
  <div class="p-5">
    <nuxt-link class="bold-text text-red-400" to="/">back</nuxt-link>

    <input
      type="text"
      @keyup="doSearch"
      v-model="search"
      class="bg-green-50 my-3 border border-green-500 text-green-300 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-1/5 p-2.5 dark:bg-gray-700 dark:border-green-500"
      placeholder="Success input"
    />

    <div>
      <p v-for="(item, i) in doSearch()" :key="i">
        {{ item.id }} .code c {{ item.title }}
      </p>
    </div>
  </div>
</template>
