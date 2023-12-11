import {createApp, defineCustomElement,getCurrentInstance} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'

const pinia = createPinia()
const app=createApp(App)
document.body.insertAdjacentHTML('beforeend',`<div id="Wiki_diget"><chat-widget/></div>`)
app.use(pinia).mount("#Wiki_diget")

const chatWidget = defineCustomElement({
    render: () => h(App),
    styles: App.styles,
    props: {},
    setup() {
      const instance = getCurrentInstance();
      Object.assign(instance?.appContext, app._context);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      Object.assign(instance?.provides, app._context.provides);
    },
  });
  customElements.define('chat-widget', chatWidget);