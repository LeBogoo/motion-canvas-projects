import { defineConfig } from "vite";
import motionCanvas from "@motion-canvas/vite-plugin";

export default defineConfig({
  plugins: [
    motionCanvas({
      project: [
        "./src/runes.ts",
        "./src/twitch/StreamStartingSoon.ts",
        "./src/twitch/Notification.ts",
      ],
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
