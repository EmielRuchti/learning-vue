import {ref, computed} from 'vue';

const groceries = ref([
    {id: 1, name: 'Brood', price: 1.0, count: 0},
    {id: 2, name: 'Broccoli', price: 0.99, count: 0},
    {id: 3, name: 'Krentebollen', price: 1.2, count: 0},
    {id: 4, name: 'Noten', price: 2.99, count: 0},
]);

export const getAllGroceries = computed(() => groceries.value);
export const sizeOfGroceries = computed(() => groceries.value[groceries.value.length - 1].id);
export const getGroceryById = id => computed(() => groceries.value.find(grocery => grocery.id == id));

export const updateGrocery = updateGrocery => {
    const grocery = groceries.value.find(grocery => grocery.id == updateGrocery.id);
    grocery.name = updateGrocery.name;
    grocery.price = updateGrocery.price;
    grocery.count = updateGrocery.count;
};
export const addGrocery = grocery => groceries.value.push(grocery);

export const removeGrocery = id => groceries.value.splice(id, 1);
