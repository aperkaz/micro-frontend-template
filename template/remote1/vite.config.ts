import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote1",
      filename: "remoteEntry.js",
      exposes: {
        "./Remote1": "./src/components/Remote1.tsx",
      },
      shared: ["react", "react-dom"],
    }),
    tsconfigPaths(),
  ],
  server: {
    port: 5001,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
