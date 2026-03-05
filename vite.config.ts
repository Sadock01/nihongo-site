import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // On lie explicitement le caractère "@" au dossier "src"
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
