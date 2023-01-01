import { defineStore } from 'pinia'
import axios from 'axios'

export const useNewsStore = defineStore('news', {
  state: () => {
    return {
      news: localStorage.getItem('news')
        ? JSON.parse(localStorage.getItem('news'))
        : [],
      // movies:[]
    }
  },
  getters: {
    allNews: (state) => state.news,
    searchMovie: (state) => {
      return (words) => {
        state.news = state.news.filter((item) => {
          const check = item.title.includes(words)
          if (check) {
            return item
          } 
        })
      }
    },

      
 },
  actions: {
    async fetchNews() {
      const response = await axios.get(
        'https://movies-news1.p.rapidapi.com/movies_news/recent',
        {
          headers: {
            'X-RapidAPI-Key':
              'c870abdb16mshe81fdd335a0097fp188bd4jsnc6616960d21d',
            'X-RapidAPI-Host': 'movies-news1.p.rapidapi.com',
          },
        },
      )
      this.news = response.data
      localStorage.setItem('news', JSON.stringify(this.news))
    },
  },
})
