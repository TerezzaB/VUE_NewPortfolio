import { createApp } from 'vue';
import App from './App.vue';
import { Library } from '@heroicons/vue'
import router from './router';

import './index.css';
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css'; 
import 'primeicons/primeicons.css';

import TabMenu from 'primevue/tabmenu';

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.component('P-TabMenu', TabMenu);
app.component('Icon', Library)

app.mount('#app');
