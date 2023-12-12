<template>
    <header class="mt-5">
            <h4 class="text-2xl font font-semibold">Question {{questionStatus}}</h4>
            <div id="bar" class="w-[300px] h-[50px] border-4 border-white ">
                <div id="completion" 
                class="h-full w-[50%] bg-yellow-400"
                :style="{width: barPercentage}"
                ></div>
            </div>
        </header>
</template>

<script setup>
import {defineProps} from 'vue'

const {questionStatus, barPercentage} = defineProps(['questionStatus', 'barPercentage'])

</script>
