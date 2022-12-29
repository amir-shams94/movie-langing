<!-- <template>
  <FilterMovie/>
  <div class="columns is-multiline">
<MovieItem  />

  </div>
</template>
  
<script setup>
import MovieItem from '@/components/movie/MovieItem.vue'
import FilterMovie from '@/components/movie/Number.vue'
import { useMoviesStore } from '@/store/movie.js'
import { computed } from 'vue';
const store = useMoviesStore()

async function fetchMovie() {
  await store.fetchMovie()
}
fetchMovie()

const movies = computed(() => store.allMovie)

</script>
  

  
   -->