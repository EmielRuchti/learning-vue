<script setup>
import router from './router';
</script>

<template>
    <p>
        <strong>Current route path:</strong>
        {{ $route.fullPath }}
    </p>
    <nav>
        <RouterLink to="/">Ga naar Overview</RouterLink>
        <RouterLink to="/create">Nieuw</RouterLink>
    </nav>
    <RouterView />
</template>

<style scoped></style>
