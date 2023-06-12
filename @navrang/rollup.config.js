import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/index.js",
    output: {
        file: "dist/bundle.js",
        format: "cjs",
    },
    external: ["react"],
    plugins: [typescript()],
};
