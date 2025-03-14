import {reactive, computed} from 'vue';

const groceries = reactive([
    {id: 1, name: 'Brood', price: 1.0, count: 0, sub_total: 0},
    {id: 2, name: 'Broccoli', price: 0.99, count: 0, sub_total: 0},
    {id: 3, name: 'Krentebollen', price: 1.2, count: 0, sub_total: 0},
    {id: 4, name: 'Noten', price: 2.99, count: 0, sub_total: 0},
]);

export const getAllGroceries = computed(() => groceries);
export const sizeOfGroceries = computed(() => groceries.length);
export const getGroceryById = id => computed(() => groceries.find(grocery => grocery.id == id));

export const addGrocery = grocery => groceries.push(grocery);
