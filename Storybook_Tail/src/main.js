import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import 'floating-vue/dist/style.css';
import FloatingVue from 'floating-vue';

const app = createApp(App);

app.use(FloatingVue);

app.mount('#app');
