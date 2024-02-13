<script setup>
import { useCounterStore } from "../store/piniaa";
const counter = useCounterStore();
let firstname = ref("");
let lastname = ref("");
let code = ref("");




</script>
<template>
    	<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
		<div class="max-w-md w-full space-y-8">
			
			<div class="rounded bg-white max-w-md rounded overflow-hidden shadow-xl p-5">

				<form class="space-y-4" action="#" method="POST">
					<input type="hidden" name="remember" value="True">
					<div class="rounded-md shadow-sm -space-y-px">
						<div class="grid gap-6">
							<div class="col-span-12">
								<label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
								<input type="text" v-model="firstname" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
							</div>

							<div class="col-span-12">
								<label for="first_name" class="block text-sm font-medium text-gray-700">Last name</label>
								<input type="text"  v-model="lastname" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
							</div>

							
							<div class="col-span-12">
								<label for="first_name" class="block text-sm font-medium text-gray-700">code</label>
								<input type="text"  v-model="code" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
							</div>

						</div>
					</div>

					<div class="flex items-center justify-between">



					</div>


					<div>
						<button @click="counter.pushPerson(firstname,lastname)"  type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add</button>
 
					</div>
				</form>
				{{ counter.getPersons }}
		</div>
	</div>
</div>
</template>