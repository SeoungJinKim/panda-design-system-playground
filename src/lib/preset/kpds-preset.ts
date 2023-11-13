import { definePreset } from '@pandacss/dev'

export default definePreset({
  theme: {
    // 👇🏻 Define your tokens here
    extend: {
      tokens: {
        colors: {
          primary: { value: '#672091' },
          secondary: { value: '#EE0F0F' },
        },
        fonts: {
          body: { value: 'system-ui, sans-serif' },
        },
      },
    },
  },
})
