<template>
    <div id="results"
    class="text-center py-[50px] px-0"
    >
        <p class="text-2xl">Your Results is ....</p>
        <h1 class="text-6xl font-bold pb-5">
            {{numberCorrect}}/{{quizLength}}
        </h1>

        <RouterLink to="/">
            Go Home
        </RouterLink>

    </div>
</template>

<script setup>
import { defineProps} from 'vue';
import { RouterLink } from 'vue-router';


const { quizLength, numberCorrect } = defineProps([
    'quizLength', 'numberCorrect'
])


</script>

<style lang="scss" scoped>

</style>