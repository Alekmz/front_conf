import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:8080
  },
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: ['favicon.ico', 'pwa-192x192.png', 'pwa-512x512.svg'],
      manifest: {
        name: 'Conf App',
        short_name: 'Conf',
        description: 'em aberto',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'src/assets/LOGO.png',
            sizes: '192x192',
            type: 'image/png'
          },

        ]
      }
    }),
  ],
});
