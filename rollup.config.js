import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json' assert { type: 'json' }

const entry = './src/index.ts'

export default [
  {
    input: entry,
    output: {
      file: `./dist/cjs/${pkg.name}.cjs`,
      sourcemap: 'inline',
      format: 'cjs',
    },
    plugins: [
      terser(),
      typescript({
        rootDir: 'src',
        declaration: true,
      }),
    ],
  },
  {
    input: entry,
    output: {
      file: `./dist/esm/${pkg.name}.mjs`,
      sourcemap: 'inline',
      format: 'esm',
    },
    plugins: [
      terser(),
      typescript({
        rootDir: 'src',
        declaration: true,
      }),
    ],
  },
]
