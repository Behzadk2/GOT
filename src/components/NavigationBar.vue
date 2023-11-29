<template>
    <div class="navigation">
      <router-link to="/houses" class="nav-link">Houses</router-link>
      <router-link to="/persons" class="nav-link">Persons</router-link>
      <router-link to="/quotes" class="nav-link">Quotes</router-link>
    </div>
  </template>
  
  <script>
  export default {
    // Component logic
  };
  </script>
  
  <style scoped>
  .navigation {
    background-color: #222;
    padding: 10px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  }
  
  .nav-link {
    margin: 0 15px;
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s ease;
  }
  
  .nav-link:hover {
    color: #ffcc00;
  }
  </style>
  