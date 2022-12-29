<template>

    <section class="hero is-warning mb-5">
        <div class="hero-body">
            <p class="title">
                All Movies:
            </p>
            <p class="subtitle">
                List of 100 Movies
            </p>
        </div>
    </section>
    <div class="columns is-multiline">

        <div class="column is-4" v-for="movie in movies" :key="movie.id">
            <div class="card">
                <div class="card-image">
                    <figure class="image">
                        <img class="is-rounded" :src="movie.image" :alt="movie.title">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <div class="title is-4">
                                <router-link  :to="{ name: 'detail', params: { id: movie.id } }">
                                    {{ movie.title }}
                                </router-link>
                            </div>


                            <div class="tags are-medium">
                                <div v-for="g in movie.genre">
                                    <span @click="searchGenre(g)" class="tag is-dark mr-2 tag-size">{{ g }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content">
                        {{ movie.description }}

                        <br>

                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
<script setup>

import { useMoviesStore } from '@/store/movie.js'
import { computed } from 'vue';


const store = useMoviesStore()
function searchGenre(g) {
    // console.log(g);
    store.filterMovie(g)
}
async function fetchMovie() {
    // loading.value=true
    await store.fetchMovie()
    // loading.value=false
}
fetchMovie()

const movies = computed(() => store.allMovie)
</script>

<style scoped>
.tag-size {
    font-size: .75rem!important;
}
.tag{
    cursor: pointer;
}
.title{
    min-height: 3.2rem!important;
}
.title>a{
  color:#282828!important
}
</style>


 