import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';

export default {
	input: 'src/index.ts',
	plugins: [
		json(),
		typescript({
			tsconfig: './tsconfig.legacy.json'
		})
	],
	output: [
		{
			file: 'build/IdGenerator.legacy.js',
			format: 'umd',
			indent: '\t',
			name: 'IdGenerator',
			sourcemap: true
		},
		{
			file: 'build/IdGenerator.legacy.module.js',
			format: 'es',
			indent: '\t',
			sourcemap: false
		}
	]
};
