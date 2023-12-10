<template>
  <div>
    <Error v-if="isError"></Error>
    <div v-else class="container">
    <Buble/>
    </div>
  </div>
</template>
<script setup lang="ts">
const {isError} = storeToRefs(useMain())

</script>
<style lang="less">

</style>
