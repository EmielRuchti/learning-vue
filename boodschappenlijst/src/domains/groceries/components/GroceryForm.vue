<script setup>
import {reactive} from 'vue';
const {grocery} = defineProps({
    grocery: Object,
});

const emit = defineEmits(['newGrocery']);
const submitForm = () => {
    emit('newGrocery', grocery);
};
</script>

<template>
    <form @submit.prevent="submitForm">
        <label>Naam:</label>
        <input type="text" v-model="grocery.name" required />
        <br />
        <label>Prijs:</label>
        <input type="number" step="0.01" v-model="grocery.price" min="0.01" />
        <br />
        <label>Aantal:</label>
        <input type="number" v-model="grocery.count" />
        <br />
        <input type="submit" value="Submit" />
    </form>
</template>

<style scoped></style>
