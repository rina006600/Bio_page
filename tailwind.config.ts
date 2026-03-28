import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F172A',
        accent: '#0EA5E9'
      }
    }
  },
  plugins: []
};

export default config;
