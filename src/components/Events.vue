<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
// import { response } from 'express';
const props = defineProps(['events']);


</script>

<template>
<div class="flex-container">
  
  <div class="event-one">
    <div class="event-details">
<h1 class="event_name">{{ events.eventname }}</h1>
<br>
<img class="bnb_image" :src="events.image">
<br>
<h2 class="venue">{{ events.venue }}</h2>
<h2 class="address">{{ events.address }}</h2>
<h2 class="date">{{ events.event_date }}</h2>
<h2 class="time">{{ events.event_time }}</h2>
<h2 class="description">{{ events.description }}</h2>
<br>
<h2 class="volunteers">Volunteers Needed: {{ events.volunteers_needed }}</h2>
<br>
<br>

<div class="button-container">
<RouterLink to="/volunteer"><button class="button">Sign up to Volunteer!</button></RouterLink>
<RouterLink to="/donations"><button class="button" >Donate!</button></RouterLink>


</div>
</div>

  </div>

</div>

</template>
  

<style scoped>

.flex-container {
  height: 100%;
}

.heading {
  font-size: 48px;
  color: #e31b23;
  text-align: center;
  margin-top: 30px;
  padding-bottom: 10px;
  border-bottom: 3px solid #10a54a;

}

.event-one {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 400px; */
  background-color: #222;
  border: 6px solid #ffd700;
  border-radius: 10px;
  margin: 20px auto;
  padding: 10px;
  width: 50%;
  /* height: 60%; */
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
  text-align: center;
  /* height: 1000px; */
}

.event-one:hover {
  transform: scale(1.03);
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.3);
}

.event-one img {
  width: 350px;
  height: auto;
  border-radius: 8px;
  margin-right: 15px;
  border: 4px solid #e31b23;
}

.event-details {
  flex: 1;
  font-size: 14px;
  color: #2d2d2d;
  padding: 0 10px;

}

.event_name {
  margin-top: 20px;
  font-weight: 800;
  color: #ff0000;
}

.venue {
  color: #ff0000;
}

.address {
  color: #10a54a;
}

.date {
  font-size: 22px;
  color: #10a54a;
  font-weight: bold;
  margin-bottom: 10px;
}

.time {
  font-size: 22px;
  /* color: #10a54a; */
  font-weight: bold;
  color: #ff0000;
  margin-bottom: 10px;
}

.description {
  flex: 1;
  font-size: 14px;
  color: #2d2d2d;
  margin: 0 auto;
  width: 80%;
  padding: 0 10px;
  background-color: #ffd700;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  text-align: left;
  margin-bottom: 15px;
  font-size: 18px;
  margin-top: 20px;
  
}

.bnb_image {
  height: 500px;
}

.volunteers {
  color: #ff0000;

}

.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.button {
  padding: 8px 16px;
  background-color: #e31b23;
  color: #fff;
  border: black solid;
  border-radius: 5px;
  cursor: pointer;
  /* height: 70px; */
  font-size: 12px;
  font-weight: 800;
  margin-bottom: 30px;
  transition: background-color 0.3s ease;
}



.button:hover {
  background-color: #c21818;
}
@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
