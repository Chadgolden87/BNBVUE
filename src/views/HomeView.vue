<template>
  
  <header>
    <img src="../assets/image1.png" alt="Logo" class="logo">
    <h1 class="bnb">Books  &  Breakfast  Louisville</h1>

  </header>


  <section class="mission">
    <p>Books and Breakfast Louisville is an organization founded in the wake of the tragic murder of Mike Brown by Ferguson police in Missouri. Since August 2015, we have been dedicated to political educaiton and community building. Our mission is to empower individuals with knowledge, unity, and the tools to address systemic injustices within their communities.</p>
  </section>


  <section class="image-quote-grid">
    <div class="quote-container">
      <img src="../assets/MEBNB.jpg" alt="Image 1">
      <div class="quote-text">"Education is the passport to the future, for tomorrow belongs to those who prepare for it today." - Malcolm X</div>
    </div>
    <div class="quote-container">
      <img src="../assets/462688835_2567484726769986_3834716198970452907_n.jpg" alt="Image 2">
      <div class="quote-text">"Injustice anywhere is a threat to justice everywhere." - Martin Luther King Jr.</div>
    </div>
    <div class="quote-container large">
      <img src="../assets/playcousins.jpg" alt="Image 3">
    </div>
    <div class="quote-container">
      <img src="../assets/Quintez.jpg" alt="Image 4">
    </div>
    <div class="quote-container">
      <img src="../assets/BNBCREW.jpg" alt="Image 5">
      <div class="quote-text">"The revolution is not an apple that falls when it is ripe. You have to make it fall." - Che Guevara</div>
    </div>
    <div class="quote-container tall">
      <img src="../assets/youngins.jpg" alt="Image 6">
      <div class="quote-text">"Power concedes nothing without a demand. It never did and it never will." - Frederick Douglass</div>
    </div>
  </section>
<br>
<br>

  <section class="cta-section">
    <div class="support-text-box">
    <h2 class="support">Support Our Mission</h2>
    
    <p class="support-text">Books and Breakfast Louisville thrives because of the dedication and generosity of our community. Whether it's through a donation or volunteering your time, your contribution makes a difference in the fight for equity and justice.</p>
  </div>
    <br>
    <br>

    <div class="cta-container">
      <div class="cta-card">
        <h3>Make a Donation</h3>
        <p class="donation-text">Your financial support helps us organize events, provide educational resources, and serve the community.</p>
        <router-link to="/donations">
          <button class="cta-button">Donate Now</button>
        </router-link>
      </div>

      <div class="cta-card">
        <h3>Become a Volunteer</h3>
        <p class="donation-text">Join us in creating positive change by donating your time and skills. There are many ways to get involved.</p>
        <router-link to="/volunteer">
          <button class="cta-button">Sign Up to Volunteer</button>
        </router-link>
      </div>
    </div>
  </section>

  



    <footer>
    <div class="partners">
      <a href="https://change-today.org/">
          
          <img
            class="ctct"
            src="https://i0.wp.com/change-today.org/wp-content/uploads/2021/07/cropped-Logo_Simple_2color-2.png?fit=200%2C150&ssl=1"
        /></a>
        <a href="https://www.instagram.com/wlwc4art/?hl=en">
          <img
            class="wlwc"
            src="https://images.squarespace-cdn.com/content/v1/6080500888dd590fd4ea761d/1619026683227-PS8IS892RCUSA5C7YF92/wlwc.jpg"
            alt=""
        /></a>
        <a href="https://kyblack.org/">
          <img class="black" src="https://kyblack.org/img/logo.svg"
        /></a>

      <a href="https://playcousinscollective.wildapricot.org/">
          <img
            class="play"
            src="https://s3.us-east-1.amazonaws.com/files.galaxydigital.com/5426/agency/114853.jpg?20230808184322?area=agency"
            alt=""
        /></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: #111;
  color: white;
}


  .bnb {
  font-family: "Bebas Neue", serif;
  font-weight: 400;
  font-size: 100px;
  font-style: normal;
}



header {
  width: 100%;
  background-color: #32cd32; 
  text-align: center;
  padding: 20px 0;
}

header h1 {
  color: #fff;
  margin-bottom: 10px;
  font-size: 36px;
}

header img.logo {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}

header nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}

header nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}


.mission {
  text-align: center;
  padding: 40px 20px;
  background-color: #000;
  color: #fff;
  
}

.mission p {
  font-size: 28px;
  max-width: 800px;
  margin: 0 auto;
  font-family: "Agdasima", sans-serif;
  font-weight: 700;
  font-style: normal;

}

.image-quote-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px;
  
}

.image-quote-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.quote-container {
  position: relative;
  display: inline-block;
}

.quote-text {
  position: absolute;
  top: 0;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  font-style: italic;
}


.cta-section {
  padding: 40px 20px;
  background-color: #111;
  color: white;
  text-align: center;
  
}

.support {
  text-align: center;
  font-family: "Agdasima", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 30px;
  

}

.support-text-box {
  justify-content: center;
  text-align: center;
  
}

.support-text {
  text-align: center;
  font-family: "Agdasima", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 30px;
}
.cta-container {
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 20px;
  
}

.donation-text {
  text-align: center;
  font-family: "Agdasima", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  margin-bottom: 8px;

}

.cta-card {
  background-color: #222;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  width: 300px;
  margin-bottom: 20px;
}

.cta-button {
  background-color: #ff0000;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cta-button:hover {
  background-color: #e60000;
}


footer {
  background-color: #111;
  text-align: center;
}

footer .partners img {
  width: 100%;
  margin: 0 50px;
  gap: 40px;
}

.partners {
  display: flex;
  justify-content: space-evenly;
  height: 200px;
  width: 100vw;
  background-color: black;
  overflow-x: hidden;

}

.ctct {
  height: 150px;
}

.wlwc {
  width: 150px;
  height: 200px;
}

.play {
  width: 150px;
  height: 200px;
}

.black {
  width: 150px;
  height: 200px;
  background-color: black;
}
</style>