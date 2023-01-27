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
		typescript({
			tsconfig: "./tsconfig.json"
		})
	]
};
