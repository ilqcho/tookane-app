import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Test from './components/Test.vue'
import TextInput from './components/TextInput.vue'

import './assets/main.css'

const app = createApp(App)
app.component('Test', Test);
app.component('TextInput', TextInput);

app.use(router)
app.use(store)
app.mount('#app')
