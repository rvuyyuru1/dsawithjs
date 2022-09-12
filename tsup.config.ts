import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  treeshake: true,
  target: "esnext",
  minifyWhitespace: true,
  minifySyntax: true,
  outDir: "dist",
  platform: "node",
  keepNames: true,
  dts: true,
  config: true,
  tsconfig: "./tsconfig.json",
});
