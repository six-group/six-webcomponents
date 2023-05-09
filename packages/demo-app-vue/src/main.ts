import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { ComponentLibrary } from '@six-group/ui-library-vue';

import '@six-group/ui-library/dist/ui-library/ui-library.css';

createApp(App).use(ComponentLibrary).use(router).mount('#app');
