import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from "unplugin-vue-components/vite"
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    build:{
        lib: {
            entry: './src/main.ce.ts',
            name: 'buble',
            // the proper extensions will be added
            fileName: 'buble'
        }
        },
    server: {
        port: 3000
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    }, define: {
        'process.env': process.env
    },
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag.includes('Buble')
                }
            }}),
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
