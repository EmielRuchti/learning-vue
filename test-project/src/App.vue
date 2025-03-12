<script setup>
import ThrowDices from './components/ThrowDices.vue';
import ScoreTable from './components/ScoreTable.vue';

import {ref} from 'vue';

const dices = ref();
</script>

<template>
    <ThrowDices v-model:dice="dices"></ThrowDices>
    <p></p>
    <ScoreTable v-model:dice="dices"></ScoreTable>
</template>

<style scoped></style>
