import { createApp } from 'vue'
import App from './App.vue'
import vClickOutside from 'click-outside-vue3'
import './style.css'

createApp(App)
  .use(vClickOutside)
  .mount('#app')
