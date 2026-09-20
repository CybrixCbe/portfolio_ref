/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#fcfbf9',
          surface: '#ffffff',
          subtle: '#f5f4f0',
          beige: '#f7f6f2',
          border: '#e6e4dc',
          'border-light': '#f0eeea',
          text: '#18181b',
          'text-secondary': '#3f3f46',
          muted: '#71717a',
          dim: '#a1a1aa',
          teal: '#006257',
          'teal-dark': '#004a42',
          'teal-hover': '#007568',
          'teal-light': '#e8f4f2',
          'teal-soft': '#f2f8f7',
          sage: '#e2ece9',
          charcoal: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace']
      },
      boxShadow: {
        'card-subtle': '0 1px 3px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.02)',
        'card-hover': '0 8px 30px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.03)',
        'elevated': '0 12px 36px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)',
      },
      backgroundImage: {
        'light-grid': 'linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)',
        'light-dots': 'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.06) 1px, transparent 0)',
      }
    },
  },
  plugins: [],
}
