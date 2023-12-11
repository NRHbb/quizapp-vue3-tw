<template>
    <div>
        <QuizHeader />
        <div>
            <Question :question="quiz.questions[currentQuestion]" />
        </div>
    </div>
</template>

<script setup>
import Question from '../components/Question.vue';
import QuizHeader from '../components/QuizHeader.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import quizes from "../data/quiz.json"


const route = useRoute();
const quizId = parseInt(route.params.id)
const currentQuestion = ref(0)

const quiz = quizes.find(q => q.id === quizId)

</script>

<style lang="scss" scoped>

</style>