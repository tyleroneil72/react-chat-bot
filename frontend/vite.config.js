import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default ({ mode }) => {
  // Load env variables from .env files in root directory
  process.env = Object.assign(process.env, loadEnv(mode, "../", ""));

  return defineConfig({
    plugins: [react()],
    server: { port: process.env.VITE_PORT },
  });
};
