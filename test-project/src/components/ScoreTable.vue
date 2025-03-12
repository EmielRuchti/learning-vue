<script setup>
import {computed, reactive} from 'vue';

const dices = defineModel('dice');
dices.value = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
};

const totalPart1 = computed(() => {
    let total = 0;
    for (const key in dices.value) {
        total += dices.value[key] * key;
    }
    return total;
});

const totalPart2 = computed(() => {
    let total = 0;
    for (const key in addScoresPart2.value) {
        total += addScoresPart2.value[key].score;
    }
    return total;
});

const checkOfAKind = value => {
    for (const key in dices.value) {
        if (dices.value[key] == value) return true;
    }
    return false;
};

const checkStraight = size => {
    let straightCheck = 0;
    for (const key in dices.value) {
        if (dices.value[key] == 0) {
            if (straightCheck === size) {
                return true;
            }
            straightCheck = 0;
        } else if (dices.value[key] >= 1 && dices.value[key] <= 2) {
            straightCheck++;
        }
    }

    if (straightCheck == size) return true;

    return false;
};

const addScoresPart2 = computed(() => {
    const scoresPart2 = reactive([]);
    scoresPart2.push({name: 'Three of a kind', score: checkOfAKind(3) ? totalPart1.value : 0});
    scoresPart2.push({name: 'Four of a kind', score: checkOfAKind(4) ? totalPart1.value : 0});
    scoresPart2.push({name: 'Small Straight', score: checkStraight(4) ? 30 : 0});
    scoresPart2.push({name: 'Large Straight', score: checkStraight(5) ? 40 : 0});
    scoresPart2.push({name: 'Full House', score: checkOfAKind(2) && checkOfAKind(3) ? 25 : 0});
    scoresPart2.push({name: 'Yahtzee', score: checkOfAKind(5) ? 50 : 0});
    scoresPart2.push({name: 'Chance', score: totalPart1.value});
    return scoresPart2;
});
</script>

<template>
    <span>
        <table>
            <thead>
                <tr>
                    <th>Deel 1</th>
                    <th>Puttentelling</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in dices" :key="index">
                    <td>
                        <strong>{{ index }}</strong>
                    </td>
                    <td>{{ item * index }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td><strong>Totaal</strong></td>
                    <td>{{ totalPart1 }}</td>
                </tr>
            </tfoot>
        </table>
    </span>
    <span>
        <table>
            <thead>
                <tr>
                    <th>Deel 2</th>
                    <th>Puttentelling</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in addScoresPart2" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.score }}</td>
                </tr>
                <tr>
                    <td><strong>Totaal Deel 1</strong></td>
                    <td>{{ totalPart1 }}</td>
                </tr>
                <tr>
                    <td><strong>Totaal Deel 2</strong></td>
                    <td>{{ totalPart2 }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td><strong>Total</strong></td>
                    <td>{{ totalPart1 + totalPart2 }}</td>
                </tr>
            </tfoot>
        </table>
    </span>
</template>

<style scoped></style>
