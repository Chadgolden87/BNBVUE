<script setup>
// import Vue from 'vue';
// import VueSound from 'vue-sound';

// Vue.use(VueSound)
</script>

<template>
  <body>
    <!-- <div class="pic-background">
    <div class="title-text">
      <h1>BOOKS &</h1>
      <h1>BREAKFAST</h1>
      <h2>LOUISVILLE</h2>
    </div>
  </div> -->
    <RouterLink to="/">
      <img
        href="http://localhost:5173/"
        class="logo"
        src="./assets/image1.png"
      />
    </RouterLink>

    <div class="flex-container">
      <div class="topnav">
        <a href="/">Home</a>
        <a href="/upcoming">Upcoming Events</a>
        <a href="/library">Library</a>
        <a href="/volunteer">Volunteer!</a>
        <a href="/donations">Donations!</a>
      </div>

      <!-- <audio controls>
  <source src="https://www.youtube.com/watch?v=TqNk830tce8" type="audio/video">
 </audio>  -->
      <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/TqNk830tce8?si=l_vqpOi21fcqCpVr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->
      <RouterView />
    </div>
  </body>
</template>

<style scoped>
/* .logo {
  height: 100px;
} */

/* .flex-container {
  display: flex;
  flex-direction: column;
  align-items: center; 
   width: 100vw;
} */

.logo {
  border-radius: 500px;
  width: 80px;
  height: auto;
  position: absolute;
  top: 1px;
  left: 5%;
  transform: translateX(-50%);
  padding: 10px;
}

body {
  text-align: center;
  height: 100vh;
  width: 100vw;
}
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.topnav {
  background-color: rgb(28, 116, 15);
  height: 88px;
  width: 100%;
  gap: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "Agdasima", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 32px;
  padding-bottom: 20px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04aa6d;
  color: white;
}
</style>
