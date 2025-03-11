<script setup>
defineProps({
    message: String,
});
const emit = defineEmits(['updateMessage', 'updateAlert']);
const emitEvent = () => {
    emit('updateMessage', 'Nieuw bericht van het kindcomponent');
    emit('updateAlert', 'Alert');
};
const newMessage = defineModel('newMessage');
</script>

<template>
    <!--
    <h1>{{ message }}</h1>
    <br />
    <button @click="emitEvent">Verzend Bericht</button>
    <br />
    -->
    <input v-model="newMessage" placeholder="Type nieuwe bericht..." />
</template>
