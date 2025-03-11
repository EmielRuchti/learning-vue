<script setup>
import {ref, reactive, computed} from 'vue';
const clicks = ref(0);
const newFirstName = ref('');
const newCountry = ref('');
const person = reactive({firstName: '', country: ''});

const incrementClicks = () => clicks.value++;
const updateFirstName = () => {
    if (newFirstName.value) {
        person.firstName = newFirstName.value;
        newFirstName.value = '';
    }
};
const updateCountry = () => {
    if (newCountry.value) {
        person.country = newCountry.value;
        newCountry.value = '';
    }
};

const tasks = ref([
    {name: 'Boodschappen doen', completed: false},
    {name: 'Afwassen', completed: true},
    {name: 'Hond uitlaten', completed: false},
]);

const updateTaskStatus = task => {
    task.completed = !task.completed;
};

const newName = ref('');
const newAge = ref(null);
const people = ref([
    {name: 'Jan', age: 12},
    {name: 'Piet', age: 20},
    {name: 'Emiel', age: 32},
]);

const newPeople = () => {
    if (newName.value && newAge.value) {
        people.value.push({name: newName.value, age: newAge.value});
        newName.value = '';
        newAge.value = null;
    }
};

const childeren = computed(() => {
    return people.value.filter(person => person.age < 18);
});

import ParentComponent from './components/ParentComponent.vue';
</script>

<template>
    <ParentComponent></ParentComponent>

    <h1>Clicks + voornaam & Land</h1>
    <p>Huidige aantal clicks: {{ clicks }}</p>
    <button @click="incrementClicks">Verhoog clicks</button>
    <br />
    <p>{{ person.firstName }}</p>
    <input type="text" v-model="person.firstName" placeholder="Type voornaam..." />
    <button @click="updateFirstName">Update voornaam</button>
    <br />
    <p>{{ person.country }}</p>
    <input type="text" v-model="person.country" placeholder="Type land..." />
    <button @click="updateCountry">Update land</button>
    <br />

    <h1>Taken:</h1>
    <ul>
        <div v-for="(task, index) in tasks" :key="index" style="display: flex">
            <li>
                <strong>Naam:</strong>
                {{ task.name }}
                <strong>Completed:</strong>
                {{ task.completed }}
            </li>
            <button @click="updateTaskStatus(task)" style="margin-left: 30px">Update Status</button>
        </div>
    </ul>

    <h1>Computed Naam & Age</h1>
    <form @submit.prevent="newPeople">
        <input type="text" v-model="newName" placeholder="Type naam..." />
        <input type="text" v-model.number="newAge" placeholder="Type een leeftijd..." />
        <button>Submit</button>
    </form>

    <p>Peoples:</p>
    <p v-for="(person, index) in people" :key="index">
        <strong>Naam:</strong>
        {{ person.name }}
        <strong>Leeftijd:</strong>
        {{ person.age }}
    </p>

    <p>Childeren:</p>
    <p v-for="(person, index) in childeren" :key="index">
        <strong>Naam:</strong>
        {{ person.name }}
        <strong>Leeftijd:</strong>
        {{ person.age }}
    </p>
</template>

<style scoped></style>
