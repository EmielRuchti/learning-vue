<script setup>
const count = defineModel('dice');
count.value = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
};

const clearCount = () => {
    for (let i = 1; i <= 6; i++) {
        count.value[i] = 0;
    }
};

const rolldice = () => {
    clearCount();
    for (let i = 0; i < 5; i++) {
        count.value[Math.ceil(Math.random() * 6)]++;
    }
};
</script>

<template>
    <h1>Dice</h1>
    <div class="rollingDice">
        <table>
            <tbody>
                <tr>
                    <td><strong>Ogen</strong></td>
                    <td v-for="(item, index) in count" :key="index">{{ index }}</td>
                </tr>
                <tr>
                    <td><strong>Aantal</strong></td>
                    <td v-for="(item, index) in count" :key="index">{{ item }}</td>
                </tr>
            </tbody>
        </table>
        <button @click="rolldice">Gooi!</button>
    </div>
</template>

<style scoped></style>
