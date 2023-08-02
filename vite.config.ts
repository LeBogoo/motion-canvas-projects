import { defineConfig } from "vite";
import motionCanvas from "@motion-canvas/vite-plugin";
import ffmpeg from "@motion-canvas/ffmpeg";

export default defineConfig({
  plugins: [
    motionCanvas({
      project: [
        "./src/runes.ts",
        "./src/twitch/StreamStartingSoon.ts",
        "./src/twitch/Notification.ts",
      ],
    }),
    ffmpeg(),
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
