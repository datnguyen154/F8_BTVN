import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],

    base: "/F8_BTVN/f8-zoom-day41/",

    build: {
        outDir: "../site/f8-zoom-day41",
        emptyOutDir: true,
    },
});
