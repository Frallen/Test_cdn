import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from "unplugin-vue-components/vite"
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    build:{ 
        lib: {
          // Could also be a dictionary or array of multiple entry points
          entry: path.resolve(__dirname, './src/main.ts'),
          name: 'MyLib',
          // the proper extensions will be added
          fileName: 'my-lib',
          formats:["es","cjs","iife","umd"]
        },
        rollupOptions: {
          // make sure to externalize deps that shouldn't be bundled
          // into your library
          external: ['vue'],
          output: {
            // Provide global variables to use in the UMD build
            // for externalized deps
            globals: {
              vue: 'Vue',
            },
          },
        },},
    server: {
        port: 3000
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    plugins: [
        vue(),
        Components({
            dirs: ['./src/components',"./src/pages"],
            dts: true
        }),
        AutoImport({
            dts: true,
            vueTemplate: true,
            dirs: [
                './src/store',
                './src/types',
                './src/composables' // only root modules
                // './composables/**', // all nested modules
            ],
            imports: [
                "vue",
                '@vueuse/core',
                {
                    "pinia": [
                        'storeToRefs',
                        // automatically imports `defineStore`
                        "defineStore", // import { defineStore } from 'pinia'
                        // automatically imports `defineStore` as `definePiniaStore`
                        ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
                    ]
                }
            ]
        })
    ],
    css: {

    },
})
