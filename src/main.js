<<<<<<< HEAD
// 1. Líneas de verificación para Firebase (las que agregaste)
import { auth, db } from './firebase/config.js';
console.log("Firebase Conectado:", { auth, db });

// 2. Código original y necesario para iniciar Vue
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

createApp(App).mount('#app');
=======
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
>>>>>>> 885b9278d05267d3bc542ad3d19f4e421a78ce5c
