<!-- Houses.vue -->

<template>
    <div>
      <h1>Houses</h1>
      <ul>
        <li v-for="house in houses" :key="house.id">
          <router-link :to="{ name: 'HouseDetails', params: { id: house.id }}">
            {{ house.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        houses: [],
      };
    },
    mounted() {
      axios.get('https://api.gameofthronesquotes.xyz/v1/houses')
        .then(response => {
          this.houses = response.data;
        })
        .catch(error => {
          console.error('Error fetching houses:', error);
        });
    },
  };
  </script>
  
  <style scoped>
 .houses {
  font-family: Arial, sans-serif;
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

.house-link {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  margin-bottom: 5px;
  display: block;
}

.house-link:hover {
  text-decoration: underline;
}
  </style>
  