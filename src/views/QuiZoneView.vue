<template>
    <div>
        <header class="mb-20 mt-[10px] flex flex-wrap items-center drop-shadow-2xl">
            <h1 class="font-extrabold mr-[30px] text-3xl  text-green-800 pb-4 lg:pb-0">QuiZone</h1>
            <input v-model.trim="search" type="text" placeholder="Search here ..." class="border-0 bg-[rgba(128,128,128,0.1)] p-2.5 rounded-sm
        shadow-md">
        </header>
        <div id="option-container" class="flex flex-wrap mt-10 gap-4">
            <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
            <!-- <div 
        v-for="quiz in quizes"
        :key="quiz.id"
        id="card"
        class="w-[300px] bg-white rounded-lg mb-[35px] overflow-hidden cursor-pointer shadow-md"
        >
          <img :src="quiz.img" alt=""
          class="w-full h-[190px] m-0">
          <div id="card-text"
          class="py-2 px-2">
            <h2 class="font-bold text-2xl">{{quiz.name}}</h2>
            <p>{{quiz.questions.length}}</p>
          </div>
        </div> -->
        </div>
    </div>
</template>
  
<script setup>
import q from "../data/quiz.json"
import { ref, watch } from "vue";
import Card from "../components/Card.vue";

const quizes = ref(q)
const search = ref("")


//gunakan watch u/ mengamati perubahan pas var search
watch(search, () => {
    //quizes.value akan diisi array yg difilter
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
}) //fungsi ini akan mengupdate quizes.value dengan daftar quiz yang memiliki nama saat search diketik

</script>
  
  