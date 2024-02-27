<script setup>
  const my_name = useCookie("name", { maxAge: 2000 });
  console.log(my_name.value);
  my_name.value = "reza";
  console.log(my_name.value);
</script>
<template>
    
</template>