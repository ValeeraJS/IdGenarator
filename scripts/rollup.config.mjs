import json from "rollup-plugin-json";
import typescript from "rollup-plugin-typescript2";

export default {
	input: "src/index.ts",
	output: [
		{
			file: "build/IdGenerator.js",
			format: "umd",
			indent: "\t",
			name: "IdGenerator",
			sourcemap: false
		},
		{
			file: "build/IdGenerator.module.js",
			format: "es",
			indent: "\t",
			sourcemap: false
		}
	],
	plugins: [
		json(),
		typescript({
			tsconfig: "./tsconfig.json"
		})
	]
};
