<script setup>
import {reactive, computed} from 'vue';

const groceries = defineModel('groceryList');

const totalCost = computed(() => {
    let total = 0;
    for (const key in groceries.value) {
        let subTotal = groceries.value[key].price * groceries.value[key].count;
        total += subTotal;
        groceries.value[key].sub_total = subTotal;
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
                <th>Acties</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in groceries" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>
                    <input type="number" v-model="item.count" placeholder="Type aantal..." />
                </td>
                <td>{{ item.sub_total.toFixed(2) }}</td>
                <td>
                    <RouterLink :to="{path: '/edit/', query: {id: item.id}}">Bewerk</RouterLink>
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
