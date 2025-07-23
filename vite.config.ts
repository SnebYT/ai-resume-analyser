import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  ssr: {
    // this tells Vite to include zustand in the SSR bundle (so `react` is found)
    noExternal: ['zustand']
  },
  build: {
    outDir: 'dist',
  },
});
