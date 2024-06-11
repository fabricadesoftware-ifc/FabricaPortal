import './assets/style/global.css';
import './assets/style/base.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import 'boxicons'

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');