import path from "path"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr:false,
  tailwindcss: { injectPosition: "first", cssPath: "~/assets/styles/tailwind.css" },
  customElements: {
    entries: [
      {
        name: 'Example',
        tags: [
          {
            name: 'ChatWidget',
            path: '@/components/ChatWidget.ce.vue',
            options: {
              props: {
                title: 'Prop. Example Title'
              }
            },
            slotContent: 'Slot Example Content'
          }
        ]
      }
    ]
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxtjs/device",
    "nuxt-custom-elements",
    [
      "@pinia/nuxt",
      {
        autoImports: [
          "storeToRefs",
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
    [
      "@vee-validate/nuxt",
      {
        autoImports: true,
      },
    ],
  ],

})
