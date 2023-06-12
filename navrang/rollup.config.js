import typescript from "@rollup/plugin-typescript";

export default {
    input: {
        context: "src/context/index.ts",
        controls: "src/controls/index.ts",
        layout: "src/layout/index.ts",
    },
    output: {
        dir: "dist",
        sourcemap: true,
        format: "esm",
        entryFileNames: "[name]/index.js",
        chunkFileNames: "[name]/[hash].js",
    },
    external: ["react"],
    plugins: [typescript()],
    preserveModules: true,
};
