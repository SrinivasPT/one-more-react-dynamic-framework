import typescript from "@rollup/plugin-typescript";

export default {
    input: {
        context: "src/context/index.ts",
        controls: "src/controls/index.ts",
        hooks: "src/hooks/index.ts",
        types: "src/types/index.ts",
        builder: "src/builder/index.ts",
        services: "src/services/index.ts",
        types: "src/types/index.ts",
    },
    output: {
        dir: "dist",
        sourcemap: true,
        format: "esm",
        entryFileNames: "[name]/index.js",
        chunkFileNames: "[name]/[hash].js",
    },
    external: ["react", "loglevel", "axios", "lodash", "react-dom"],
    plugins: [typescript()],
    preserveModules: true,
};
