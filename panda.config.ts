import { defineConfig } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'
import { kpdsPreset } from './src/lib'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  // theme: {
  //   extend: {},
  // },

  theme: {
    extend: {
      tokens: {
        colors: {
          gray: {
            900: { value: '#222222' },
            800: { value: '#565E67' },
            700: { value: '#878E96' },
            600: { value: '#AAB3BC' },
            500: { value: '#BEC5CC' },
            400: { value: '#CDD5DC' },
            300: { value: '#D9DFE6' },
            200: { value: '#EBEFF3' },
            100: { value: '#F2F5F8' },
            50: { value: '#F7F9FB' },
          },
        },
      },
    },
  },
  prefix: 'panda',

  presets: [pandaPreset, kpdsPreset],

  emitPackage: true,
  // The output directory for your css system
  outdir: '@seongjin/styled-system',
})
