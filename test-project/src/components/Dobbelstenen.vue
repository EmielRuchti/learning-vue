<script setup>
import {reactive} from 'vue';

const count = reactive({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
});

const clearCount = () => {
    for (let i = 1; i <= 6; i++) {
        count[i] = 0;
    }
};

const rolldice = () => {
    clearCount();
    for (let i = 0; i < 8; i++) {
        count[Math.ceil(Math.random() * 6)]++;
    }
};
</script>

<template>
    <h1>Dobbelstenen</h1>
    <div class="rollingDice">
        <table>
            <thead>
                <tr>
                    <th>Ogen</th>
                    <th>Aantal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in count" :key="index">
                    <td>{{ index }}:</td>
                    <td>{{ item }}</td>
                </tr>
            </tbody>
        </table>
        <button @click="rolldice">Gooi!</button>
    </div>
</template>

<style scoped>
.rollingDice {
    display: inline-block;
}

table {
    border-collapse: collapse;
    margin: 10px;
}

th,
td {
    border: 1px solid;
    padding: 10px;
}
</style>
