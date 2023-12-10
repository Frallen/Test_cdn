import { defineCustomElement } from 'vue'
import Buble from './components/Buble.ce.vue'

const SimpleSample = defineCustomElement(Buble)

customElements.define('Buble', SimpleSample)