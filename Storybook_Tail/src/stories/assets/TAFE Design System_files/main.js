import { createApp } from "/node_modules/.vite/deps/vue.js?v=448d4237";
import "/src/style.css";
import App from "/src/App.vue?t=1700620804121";
import "/node_modules/floating-vue/dist/style.css";
import FloatingVue from "/node_modules/.vite/deps/floating-vue.js?v=448d4237";

const app = createApp(App);

app.use(FloatingVue);

app.mount('#app');
