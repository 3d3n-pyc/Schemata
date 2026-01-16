/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Industrial Sci-Fi Color Palette
                bg: {
                    primary: '#050505',    // Nearly black - Main background
                    elevated: '#111111',   // Cards, panels
                    subtle: '#1a1a1a',     // Hover states, borders
                },
                accent: {
                    DEFAULT: '#00FFCC',    // Cyber cyan - Primary action color
                    hover: '#00D4AA',      // Muted cyan for hover states
                    glow: '#00FFCC40',     // Transparent for glow effects
                },
                text: {
                    primary: '#F5F5F5',    // Off-white - Body text
                    secondary: '#A0A0A0',  // Medium gray - Metadata, labels
                    tertiary: '#666666',   // Dark gray - Disabled, subtle info
                },
            },
            fontFamily: {
                // Technical sans-serif for UI
                sans: ['Inter', 'system-ui', 'sans-serif'],
                // Monospace for code/URIs - the heart of the content
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            boxShadow: {
                'glow': '0 0 20px rgba(0, 255, 204, 0.3)',
                'glow-sm': '0 0 10px rgba(0, 255, 204, 0.2)',
            },
            animation: {
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': {
                        boxShadow: '0 0 20px rgba(0, 255, 204, 0.2)',
                    },
                    '50%': {
                        boxShadow: '0 0 30px rgba(0, 255, 204, 0.4)',
                    },
                },
            },
        },
    },
    plugins: [],
}
