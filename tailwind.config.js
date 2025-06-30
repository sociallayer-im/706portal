/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './.vitepress/**/*.{js,ts,vue}',
    './**/*.md',
    './index.md'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'vp-c-brand': {
          1: 'var(--vp-c-brand-1)',
          2: 'var(--vp-c-brand-2)',
          3: 'var(--vp-c-brand-3)',
        },
        'vp-c-text': {
          1: 'var(--vp-c-text-1)',
          2: 'var(--vp-c-text-2)',
          3: 'var(--vp-c-text-3)',
        },
        'vp-c-bg': {
          1: 'var(--vp-c-bg)',
          2: 'var(--vp-c-bg-alt)',
          3: 'var(--vp-c-bg-elv)',
        }
      }
    },
  },
  plugins: [],
}