import {createApp} from 'vue'
import './tailwind.css'
import App from './App.vue'
import {createPinia} from 'pinia'

const pinia = createPinia()
document.body.insertAdjacentHTML('beforeend',`<div id="Wiki_diget"></div>`)
createApp(App).use(pinia).mount('#Wiki_diget')
