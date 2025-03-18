<script setup>
import GroceryForm from './../components/GroceryForm.vue';
import {useRoute, useRouter} from 'vue-router';
import {getGroceryById, updateGrocery} from './../store';

const route = useRoute();
const router = useRouter();
const grocery = getGroceryById(route.params.id);

const handleGrocery = grocery => {
    updateGrocery(grocery);
    router.push({path: '/'});
};
</script>

<template>
    <GroceryForm :grocery="grocery" @newGrocery="handleGrocery"></GroceryForm>
</template>

<style scoped></style>
