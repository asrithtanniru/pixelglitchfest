import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'secondary-background': 'var(--secondary-background)',
        foreground: 'var(--foreground)',
        'main-foreground': 'var(--main-foreground)',
        main: 'var(--main)',
        border: 'var(--border)',
        ring: 'var(--ring)',
        overlay: 'var(--overlay)',
        'chart-1': 'var(--chart-1)',
        'chart-2': 'var(--chart-2)',
        'chart-3': 'var(--chart-3)',
        'chart-4': 'var(--chart-4)',
        'chart-5': 'var(--chart-5)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-rethink-sans)', 'Space Grotesk', 'sans-serif'],
        'rethink-sans': ['var(--font-rethink-sans)', 'sans-serif'],
        orbitron: ['var(--font-orbitron)', 'monospace'],
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
        'fira-code': ['var(--font-fira-code)', 'monospace'],
        rajdhani: ['var(--font-rajdhani)', 'sans-serif'],
        pixel: ['var(--font-pixelify-sans)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        gaming: ['var(--font-orbitron)', 'var(--font-rajdhani)', 'monospace'],
        tech: ['var(--font-space-grotesk)', 'var(--font-inter)', 'sans-serif'],
        code: ['var(--font-fira-code)', 'var(--font-geist-mono)', 'monospace'],
      },
      spacing: {
        boxShadowX: '4px',
        boxShadowY: '4px',
        reverseBoxShadowX: '-4px',
        reverseBoxShadowY: '-4px',
      },
      borderRadius: {
        base: '5px',
      },
      fontWeight: {
        base: '400',
        heading: '700',
      },
      boxShadow: {
        shadow: '4px 4px 0px 0px var(--border)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
