<!-- PersonDetails.vue -->

<template>
    <div>
      <h2>{{ person.name }}</h2>
      <p>House: {{ person.house }}</p>
      <h3>Quotations</h3>
      <ul>
        <li v-for="quote in person.quotations" :key="quote.id">
          "{{ quote.text }}"
        </li>
      </ul>
      <button @click="fetchOtherQuotations">Fetch Other Quotations</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        person: {},
      };
    },
    mounted() {
      const personId = this.$route.params.id;
      axios.get(`https://gameofthronesquotes.xyz/persons/${personId}`)
        .then(response => {
          this.person = response.data;
        })
        .catch(error => {
          console.error('Error fetching person details:', error);
        });
    },
    methods: {
      fetchOtherQuotations() {
        const personId = this.$route.params.id;
        axios.get(`https://gameofthronesquotes.xyz/persons/${personId}/other-quotations`)
          .then(response => {
            this.person.quotations = response.data;
          })
          .catch(error => {
            console.error('Error fetching other quotations:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
 .person-details {
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
  