import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import routes from 'virtual:generated-pages';
import store from './store/index'
import App from './layout/default.vue';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
