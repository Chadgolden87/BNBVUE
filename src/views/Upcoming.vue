<script setup>
// import router from '@/router';
import Events from '@/components/Events.vue';
// import { response } from 'express';
import { reactive } from 'vue';

const upcomingEvents = reactive([])

fetch('http://localhost:3000/upcoming')
.then(response => {
    return response.json()
})
.then(cards => {
    upcomingEvents.push(...cards)
})



</script>

<template>
<div class="event-card">
    <h1 class="page-title">Upcoming Events</h1>
    




 <div>
    <Events v-for="events in upcomingEvents" :events = "events"></Events>
 </div>
</div>


<img src="/Users/chadgolden/Library/CloudStorage/OneDrive-Humana/Desktop/Bnb VUE/Bnb VUE/src/assets/cropped-Logo_Simple_2color-2.webp" alt="">
  


  
</template>

<style>
.event-card {
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    height: 300px;
    width: 50%;
    background-color: #050505; */
    background-color: #111;
    padding: 40px 20px;
    min-height: 100vh;
    color: white;
    
}

.description {
    /* width: 800px;
    align-items: center;
    padding: 10px; */
}

.page-title {
    text-align: center;
    font-size: 36px;
    color: #32cd32;
    margin-bottom: 40px;
}
</style> 
