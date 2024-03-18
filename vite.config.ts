/*
 * @Author: 沧澜
 * @Date: 2024-03-18 19:27:48
 * @LastEditors: 沧澜
 * @LastEditTime: 2024-03-18 19:52:39
 * @Description:
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
