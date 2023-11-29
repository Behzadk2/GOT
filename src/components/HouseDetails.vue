<!-- HouseDetails.vue -->

<template>
    <div>
      <h2>{{ house.name }} Members</h2>
      <ul>
        <li v-for="member in house.members" :key="member.id">
          {{ member.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        house: {},
      };
    },
    mounted() {
      const houseId = this.$route.params.id;
      axios.get(`https://gameofthronesquotes.xyz/houses/${houseId}`)
        .then(response => {
          this.house = response.data;
        })
        .catch(error => {
          console.error('Error fetching house details:', error);
        });
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles for HouseDetails.vue */
  </style>
  