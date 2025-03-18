<script setup>
import GroceriesTable from './../components/GroceriesTable.vue';
import {getAllGroceries} from './../store';

const groceries = getAllGroceries;
</script>

<template>
    <GroceriesTable v-model:groceryList="groceries"></GroceriesTable>
</template>

<style scoped></style>
