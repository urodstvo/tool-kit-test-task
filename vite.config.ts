/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    css: {
        postcss: {
            plugins: [autoprefixer({})],
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setup-vitest.ts',
    },
});
