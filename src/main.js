import { createApp } from 'vue';
import App from './App.vue';
import { Library } from '@heroicons/vue';
import router from './router';

import './index.css'; // Your custom CSS

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';  // PrimeVue theme CSS
import 'primevue/resources/primevue.min.css';            // PrimeVue core CSS
import 'primeicons/primeicons.css';                      // PrimeIcons

import Timeline from 'primevue/timeline';
import Card from 'primevue/card';

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.component('P-Timeline', Timeline);
app.component('P-Card', Card);
app.component('Icon', Library);

app.mount('#app');
