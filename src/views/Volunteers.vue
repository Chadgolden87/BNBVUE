<script setup>
import Signup from '@/components/Signup.vue';
import { reactive } from 'vue';
import router from '@/router';

let damnname = ""
let damnemail = ""
let damnphone = ""
let damnavailability = ""
let damnevent = ""

function addItem() {
    let signups = {
            "name": damnname,
            "email": damnemail,
            "phone": damnphone,
            "availability": damnavailability,
            "organization": damnorganization,
            "event": damnevent
        }

        const params = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },

            body: JSON.stringify(signups),
       
    };

    fetch('http://localhost:3000/volunteer', params)
    .then(response => response.json())
    .then(() => {
        router.push('/volunteer')
        
    })
}
</script>


<template>
<div class="volunteers-page">
    <h1 class="page-title">Join Us as a Volunteer</h1>

    <!-- Intro message for volunteers -->
    <p class="volunteers-intro">
      We appreciate your interest in supporting Books and Breakfast. Whether you have a few hours to spare or want to commit more time, there's a place for you here. Join us in making a difference!
    </p>

    <!-- Signup Form from Signup.vue component -->
    <div class="signup-section">
      <Signup />
    </div>
  </div>


    <div class="book-container">

        
<div class="book-wrapper">
    <Signup v-for="newvolunteers in newvolunteers" :newvolunteers = "newvolunteers"></Signup>
</div>
</div>
</template>



<style scoped>
.volunteers-page {
  padding: 40px 20px;
  background-color: wheat; /* Dark background for consistency */
  color: white;
  text-align: center;
}

.page-title {
  font-size: 36px;
  color: #32cd32; /* Green title for Pan-African theme */
  margin-bottom: 20px;
}

.volunteers-intro {
  max-width: 800px;
  margin: 0 auto 40px auto;
  font-size: 18px;
  color: #fff;
}

.signup-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

</style>
