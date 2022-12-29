import { defineStore } from 'pinia'
import axios from 'axios'

export const useMoviesStore = defineStore('movies', {
  state: () => {
    return {
      movies: localStorage.getItem('movies')
        ? JSON.parse(localStorage.getItem('movies'))
        : [],
      // movies:[]
    }
  },
  getters: {
    allMovie: (state) => state.movies,
    showDetailMovie: (state) => {
      return (id) => state.movies.find((movie) => movie.id === id)
    },
    filterMovie: (state) => {
      // console.log(state.movies.genre);

      return (value) => {
        state.movies = state.movies.filter((item) => {
          for (const x of item.genre) {
            if (x === value) {
              return item
            }
          }
        })
      }
    },
  },
  actions: {
    async fetchMovie() {
      const response = await axios.get(
        'https://imdb-top-100-movies.p.rapidapi.com/',
        {
          headers: {
            'X-RapidAPI-Key':
              'c870abdb16mshe81fdd335a0097fp188bd4jsnc6616960d21d',
            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
          },
        },
      )
      this.movies = response.data
      localStorage.setItem('movies', JSON.stringify(this.movies))
    },
    //         async detailMovie(id) {

    //             const response = await axios.get(`https://imdb-top-100-movies.p.rapidapi.com/${id}`, {
    //                 headers:{
    //                     'X-RapidAPI-Key': 'c870abdb16mshe81fdd335a0097fp188bd4jsnc6616960d21d',
    //                     'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    //                   }
    //             }
    //             )

    //                 this.movies = response.data

    //             // localStorage.setItem('movies',JSON.stringify(this.movies))
    //   }
  },
})
