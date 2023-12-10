import { defineCustomElement } from 'vue'
import Buble from './components/Buble.ce.vue'

const element = defineCustomElement(Buble)

customElements.define('Buble', element)