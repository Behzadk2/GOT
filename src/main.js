import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HousesView from './views/HousesView.vue';
import PersonsView from './views/PersonsView.vue';
import QuotesView from './views/QuotesView.vue';
import HouseDetails from './components/HouseDetails.vue';
import PersonDetails from './components/PersonDetails.vue';

const routes = [
  { path: '/houses', component: HousesView },
  { path: '/persons', component: PersonsView },
  { path: '/quotes', component: QuotesView },
  { path: '/houses/:id', component: HouseDetails, name: 'HouseDetails' },
  { path: '/persons/:id', component: PersonDetails, name: 'PersonDetails' },
  { path: '/', redirect: '/houses' }, // Redirect to /houses by default
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
