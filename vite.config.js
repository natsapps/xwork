import { execSync } from "node:child_process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function getBuildMeta() {
  const timestamp = new Date().toISOString();
  let commit = "dev";

  try {
    commit = execSync("git rev-parse --short HEAD").toString().trim();
  } catch {
    commit = "dev";
  }

  return {
    commit,
    timestamp,
    buildId: `${commit}-${timestamp}`
  };
}

const buildMeta = getBuildMeta();

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    {
      name: "emit-version-json",
      generateBundle() {
        this.emitFile({
          type: "asset",
          fileName: "version.json",
          source: JSON.stringify(buildMeta, null, 2)
        });
      }
    }
  ],
  define: {
    __APP_BUILD__: JSON.stringify(buildMeta)
  }
});
