<script setup>
import { useCounterStore } from "../store/piniaa";

const storage = useCounterStore();

const DeleteItem = (data) => {
    console.log("item :", data.code);
    storage.deleteRowByCode(data.code)

};

const DeleteIndex = (data) => {
    console.log("index :", data);
    storage.deleteRowByindex(data)

};
</script>
<template>
  <div class="p-5">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            family
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            code
          </th>
          <th
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="(item,i) in storage.getPersons">
          <td class="px-6 py-4 whitespace-nowrap">{{ item.name }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ item.family }}</td>
          <td class="px-6 py-4 whitespace-nowrap">{{ item.code }}</td>

          <td class="px-6 py-4 whitespace-nowrap">
            <button
           
            @click="DeleteItem(item)" 
              type="button"
              class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
            >
              Delete by code
            </button>

            <button
           
            @click="DeleteIndex(i)" 
              type="button"
              class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
            >
              Delete by index
            </button>
          </td>
        </tr>
        <!-- {{ counter.getPersons.length }} -->

      </tbody>
    </table>
  </div>
</template>
