import { createApp } from 'vue'
// import { Skeletor } from 'vue-skeletor';
import App from './App.vue'
import './index.css'
import router from './router'
import 'vue-skeletor/dist/vue-skeletor.css';

let app = createApp(App)

app.use(router)
// app.component(Skeletor.name, Skeletor);
app.mount('#app')
