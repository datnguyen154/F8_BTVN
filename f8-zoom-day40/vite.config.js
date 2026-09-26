import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],

    base: "/F8_BTVN/f8-zoom-day40/",

    build: {
        outDir: "../site/f8-zoom-day40",
        emptyOutDir: true,
    },
});
