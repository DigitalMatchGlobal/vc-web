/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: 'var(--color-border)', /* white-10 */
        input: 'var(--color-input)', /* white-10 */
        ring: 'var(--color-ring)', /* red-600 */
        background: 'var(--color-background)', /* black */
        foreground: 'var(--color-foreground)', /* white */
        primary: {
          DEFAULT: 'var(--color-primary)', /* red-600 */
          foreground: 'var(--color-primary-foreground)', /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* gray-950 */
          foreground: 'var(--color-secondary-foreground)', /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-400 */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* gray-900 */
          foreground: 'var(--color-muted-foreground)', /* gray-300 */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* red-500 */
          foreground: 'var(--color-accent-foreground)', /* white */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* gray-900 */
          foreground: 'var(--color-popover-foreground)', /* white */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* gray-900 */
          foreground: 'var(--color-card-foreground)', /* white */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* green-500 */
          foreground: 'var(--color-success-foreground)', /* black */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* orange-500 */
          foreground: 'var(--color-warning-foreground)', /* black */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-400 */
          foreground: 'var(--color-error-foreground)', /* white */
        },
      },
      fontFamily: {
        headline: ['var(--font-headline)'],
        body: ['var(--font-body)'],
        cta: ['var(--font-cta)'],
        accent: ['var(--font-accent)'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(225, 6, 0, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(225, 6, 0, 0.5)",
          },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.3s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      boxShadow: {
        'cta': '0 4px 20px rgba(225, 6, 0, 0.3)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}