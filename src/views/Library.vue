<script setup>
import Books from '@/components/Books.vue';
import { reactive } from 'vue';
import router from '@/router';


const bookshelf = reactive([])

fetch('https://bnb-express.vercel.app/library')
.then(response => {
    return response.json()
})
.then(covers => {
    bookshelf.push(...covers)
    console.log(covers)
});


function bookDetails(id) {
    router.push({ name: 'bookdetail', params: { id: id } })

}


</script>

<template>
    <div class="library-page">
        <h1 class="page-title">Library</h1>
    
    <div class="book-container">


    <div class="book-wrapper">
        <Books @click="bookDetails(books.id)" v-for="books in bookshelf" :books = "books"></Books>
        
    </div>
    </div>
</div>

</template>



<style scoped>

.library-page {
    background-color: #111;
    padding: 40px 20px;
    min-height: 100vh;
    color: white;
}

.page-title {
    text-align: center;
    font-size: 36px;
    color: #32cd32;
    margin-bottom: 40px;
}

.book-container {
  display: flex;
  justify-content: center;
  flex-direction: column; 
  align-items: center;
  padding: 20px;


}

.book-wrapper {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-evenly;
    gap: 25px;
    width: 100%;
    max-width: 1200px;
}
</style>