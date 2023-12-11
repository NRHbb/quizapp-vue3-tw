<template>
    <div id="card"
        @click="navigaeToQuiz()"
        class="w-[300px] bg-white rounded-lg mb-[35px] overflow-hidden cursor-pointer shadow-md">
        <img :src="quiz.img" alt="" class="w-full h-[190px] m-0">
        <div id="card-text" class="py-2 px-2">
            <h2 class="font-bold text-2xl">{{ quiz.name }}</h2>
            <p>{{ quiz.questions.length }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const {quiz} = defineProps(["quiz"])

const navigaeToQuiz = () => {
    router.push(`/quiz/${quiz.id}`)
}

</script>

<style lang="scss" scoped></style>