<script setup>
import {ref} from 'vue';
import ChildComponent from './ChildComponent.vue';
const message = ref('');
const handleMessage = newMessage => {
    message.value = newMessage;
};
const sharedMessage = ref('');
</script>

<template>
    <ChildComponent @updateMessage="handleMessage" />
    <ChildComponent @updateAlert="handleMessage" />
    <p>Bericht van kindcomponent: {{ message }}</p>
    <ChildComponent v-model:newMessage="sharedMessage" />
    <p>Nieuwe bericht: {{ sharedMessage }}</p>
</template>
