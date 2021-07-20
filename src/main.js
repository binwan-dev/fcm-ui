import { createApp } from 'vue';
import router from '@/router';
import Index from './Index.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/adminlte.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'admin-lte/dist/js/adminlte.min.js'


createApp(Index).use(router).mount('#app')

// createApp(App).mount('#app')
