// 1. Líneas de verificación para Firebase (las que agregaste)
import { auth, db } from './firebase/config.js';
console.log("Firebase Conectado:", { auth, db });

// 2. Código original y necesario para iniciar Vue
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

createApp(App).mount('#app');
