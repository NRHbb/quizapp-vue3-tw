<template>
  <div id="container"
  class="max-w-[1000px] my-0 mx-auto max-h-screen bg-lime-300 p-5"
  >
    <header 
    class="mb-20 mt-[10px] flex items-center drop-shadow-2xl"
    >
      <h1 class="font-extrabold mr-[30px] text-3xl  text-green-800">QuiZone</h1>
      <input type="text" 
      placeholder="Search here ..."
      class="border-0 bg-[rgba(128,128,128,0.1)] p-2.5 rounded-sm
      shadow-md">
    </header>
    <div id="option-container"
    class="flex flex-wrap mt-10"
    >
      <div id="card"
      class="w-[300px] bg-white rounded-lg mb-[35px] overflow-hidden cursor-pointer shadow-md"
      >
        <img src="./assets/html.jpeg" alt=""
        class="w-full h-[190px] m-0">
        <div id="card-text"
        class="py-2 px-2">
          <h2 class="font-bold text-2xl">Test</h2>
          <p>5 question</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>yarn