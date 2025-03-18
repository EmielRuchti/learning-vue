<script setup>
const {grocery} = defineProps({
    grocery: Object,
});

const newGroceryItem = Object.assign({}, grocery);

const emit = defineEmits(['newGrocery']);
const submitForm = () => {
    emit('newGrocery', newGroceryItem);
};
</script>

<template>
    <form @submit.prevent="submitForm">
        <label>Naam:</label>
        <input type="text" v-model="newGroceryItem.name" required />
        <br />
        <label>Prijs:</label>
        <input type="number" step="0.01" v-model="newGroceryItem.price" min="0.01" />
        <br />
        <label>Aantal:</label>
        <input type="number" v-model="newGroceryItem.count" />
        <br />
        <input type="submit" value="Submit" />
    </form>
</template>

<style scoped></style>
