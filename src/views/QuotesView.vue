<template>
    <div class="quotes-view">
      <h1>Quotes</h1>
      <ul>
        <li v-for="quote in quotes" :key="quote.id">
          "{{ quote.text }}" - {{ quote.author }}
        </li>
      </ul>
      <button @click="fetchRandomQuotes">Fetch Random Quotes</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        quotes: [],
      };
    },
    mounted() {
      this.fetchRandomQuotes();
    },
    methods: {
      fetchRandomQuotes() {
        axios.get('https://api.gameofthronesquotes.xyz/v1/random')
          .then(response => {
            this.quotes = response.data;
          })
          .catch(error => {
            console.error('Error fetching quotes:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .quotes-view {
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
  
  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  