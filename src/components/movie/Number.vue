<template>

    <div class="field">
        <label class="label">Name</label>
        <div class="control">
            <input class="input is-normal" v-model="number" type="number" placeholder="rate movie">
        </div>
        <button @click="filterMovie">Search</button>
    </div>

</template>
<script setup>

import { useMoviesStore } from '@/store/movie';
import { ref } from 'vue'
const number = ref()
const store = useMoviesStore()
async function filterMovie() {
    await store.filter(number.value)
}

</script>
 