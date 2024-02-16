<script setup>
 import {ref} from "vue";

 const recept = ref({title: 'Bolognese', description: 'Lekker recept voor pasta bolognese'});
</script>

<template>
    <div>
        <h1>Recept {{ recept.title }}</h1>
        <span>{{ recept.description }}</span>
    </div>
</template>

<style scoped>
    div {
        font-family: sans-serif;
    }
</style>
