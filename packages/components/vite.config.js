import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import commonjs from '@rollup/plugin-commonjs';//引入commojs
import requireTransform from 'vite-plugin-require-transform';//引入require
export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'es',
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      external: ['vue'],
      input: ['./src/index.ts'],
      output: [
        {
          exports: 'named',
          format: 'es',
          dir: '../../dist/es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src'
        },
        {
          exports: 'named',
          format: 'cjs',
          dir: '../../dist/lib',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src'
        }
        // 开启umd打包模式
        // {
        //   name: 'vuecomp',
        //   exports: 'named',
        //   format: 'umd',
        //   dir: '../../dist/umd',
        //   entryFileNames: '[name].js',
        // }
      ]
    },
    lib: {
      entry: 'src/index.ts',
      name: 'vuecomp',
      formats: ['es', 'cjs', 'umd']
    }
  },
  plugins: [
    commonjs(),
    //我的入口文件是ts类型，所以下面必须加上.ts$，否则在main.ts无法使用require
    requireTransform({
      fileRegex: /.js$|.vue$|.png$|.ts$|.jpg$/
    }), //配置require
    vue(),
    dts({
      entryRoot: './src',
      outDir: '../../dist/es'
    })
  ]
})
