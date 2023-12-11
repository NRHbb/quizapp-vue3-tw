<template>
    <div id="question-container" class="mt-5">
        <h1 id="question" class="text-3xl mb-5 font-medium">
            {{ question.text }}
        </h1>
    </div>
    <div id="option-container"    >
        <div id="option" class="flex mb-5 cursor-pointer"
        v-for="option in question.options"
        :key="option.id"
        >
            <p id="option-label" 
            class="bg-white w-[60px] h-[60px] text-xl flex items-center justify-center">
                {{ option.label }}
            </p>
            <div id="option-value" 
            class="bg-yellow-100 w-full text-xl px-5 flex items-center">
                <p>{{option.text}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue'

const {question} = defineProps(['question'])
</script>

<style lang="scss" scoped></style>