<template>
    <div
        class="fixed bottom-4 right-4 bg-white shadow-lg rounded-full w-16 h-16 cursor-pointer select-none flex items-center justify-center"
        @click.stop="isShow=true" v-show="!isShow">
        <PhChat weight="bold" />
    </div>
  <Chat v-if="isShow"/>
</template>
<script setup lang="ts">
const { isShow } = storeToRefs(useGlobal());
</script>
