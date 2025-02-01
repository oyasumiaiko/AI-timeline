import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginRadar } from 'vite-plugin-radar'

export default defineConfig({
    plugins: [
        react(),
        VitePluginRadar({
            analytics: {
                id: 'G-NGY6H64ENF',
            },
        })
    ],
    base: '/AI-timeline/',
});