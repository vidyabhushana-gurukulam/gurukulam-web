/*
  vite.config.ts
  Vite setup for the Kidzu replica. Registers the React and Tailwind v4 plugins and
  the `@/` path alias used across src/.
*/
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
});
