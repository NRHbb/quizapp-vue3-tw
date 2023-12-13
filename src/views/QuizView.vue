<template>
    <div>
        <QuizHeader
        :questionStatus="questionStatus"
        :barPercentage="barPercentage"
        />
        <div>
            <Question 
            v-if="!showResults"
            :question="quiz.questions[currentQuestion]" 
            @selectOption="optionSelected"
            />
            <Result v-else 
            :quizLength = "quiz.questions.length"
            :numberCorrect="numberCorrect"
            />
        </div>
    </div>
</template>

<script setup>
import Result from '../components/Result.vue';
import Question from '../components/Question.vue';
import QuizHeader from '../components/QuizHeader.vue';
import { useRoute } from 'vue-router';
import { ref, watch, computed } from 'vue';
import quizes from "../data/quiz.json"


const route = useRoute();
const quizId = parseInt(route.params.id)
const quiz = quizes.find(q => q.id === quizId)
const currentQuestion = ref(0)
const numberCorrect = ref(0)
const showResults=ref(false)

// const questionStatus =ref(`${currentQuestion.value}/${quiz.questions.length}`)

// watch(() => currentQuestion.value, () => {
//     questionStatus.value = `${currentQuestion.value}/${quiz.questions.length}`
// })

const questionStatus = computed (() => `${currentQuestion.value}/${quiz.questions.length}`
)

const barPercentage = computed(() => {
  const percentage = (currentQuestion.value) / quiz.questions.length * 100;
  return `${Math.min(percentage, 100)}%`;
});

const optionSelected = (isCorrect) => {
   if(isCorrect){
       numberCorrect.value++;
   }

   if(quiz.questions.length -1 === currentQuestion.value){
    showResults.value = true
   }

   currentQuestion.value++;
}
</script>

