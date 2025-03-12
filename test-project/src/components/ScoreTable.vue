<script setup>
import {ref, computed, reactive} from 'vue';

const dices = defineModel('dice');
dices.value = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
};

const scores = reactive({
    threeOfAKind: 0,
    fourOfAKind: 0,
    smallStraight: 0,
    largeStraight: 0,
    fullHouse: 0,
    yahtzee: 0,
    chance: 0,
});

const totalPart1 = computed(() => {
    let total = 0;
    for (const key in dices.value) {
        total += dices.value[key] * key;
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
    scores.threeOfAKind = checkOfAKind(3) ? totalPart1 : 0; //Check 3 of a kind
});
</script>

<template>
    <p>{{ addScoresPart2 }}</p>
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
                <tr>
                    <td>Three of a kind</td>
                    <td>{{ addScoresPart2[0] }}</td>
                </tr>
                <tr>
                    <td>Four of a kind</td>
                    <td>{{ addScoresPart2[1] }}</td>
                </tr>
                <tr>
                    <td>Small straight</td>
                    <td>{{ addScoresPart2[2] }}</td>
                </tr>
                <tr>
                    <td>Large straight</td>
                    <td>{{ addScoresPart2[3] }}</td>
                </tr>
                <tr>
                    <td>Full house</td>
                    <td>{{ addScoresPart2[4] }}</td>
                </tr>
                <tr>
                    <td>Yahtzee</td>
                    <td>{{ addScoresPart2[5] }}</td>
                </tr>
                <tr>
                    <td>Chance</td>
                    <td>{{ addScoresPart2[6] }}</td>
                </tr>
                <tr>
                    <td><strong>Totaal Deel 1</strong></td>
                    <td>{{ totalPart1 }}</td>
                </tr>
                <tr>
                    <td><strong>Totaal Deel 2</strong></td>
                    <td></td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td><strong>Total</strong></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    </span>
</template>

<style scoped></style>
