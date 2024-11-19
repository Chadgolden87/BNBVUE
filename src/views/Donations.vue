<script setup></script>

<template>
  <div class="donations-page">
    <h1 class="page-title">Support Books and Breakfast</h1>

    
    <section class="donation-options">
      <div class="donation-option">
        <h2>One-Time Donation</h2>
        <p>Your generous support helps us to continue our mission.</p>
        <a href="https://ko-fi.com/booksandbreakfastlouisville"
          ><button class="donate-button">Donate Now</button></a
        >
      </div>

      <div class="donation-option">
        <h2>Monthly Donation</h2>
        <p>Become a monthly donor and sustain our efforts all year long.</p>
        <a href="https://ko-fi.com/booksandbreakfastlouisville"
          ><button class="donate-button">Donate Monthly</button></a
        >
      </div>
    </section>

    
    <section class="donation-amounts">
      <h2>Choose a Donation Amount</h2>
      <div class="amount-options">
        <a href="https://ko-fi.com/booksandbreakfastlouisville"
          ><button class="amount-button">$10</button></a
        >
        <a href="https://ko-fi.com/booksandbreakfastlouisville"
          ><button class="amount-button">$25</button></a
        >
        <a href="https://ko-fi.com/booksandbreakfastlouisville"
          ><button class="amount-button">$50</button></a
        >
        <a href="https://ko-fi.com/booksandbreakfastlouisville"
          ><button class="amount-button">$100</button></a
        >
      </div>
    </section>
  </div>
</template>

<style scoped>
.donations-page {
  padding: 40px 20px;
  background-color: #111; 
  color: white;
  text-align: center;
}

.page-title {
  font-size: 36px;
  color: #32cd32; 
  margin-bottom: 40px;
}

.donation-options {
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
}

.donation-option {
  background-color: #222;
  border: 3px solid #32cd32; 
  padding: 20px;
  width: 300px;
  border-radius: 10px;
}

.donation-option h2 {
  color: #ffcc00; 
  margin-bottom: 20px;
}

.donate-button {
  background-color: #ff0000; 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}

.donate-button:hover {
  background-color: #e60000;
}

.donation-amounts {
  margin-top: 40px;
}

.amount-options {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.amount-button {
  background-color: #32cd32; 
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}

.amount-button:hover {
  background-color: #28a745;
}
</style>
