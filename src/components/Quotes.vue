<!-- Quotes.vue -->

<template>
    <div class="person-details">
      <h2>{{ person.name }}</h2>
      <p>House: {{ person.house }}</p>
      <h3>Quotations</h3>
      <ul>
        <li v-for="quote in person.quotations" :key="quote.id">
          "{{ quote.sentence }}"
        </li>
      </ul>
      <button @click="fetchOtherQuotations" class="quote-button">Fetch Other Quotations</button>
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
.quotes {
  font-family: Arial, sans-serif;
  padding: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

.quote-button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.quote-button:hover {
  background-color: #0056b3;
}
  </style>
  