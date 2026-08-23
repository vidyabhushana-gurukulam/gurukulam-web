/*
  vite.config.ts
  Vite setup for the Vidyabhushana Gurukulam site. Registers the React and Tailwind v4 plugins and
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
  server: {
    // Vite rejects unknown Host headers, which blocks every tunnelled request until the domain is allow-listed.
    allowedHosts: [".ngrok-free.app", ".ngrok.app", ".ngrok-free.dev"],
  },
});
