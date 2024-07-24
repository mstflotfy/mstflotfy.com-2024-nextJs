import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
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
      fontFamily: {
        'roboto-mono': ["var(--font-roboto-mono)", ...fontFamily.mono],
        'gloria': ["var(--font-gloria)", 'cursive'],
        'freehand': ["var(--font-freehand", 'cursive']
      },
      fontSize: {
        'display-large': 'var(--font-size-display-large)',
        'display-medium': 'var(--font-size-display-medium)',
        'display-small': 'var(--font-size-display-small)',
        'headline-large': 'var(--font-size-headline-large)',
        'headline-medium': 'var(--font-size-headline-medium)',
        'headline-small': 'var(--font-size-headline-small)',
        'title-large': 'var(--font-size-title-large)',
        'title-medium': 'var(--font-size-title-medium)',
        'title-small': 'var(--font-size-title-small)',
        'body-large': 'var(--font-size-body-large)',
        'body-medium': 'var(--font-size-body-medium)',
        'body-small': 'var(--font-size-body-small)',
        'label-large': 'var(--font-size-label-large)',
        'label-medium': 'var(--font-size-label-medium)',
        'label-small': 'var(--font-size-label-small)',
        'mstf-headline-large': 'var(--font-size-mstf-headline-large)',
      },
      fontWeight: {
        normal: 'var(--font-weight-normal)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
      },
      lineHeight: {
        'display-large': 'var(--line-height-display-large)',
        'display-medium': 'var(--line-height-display-medium)',
        'display-small': 'var(--line-height-display-small)',
        'headline-large': 'var(--line-height-headline-large)',
        'headline-medium': 'var(--line-height-headline-medium)',
        'headline-small': 'var(--line-height-headline-small)',
        'title-large': 'var(--line-height-title-large)',
        'title-medium': 'var(--line-height-title-medium)',
        'title-small': 'var(--line-height-title-small)',
        'body-large': 'var(--line-height-body-large)',
        'body-medium': 'var(--line-height-body-medium)',
        'body-small': 'var(--line-height-body-small)',
        'label-large': 'var(--line-height-label-large)',
        'label-medium': 'var(--line-height-label-medium)',
        'label-small': 'var(--line-height-label-small)',
        'mstf-headline-large': 'var(--line-height-mstf-headline-large)',
      },
      letterSpacing: {
        'display-large': 'var(--letter-spacing-display-large)',
        'title-medium': 'var(--letter-spacing-title-medium)',
        'title-small': 'var(--letter-spacing-title-small)',
        'body-large': 'var(--letter-spacing-body-large)',
        'body-medium': 'var(--letter-spacing-body-medium)',
        'body-small': 'var(--letter-spacing-body-small)',
        'label-large': 'var(--letter-spacing-label-large)',
        'label-medium': 'var(--letter-spacing-label-medium)',
        'label-small': 'var(--letter-spacing-label-small)',
        'mstf-headline-large': 'var(--letter-spacing-mstf-headline-large)',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        m3: {
          'white': 'var(--m-3-white)',
          'black': 'var(--m-3-black)',
          'sys-light': {
            'primary': 'var(--m-3-sys-light-primary)',
            'on-primary': 'var(--m-3-sys-light-on-primary)',
            'primary-container': 'var(--m-3-sys-light-primary-container)',
            'on-primary-container': 'var(--m-3-sys-light-on-primary-container)',
            'secondary': 'var(--m-3-sys-light-secondary)',
            'on-secondary': 'var(--m-3-sys-light-on-secondary)',
            'secondary-container': 'var(--m-3-sys-light-secondary-container)',
            'on-secondary-container': 'var(--m-3-sys-light-on-secondary-container)',
            'tertiary': 'var(--m-3-sys-light-tertiary)',
            'on-tertiary': 'var(--m-3-sys-light-on-tertiary)',
            'tertiary-container': 'var(--m-3-sys-light-tertiary-container)',
            'on-tertiary-container': 'var(--m-3-sys-light-on-tertiary-container)',
            'error': 'var(--m-3-sys-light-error)',
            'on-error': 'var(--m-3-sys-light-on-error)',
            'error-container': 'var(--m-3-sys-light-error-container)',
            'on-error-container': 'var(--m-3-sys-light-on-error-container)',
            'background': 'var(--m-3-sys-light-background)',
            'on-background': 'var(--m-3-sys-light-on-background)',
            'surface': 'var(--m-3-sys-light-surface)',
            'on-surface': 'var(--m-3-sys-light-on-surface)',
            'surface-variant': 'var(--m-3-sys-light-surface-variant)',
            'on-surface-variant': 'var(--m-3-sys-light-on-surface-variant)',
            'outline': 'var(--m-3-sys-light-outline)',
            'outline-variant': 'var(--m-3-sys-light-outline-variant)',
            'shadow': 'var(--m-3-sys-light-shadow)',
            'scrim': 'var(--m-3-sys-light-scrim)',
            'inverse-surface': 'var(--m-3-sys-light-inverse-surface)',
            'inverse-on-surface': 'var(--m-3-sys-light-inverse-on-surface)',
            'inverse-primary': 'var(--m-3-sys-light-inverse-primary)',
            'surface-tint': 'var(--m-3-sys-light-surface-tint)',
          },
          'sys-dark': {
            'primary': 'var(--m-3-sys-dark-primary)',
            'on-primary': 'var(--m-3-sys-dark-on-primary)',
            'primary-container': 'var(--m-3-sys-dark-primary-container)',
            'on-primary-container': 'var(--m-3-sys-dark-on-primary-container)',
            'secondary': 'var(--m-3-sys-dark-secondary)',
            'on-secondary': 'var(--m-3-sys-dark-on-secondary)',
            'secondary-container': 'var(--m-3-sys-dark-secondary-container)',
            'on-secondary-container': 'var(--m-3-sys-dark-on-secondary-container)',
            'tertiary': 'var(--m-3-sys-dark-tertiary)',
            'on-tertiary': 'var(--m-3-sys-dark-on-tertiary)',
            'tertiary-container': 'var(--m-3-sys-dark-tertiary-container)',
            'on-tertiary-container': 'var(--m-3-sys-dark-on-tertiary-container)',
            'error': 'var(--m-3-sys-dark-error)',
            'on-error': 'var(--m-3-sys-dark-on-error)',
            'error-container': 'var(--m-3-sys-dark-error-container)',
            'on-error-container': 'var(--m-3-sys-dark-on-error-container)',
            'background': 'var(--m-3-sys-dark-background)',
            'on-background': 'var(--m-3-sys-dark-on-background)',
            'surface': 'var(--m-3-sys-dark-surface)',
            'on-surface': 'var(--m-3-sys-dark-on-surface)',
            'surface-variant': 'var(--m-3-sys-dark-surface-variant)',
            'on-surface-variant': 'var(--m-3-sys-dark-on-surface-variant)',
            'outline': 'var(--m-3-sys-dark-outline)',
            'outline-variant': 'var(--m-3-sys-dark-outline-variant)',
            'shadow': 'var(--m-3-sys-dark-shadow)',
            'scrim': 'var(--m-3-sys-dark-scrim)',
            'inverse-surface': 'var(--m-3-sys-dark-inverse-surface)',
            'inverse-on-surface': 'var(--m-3-sys-dark-inverse-on-surface)',
            'inverse-primary': 'var(--m-3-sys-dark-inverse-primary)',
            'surface-tint': 'var(--m-3-sys-dark-surface-tint)',
          }
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
