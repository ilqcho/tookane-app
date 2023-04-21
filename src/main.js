import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'
import TextInput from './components/TextInput.vue'
import PasswordInput from './components/PasswordInput.vue'
import Title from './components/Title.vue'
import ShowRows from './components/ShowRows.vue'
import Logo from './components/Logo.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

//Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab);
const app = createApp(App);

//Enable to console.log rendered components
// app.mixin({
//     created() {
//       console.log('[created] ' + this.$options.name)
//     },
// });

app.component('TextInput', TextInput);
app.component('PasswordInput', PasswordInput);
app.component('Title', Title);
app.component('ShowRows', ShowRows);
app.component('Logo', Logo);
app.component('NavBar', NavBar);
app.component('Footer', Footer);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.use(store);
app.mount('#app');
