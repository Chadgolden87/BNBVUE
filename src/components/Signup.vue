<script setup>
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

<div class="signup-form-container">
  <h2 class="signup-title">Become a Volunteer!</h2>


  <div class="signup-form">
    <form @submit.prevent="addItem">
      <div class="form-group">
        <label for="name">Name</label>
        <input name="name" type="text" v-model="danname" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input name="email" type="email" v-model="dannemail" required />
      </div>

      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input name="phone" type="text" v-model="danphone" required />
      </div>

      
      <div class="form-group">
        <label for="event">Event</label>
        <select name="event" v-model="danevent" required>
          <option disabled value="">Please select an event</option>
          <option value="Books and Breakfast Event 1">Books and Breakfast October</option>
          <option value="Community Workshop">Community Workshop</option>
          <option value="Fundraising Drive">Fundraising Drive</option>
          <option value="Food Distribution">Food Distribution</option>
        </select>
      </div>

      <div class="form-group">
        <label for="volunteerRole">Volunteer Role</label>
        <select name="volunteerRole" v-model="damnavailability" required>
          <option disabled value="">Please select a role</option>
          <option value="Setup">Setup/Breakdown</option>
          <option value="Cook/Distribute Food">Cook/Distribute Food</option>
          <option value="Facilitator">Facilator</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>
</div>
</template>



<style scoped>

.signup-form-container {
  
  background-color: #222;
}

.signup-title {
  
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #10a54a;
}

.signup-form {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: bold;
  color: #ffcc00; 
  margin-bottom: 8px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #32cd32; 
  background-color: #222;
  color: white;
}

.submit-button {
  background-color: #ff0000; 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}

.submit-button:hover {
  background-color: #e60000;
}


</style>