<script setup>
import {useRoute} from 'vue-router';
import {getGroceryById} from './../store';

const route = useRoute();
const grocery = getGroceryById(route.params.id);
</script>

<template>
    {{ grocery }}
</template>

<style scoped></style>
