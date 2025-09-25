import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: 'all'
  }
})
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": "/src",
//     },
//   },
//   optimizeDeps: {
//     include: [
//       "ethers",
//       "pinata-sdk",
//       "firebase/app",
//       "firebase/auth",
//       "firebase/database",
//     ],
//   },
//   esbuild: {
//     logOverride: {
//       "missing-specifier": "silent",
//     },
//   },
// });