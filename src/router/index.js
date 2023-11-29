// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import House from '../components/House.vue';
import HouseDetails from '../views/HouseDetails.vue'; // Example of a house details view
import Person from '../components/Person.vue';
import PersonDetails from '../views/PersonDetails.vue'; // Example of a person details view
import Quote from '../components/Quote.vue';

const routes = [
  {
    path: '/houses',
    name: 'Houses',
    component: House,
  },
  {
    path: '/houses/:id', // Example dynamic route for house details
    name: 'HouseDetails',
    component: HouseDetails,
    props: true,
  },
  {
    path: '/persons',
    name: 'Persons',
    component: Person,
  },
  {
    path: '/persons/:id', // Example dynamic route for person details
    name: 'PersonDetails',
    component: PersonDetails,
    props: true,
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: Quote,
  },
  // Add more routes for other sections as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
