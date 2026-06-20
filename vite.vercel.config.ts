// Vercel-only build config. Lovable's hosted preview/publish uses its own
// internal build pipeline and ignores this file. Vercel runs:
//   vite build --config vite.config.ts
// to produce a static SPA in dist/.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      spa: { enabled: true },
    }),
    react(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
