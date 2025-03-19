<script setup>
import {ref, computed} from 'vue';
import {removeGrocery} from './../store';

const groceries = defineModel('groceryList');

const totalCost = computed(() => {
    let total = 0;
    for (const item of groceries.value) {
        total += item.price * item.count;
    }
    return total;
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
                <td>{{ (item.price * item.count).toFixed(2) }}</td>
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
