import glob from 'glob';
import { join } from 'path';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import tsconfig from './tsconfig.json';

const inputFiles = glob.sync('src/**/*.{js,jsx,ts,tsx}', {
  cwd: join(__dirname),
  ignore: tsconfig.exclude,
});
const input = 'src/use-less.ts';
const name = 'useLess';

export default [
  {
    input: inputFiles,
    preserveModules: true,
    output: [
      {
        dir: 'esm',
        format: 'es',
        name,
      },
    ],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.json',
        tsconfigOverride: { compilerOptions: { declaration: true } },
      }),
    ],
  },
  {
    input,
    output: [
      {
        file: 'umd/use-less.min.js',
        format: 'umd',
        name,
        sourcemap: 'source-map',
      },
    ],
    plugins: [
      typescript({
        tsconfig: 'tsconfig.json',
      }),
      terser({ ecma: 5, ie8: true }),
    ],
  },
];
