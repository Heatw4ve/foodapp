import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/foodapp/",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["/foodapp/assets/index-5fa03c7d.js"],
    },
  },
});
