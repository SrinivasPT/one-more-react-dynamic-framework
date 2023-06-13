import typescript from "@rollup/plugin-typescript";

export default {
    input: {
        context: "src/context/index.ts",
        controls: "src/controls/index.ts",
        hooks: "src/hooks/index.ts",
        types: "src/types/index.ts",
        builder: "src/builder/index.ts",
    },
    output: {
        dir: "dist",
        sourcemap: true,
        format: "esm",
        entryFileNames: "[name]/index.js",
        chunkFileNames: "[name]/[hash].js",
    },
    external: ["react", "loglevel", "axios", "lodash", "react-dom", "react-router-dom"],
    plugins: [typescript()],
    preserveModules: true,
};
