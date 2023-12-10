<template>
    <div class="fixed bottom-4 right-4 bg-blue-500 rounded-full py-5 px-7 text-white cursor-pointer select-none" @click.stop="counter++">{{ counter }}</div>
</template>
<script setup lang="ts">
 const counter=ref<number>(1)
</script>