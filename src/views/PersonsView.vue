<template>
    <div class="persons-view">
      <h1>Persons</h1>
      <ul>
        <li v-for="person in persons" :key="person.id">
          <router-link :to="{ name: 'PersonDetails', params: { id: person.id }}">
            {{ person.name }} - {{ person.house }}
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
        persons: [],
      };
    },
    mounted() {
      axios.get('https://gameofthronesquotes.xyz/persons')
        .then(response => {
          this.persons = response.data;
        })
        .catch(error => {
          console.error('Error fetching persons:', error);
        });
    },
  };
  </script>
  
  <style scoped>
  .persons-view {
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
  