import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const input = 'src/use-less.ts';
const format = 'umd';
const name = 'useLess';
const strict = false;

// for babel-preset-react-app
process.env.NODE_ENV = 'production';

const babelPlugin = babel({
  extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'],
  runtimeHelpers: true,
});

export default [
  {
    input,
    output: [
      {
        file: 'umd/use-less.js',
        format,
        name,
        strict,
      },
    ],
    plugins: [babelPlugin],
  },
  {
    input,
    output: [
      {
        file: 'umd/use-less.min.js',
        format,
        name,
        strict,
        sourcemap: 'source-map',
      },
    ],
    plugins: [babelPlugin, terser({ ecma: 5, ie8: true })],
  },
];
