import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/Home.vue'
// import MoviePage from '@/pages/Movie.vue'
import TemplateMovie from '../components/movie/TemplateMovie.vue'
import MovieIndex from '../components/movie/MovieIndex.vue'
import ShowMovie from '../components/movie/MovieItem.vue'
const routes = [
  { name: 'home', path: '/', component: HomePage },
  {
    name: 'movie',
    path: '/movie',
    component: TemplateMovie,
    children: [
      { name: 'movie', path: '', component: MovieIndex },

      { name: 'detail', path: ':id', component: ShowMovie },
    ],
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
