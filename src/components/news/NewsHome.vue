<template>
<section class="hero is-small is-primary mb-5">
  <div class="hero-body">
    <p class="title">
 News
    </p>
    <p class="subtitle">
     Recent News
    </p>
  </div>
</section>
<div class="field">
  <div class="control">
    <input class="input " @change="search(words)" v-model="words" type="text" placeholder="Search news">
  </div>
</div>
    <div class="columns is-multiline">
    <NewsItem v-for="n in news" :key="n.title" :paper="n"/>
</div>
  </template>
  <script setup>
import NewsItem from '@/components/news/NewsItem.vue'
import { useNewsStore } from '@/store/news'
import { computed, ref } from 'vue';
const loading = ref(false)
const words =ref('')

const store = useNewsStore()
async function fetchNews() {
  await store.fetchNews()
}
fetchNews()
const news = computed(()=>store.allNews)
 function search() {
  if (words.value != '') {
     store.searchMovie(words.value)
  } else {
    fetchNews()
  }
  
  }
  </script>
  