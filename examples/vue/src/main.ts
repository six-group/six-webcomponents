import { createApp } from 'vue';
import router from './router';
import { ComponentLibrary } from '@six-group/ui-library-vue';
import '@six-group/ui-library/dist/ui-library/ui-library.css';
import App from './App.vue';

const app = createApp(App).use(ComponentLibrary).use(router);

app.mount('#app');
