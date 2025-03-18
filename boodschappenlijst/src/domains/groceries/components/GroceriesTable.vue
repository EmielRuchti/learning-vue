<script setup>
import {ref, computed} from 'vue';
import {removeGrocery} from './../store';

const groceries = defineModel('groceryList');
const subTotals = ref([0, 0, 0, 0]);

const calcSubTotals = computed(() => {
    subTotals.value.splice(0);
    for (const key in groceries.value) {
        subTotals.value.push(groceries.value[key].price * groceries.value[key].count);
    }
    return subTotals;
});

const totalCost = computed(() => {
    if (groceries.value.length == 0) return 0;
    return subTotals.value.reduce((total, item) => {
        return total + item;
    });
});
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Prijs</th>
                <th>Aantal</th>
                <th>Subtotaal</th>
                <th colspan="2">Acties</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in groceries" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>
                    <input type="number" v-model="item.count" placeholder="Type aantal..." />
                </td>
                <td>{{ calcSubTotals.value[index].toFixed(2) }}</td>
                <td>
                    <RouterLink :to="{name: 'edit', params: {id: item.id}}">Bewerk</RouterLink>
                </td>
                <td>
                    <button @click="removeGrocery(index)">Verwijder</button>
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3"><strong>Totaal</strong></td>
                <td>{{ totalCost.toFixed(2) }}</td>
            </tr>
        </tfoot>
    </table>
</template>

<style scoped></style>
