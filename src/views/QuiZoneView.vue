<template>
    <div>
        <header class="mb-20 mt-[10px] flex flex-wrap items-center drop-shadow-2xl">
            <h1 class="font-extrabold mr-[30px] text-3xl  text-green-800 pb-4 lg:pb-0">QuiZone</h1>
            <input v-model.trim="search" type="text" placeholder="Search here ..." class="border-0 bg-[rgba(128,128,128,0.1)] p-2.5 rounded-sm
        shadow-md">
        </header>
        <div id="option-container" class="flex flex-wrap mt-10 gap-4">
            <TransitionGroup  
            appear
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            
            >
                <Card 
                v-for="(quiz, index) in quizes" 
                :key="quiz.id" 
                :quiz="quiz" 
                :data-index="index"
                />
            </TransitionGroup>
        </div>
    </div>
</template>
  
<script setup>
import q from "../data/quiz.json"
import { ref, watch } from "vue";
import Card from "../components/Card.vue";
import gsap from "gsap";

const quizes = ref(q)
const search = ref("")



//gunakan watch u/ mengamati perubahan pas var search
watch(search, () => {
    //quizes.value akan diisi array yg difilter
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
}) //fungsi ini akan mengupdate quizes.value dengan daftar quiz yang memiliki nama saat search diketik

const afterEnter = () => {

}

const beforeEnter = (el) => {
    //card-enter-from
    el.style.opacity = 0
    el.style.transform = "translateY(-100px)"
}

const enter = (el) => {
    //card-enter-to
    gsap.to(el, {
        y: 0, //same as translateY(0)
        opacity: 1,
        duration: 0.3,
        delay: el.dataset.index * 0.3
    })

    //card-enter-active


}


</script>

<style scoped>
.card-enter-from{
    transform: translateY(-50px);
    opacity: 0;
}
.card-enter-from{
    transform: translateY(-50px);
    opacity: 1;
}
.card-enter-active{
    transition: all 1s ease;
}


</style>
