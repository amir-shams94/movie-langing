<template>

      <div class="column is-full ">
      <div class="card" style="display: inline-flex;" >
        <div class="card-image" style="
    width: 50%;
">
          <figure class="image">
            <img :src="props.paper.image" :alt="props.paper.title">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <div class="title ">
                <h4 class="is-4">
                  {{ props.paper.title }}
                </h4>
              </div>
  
  
              <div class="tags">
                <span class="tag  mr-2 tag-size is-warning">{{ props.paper.date }}</span>
             
              </div>
            
          </div>
  
      
        </div>
        <div class="content">
            {{ props.paper.description }}
  
           
  
          </div>
      </div>
    </div>
    </div>

  </template>
  <script setup>
import {defineProps} from 'vue'
const props = defineProps({
paper:Object
})

  
  
  
  </script>
  