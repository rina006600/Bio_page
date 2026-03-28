import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F7F3EE',
        'bg-secondary': '#EFE7DD',
        text: '#1A1A1A',
        muted: '#6B625A',
        accent: '#8B5E3C',
        'accent-light': '#C8A98D'
      },
      boxShadow: {
        soft: '0 12px 36px rgba(26, 26, 26, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
