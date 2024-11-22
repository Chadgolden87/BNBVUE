<script setup>
import { reactive } from "vue";
const props = defineProps(["id"]);
import { ref } from "vue";

let book = ref({
  title: "",
  // author: ""
});

let locations = ref([]);
let loadingLocations = ref(true);

fetch(`https://bnb-express.vercel.app/library/${props.id}`)
  .then((response) => {
    return response.json();
  })
  .then((details) => {
    console.log(details);
    book.value.title = details[0].title;
    book.value.author = details[0].author;
    book.value.pdf = details[0].pdf;
    book.value.coverimg = details[0].coverimg;

    fetch(
      `https://services1.arcgis.com/79kfd2K6fskCAkyg/arcgis/rest/services/Louisville_Metro_KY_Library_Collection_Inventory/FeatureServer/0/query?where=Title%20%3D%20'${book.value.title}'&outFields=ItemLocation,ItemType,Title,Author,ISBN&outSR=4326&f=json`
    )
      .then((response) => {
        return response.json();
      })
      .then((books) => {
        books.features.forEach((book) => {
          libraryArray.push(book.attributes);
        });
        loadingLocations.value = false;
        console.log(libraryArray);
      });

    console.log(book.value);
  });
console.log(book.value.title);

const libraryArray = reactive([]);
</script>

<template>

  <div class="book-detail">
  <div class="bookinfo">
    <h2 class="title">{{ book.title }}</h2>
    <img class="image" :src="book.coverimg" />
    <h3 class="author">{{ book.author }}</h3>
    <a class="pdf-link" :href="book.pdf">PDF LINK</a>
  </div>


  <div>
    <div class="loading" v-if="loadingLocations">Loading Locations</div>
    <div class="info-item" v-else-if="libraryArray.length">
      <div v-for="details in libraryArray">
        <div>Branch Location: {{ details.ItemLocation }}</div>

        <div>Media Type: {{ details.ItemType }}</div>
      </div>
    </div>
    <div class="no-info" v-else>No Locations Found</div>
  </div>
</div>

</template>

<style scoped>
.book-detail {
    background-color: #111;
    padding: 40px 20px;
    min-height: 100vh;
    color: white;
    
}

.bookinfo {

  margin-top: 70px;
  text-align: center;
}

.image {
  height: 600px;
  object-fit: cover;
  border-radius: 10px;
  margin: 20px 0;
}

.title {
  margin-top: 30px;
  font-weight: 600;
  font-size: 35px;
  color: #ff0000;
}

.author {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 25px;
}

.library-info {
    margin-top: 30px;
}

.loading, .no-info {
    font-size: 16px;
    color: #999;
    text-align: center;
    margin: 10px 0;
}

.info-item {
    display: flex;
    justify-content: space-between;

    padding: 10px;
    border-bottom: 1px solid #ddd;
    font-size: 22px;
}

.pdf-link {
    color:#ffcc00;
}
</style>
