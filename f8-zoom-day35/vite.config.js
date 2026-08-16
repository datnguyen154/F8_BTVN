import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/F8_BTVN/f8-zoom-day35/",
    build: {
        outDir: "../site/f8-zoom-day35",
        emptyOutDir: true,
    },
});
