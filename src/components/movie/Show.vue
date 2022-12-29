<template>
    <div class="column  is-3">
       <div class="card ">
         <div class="card-image">
           <figure class="image">
             <img :src="props.movie.image" :alt="props.movie.title">
           </figure>
         </div>
         <div class="card-content">
           <div class="media">
             <div class="media-content">
               <p class="title is-4">{{props.movie.title}}</p>
               <p class="subtitle is-6">{{props.movie.genr}}</p>
             </div>
           </div>
 
           <div class="content">
             {{props.movie.description}}
    
             <br>
  
           </div>
         </div>
       </div>
     </div>
 </template>
 <script setup>
 import { defineProps } from 'vue'
 const props = defineProps({
     movie:Object
 })
 </script>
 