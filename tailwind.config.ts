import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
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
          glow: "hsl(var(--primary-glow))",
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
        neon: {
          DEFAULT: "hsl(var(--neon))",
          foreground: "hsl(var(--neon-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "fade-in-up": { "0%": { opacity: "0", transform: "translateY(40px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "scale-in": { "0%": { transform: "scale(0.95)", opacity: "0" }, "100%": { transform: "scale(1)", opacity: "1" } },
        "float": { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-20px)" } },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 30px hsl(var(--primary) / 0.4)" },
          "50%": { boxShadow: "0 0 80px hsl(var(--primary) / 0.9), 0 0 120px hsl(0 90% 55% / 0.6)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "blink": { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0" } },
        "spin-slow": { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
        "shimmer": { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "flame-flicker": {
          "0%, 100%": { transform: "scaleY(1) scaleX(1) translateY(0)", opacity: "0.95" },
          "25%": { transform: "scaleY(1.08) scaleX(0.97) translateY(-4px)", opacity: "1" },
          "50%": { transform: "scaleY(0.94) scaleX(1.03) translateY(2px)", opacity: "0.85" },
          "75%": { transform: "scaleY(1.05) scaleX(0.99) translateY(-2px)", opacity: "1" },
        },
        "flame-flicker-2": {
          "0%, 100%": { transform: "scaleY(0.98) scaleX(1.02) translateY(2px)", opacity: "0.9" },
          "33%": { transform: "scaleY(1.1) scaleX(0.96) translateY(-6px)", opacity: "1" },
          "66%": { transform: "scaleY(0.92) scaleX(1.04) translateY(3px)", opacity: "0.8" },
        },
        "ember-rise": {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0" },
          "20%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh) scale(0.4)", opacity: "0" },
        },
        "fire-text": {
          "0%, 100%": {
            textShadow:
              "0 0 10px hsl(20 100% 60% / 0.8), 0 0 30px hsl(15 100% 50% / 0.6), 0 0 60px hsl(0 100% 45% / 0.4)",
          },
          "50%": {
            textShadow:
              "0 0 20px hsl(35 100% 70% / 1), 0 0 50px hsl(20 100% 55% / 0.8), 0 0 90px hsl(0 100% 50% / 0.6)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-in": "scale-in 0.4s ease-out",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "blink": "blink 1s step-end infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "shimmer": "shimmer 3s linear infinite",
        "flame-flicker": "flame-flicker 1.6s ease-in-out infinite",
        "flame-flicker-2": "flame-flicker-2 2.1s ease-in-out infinite",
        "ember-rise": "ember-rise 6s linear infinite",
        "fire-text": "fire-text 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
