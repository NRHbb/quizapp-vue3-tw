<template>
  <div id="container" class="max-w-[1000px] my-0 mx-auto min-h-screen bg-lime-300 p-5">
    <RouterView />
    <!-- <QuiZoneView /> -->
  </div>
</template>

<script setup>
import {RouterView } from 'vue-router'
import QuiZoneView from './views/QuiZoneView.vue'

</script>

<style lang="scss" scoped>

</style>