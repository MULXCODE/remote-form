/* @flow */

import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const pkg = require('./package.json')

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg['module'],
      format: 'es'
    },
    {
      file: pkg['main'],
      format: 'umd',
      name: 'remoteForm'
    }
  ],
  plugins: [
    babel({
      presets: ['github']
    }),
    resolve(),
    commonjs()
  ]
}
