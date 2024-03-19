/*
 * @Author: 沧澜
 * @Date: 2024-03-18 19:48:53
 * @LastEditors: 沧澜
 * @LastEditTime: 2024-03-18 21:39:38
 * @Description:
 */
// @type {import('tailwindcss').Config}

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
