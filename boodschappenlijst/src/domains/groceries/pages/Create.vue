<script setup>
import GroceryForm from './../components/GroceryForm.vue';
import {addGrocery, sizeOfGroceries} from './../store';
import router from './../../../router';

const grocery = {id: 0, name: '', price: 0, count: 0, sub_total: 0};

const handleGrocery = grocery => {
    grocery.id = sizeOfGroceries.value + 1;
    addGrocery(grocery);
    router.push({path: '/'});
};
</script>

<template>
    <GroceryForm :grocery="grocery" @newGrocery="handleGrocery"></GroceryForm>
</template>

<style scoped></style>
