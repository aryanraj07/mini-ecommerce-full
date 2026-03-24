import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/types.ts"], // ONLY this file
  dts: true,
  format: ["esm"],
  outDir: "dist-types",
  clean: true,
  splitting: false,
  sourcemap: false,
  skipNodeModulesBundle: true,
});
