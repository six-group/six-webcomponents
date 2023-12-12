import { ComponentLibrary } from '@six-group/ui-library-vue';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@six-group/ui-library/dist/ui-library/ui-library.css';
import './main.css';

const app = createApp(App).use(ComponentLibrary).use(router);

app.mount('#app');
