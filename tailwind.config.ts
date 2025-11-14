import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/email/**/*.{js,ts,jsx,tsx,mdx}", // ✅ include email templates if using React Email
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: '#0a0a0a',
                    light: '#3a3a3a',
                },
                predicteasy: {
                    purple: '#6D4AFF',
                    pink: '#FF61A6',
                    blue: '#614CF9',
                },
            },
        },
    },
    plugins: [],
};

export default config;
