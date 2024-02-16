import './bootstrap';

import { createApp } from 'vue'
import Recept from "./components/Recept.vue";

const app = createApp()


app.component('recept', Recept)
app.mount('#app')
