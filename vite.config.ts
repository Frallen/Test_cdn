import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from "unplugin-vue-components/vite"
import * as path from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig(({mode})=>{return{
    build:{
        lib: {
            entry: './src/main.ts',
            formats: ['es'],
            fileName: 'widget',
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
             
                manualChunks: undefined,
            
            },
          },
        },
    define: {
        "process.env.NODE_ENV": JSON.stringify(mode)
    },
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
        cssInjectedByJsPlugin(),
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
}})
