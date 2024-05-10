import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
   resolve: {
      alias: {
         "@assets": resolve(__dirname, "./src/assets"),
         "@components": resolve(__dirname, "./src/components"),
         "@containers": resolve(__dirname, "./src/containers"),
         "@pages": resolve(__dirname, "./src/pages"),
         "@layouts": resolve(__dirname, "./src/layouts"),
         "@icons": resolve(__dirname, "./src/icons"),
         "@utils": resolve(__dirname, "./src/utils"),
         "@hooks": resolve(__dirname, "./src/hooks"),
         "@contexts": resolve(__dirname, "./src/contexts"),
      },
   },
   envPrefix: "APP",
   plugins: [react()],
});
