import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "unplugin-vue-components/resolvers";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
        build: {
            emptyOutDir: true,
            lib: {
                entry: "./src/main.ts",
                name: "chat-widget",
                fileName: "widget",
                formats: ["es", "cjs", "umd"],
            },
        },
        define: {
            "process.env.NODE_ENV": JSON.stringify(mode),
        },
        server: {
            port: 3000,
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
        plugins: [
            vue({ customElement: true }),
            Components({
                dirs: ["./src/components", "./src/pages"],
                dts: true,
                resolvers: [PrimeVueResolver()],
            }),
            AutoImport({
                dts: true,
                vueTemplate: true,
                dirs: [
                    "./src/store",
                    "./src/types",
                    "./src/composables", // only root modules
                    // './composables/**', // all nested modules
                ],
                imports: [
                    "vue",
                    "@vueuse/core",
                    {
                        pinia: [
                            "storeToRefs",
                            // automatically imports `defineStore`
                            "defineStore", // import { defineStore } from 'pinia'
                            // automatically imports `defineStore` as `definePiniaStore`
                            ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
                        ],
                    },
                ],
            }),
        ],
        css: {},
    };
});
