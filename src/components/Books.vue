<script setup>
import { ref } from "vue";
const props = defineProps(["books"]);
console.log(props.books.pdf);
</script>

<template>
  
  <div class="book-card" @click="$emit('click')">
    <img class="image" :src="books.coverimg" />
    <h2 class="title">{{ books.title }}</h2>
   
    <h3 class="author">{{ books.author }}</h3>
    
    <a class="pdf-links" :href="books.pdf">PDF LINK</a>
  </div>
</template>

<style scoped>

.book-card {
  background-color: #222;
  border: 3px solid #32cd32;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3ms ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.book-card:hover {
  transform: scaler(1.05);
  box-shadow: 0 8ps 16px rgba(0, 0, 0, 0.4);
}

.image {
  height: 300px;
  margin-top: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.title {
  margin-top: 30px;
  font-weight: 600;
  color: #ff0000;
  margin-bottom: 10px;
}

.author {
  margin-bottom: 10px;
  font-weight: 500;
  color: #d5d5d5;
}

.pdf-link {
  color: #ffcc00;
  font-weight: bold;
}


</style>
