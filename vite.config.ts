import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { glob } from 'glob';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), dts({ cleanVueFileName: true, insertTypesEntry: true }), libInjectCss()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			less: {
				plugins: [autoprefixer()],
				globalVars: {},
				additionalData:
					'@import "@/assets/styles/base.less"; @import "@/assets/styles/theme.less";',
			},
		},
	},
	build: {
		lib: {
			formats: ['es', 'cjs'],
			entry: [
				fileURLToPath(new URL('./src/components/main.ts', import.meta.url)),
				fileURLToPath(new URL('./src/components/index.ts', import.meta.url)),
				...glob.sync('src/components/*.vue').map((file) => {
					return fileURLToPath(new URL(file, import.meta.url));
				}),
			],
			fileName: (format: string, entryName: string) => {
				const extName = {
					es: 'js',
					cjs: 'cjs',
				}[format];

				return entryName === 'main' ? `vue-ui-lib.${extName}` : `[name].${extName}`;
			},
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				exports: 'named',
				globals: {
					vue: 'Vue',
				},
				assetFileNames: 'assets/[name].[ext]',
			},
		},
		copyPublicDir: false,
	},
});
