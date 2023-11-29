<template>
    <div class="houses-view">
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
      axios.get('https://api.gameofthronesquotes.xyz/v1/house/lannister')
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
  .houses-view {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 5px;
  }
  
  router-link {
    text-decoration: none;
    color: #333;
  }
  
  router-link:hover {
    text-decoration: underline;
  }
  </style>
  