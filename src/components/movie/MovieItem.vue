<template>
  <div class="column ">
    <div class="card" style="display: inline-flex;">
      <div class="card-image">
        <figure class="image">
          <img :src="movie.image" :alt="movie.title">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <div class="title ">
              <router-link class="is-4" :to="{ name: 'detail', params: { id: movie.id } }">
                {{ movie.title }}
              </router-link>
            </div>


            <div class="tags are-medium">
              <span class="tag  mr-2 tag-size is-warning">{{ movie.rating }}</span>
              <div v-for="g in movie.genre">
                <span class="tag is-dark mr-2 tag-size">{{ g }}</span>
              </div>
            </div>
            <div class="tags are-medium">
              <span class="tag  mr-2 tag-size is-primary">{{ movie.year }}</span>
              <div v-for="d in movie.director">
                Director: <span class="tag is-light mr-2 tag-size">{{ d }}</span>
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
</template>
<script setup>
import { useRoute } from 'vue-router'
import { useMoviesStore } from '@/store/movie.js';
import { computed } from '@vue/reactivity';
// import { computed } from 'vue';
const route = useRoute()

const store = useMoviesStore();
// async function showDetail() {
//   await store.detailMovie(route.params.id)
// }
// showDetail()
const movie = computed(() => store.showDetailMovie(route.params.id))



</script>
