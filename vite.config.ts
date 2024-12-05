// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [TanStackRouterVite({}), react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    TanStackRouterVite({
      routeFileIgnorePrefix: "-",
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    react(),
  ],
});
