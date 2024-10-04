import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		colors: {
    			'stellar-icon-color': '#BFBFBF',
    			'stellar-blue': '#0B103D',
    			'stellar-white': '#EDF0F7',
    			'stellar-grey': '#565555',
    			'stellar-text': '000000a3',
    			'strong-blue': '#14162E',
    			'strong-red': '#Eb2828',
    			'purple-strong': '#763DF2',
    			'light-White': '#EDF0F7',
    			'light-yellow': '#F9B742',
    			'light-blue': '#4461F2',
				'dark-blue': '#06135B',
    			'light-green': '#48BC5E',
    			'light-red': '#EF4545',
    			'purple-light': '#C364FF'
    		},
    		fontFamily: {
    			raleway: ['Raleway', 'sans-serif']
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		animation: {
    			'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
    			'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
    			marquee: 'marquee var(--duration) infinite linear',
    			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
    		},
    		keyframes: {
    			'shimmer-slide': {
    				to: {
    					transform: 'translate(calc(100cqw - 100%), 0)'
    				}
    			},
    			'spin-around': {
    				'0%': {
    					transform: 'translateZ(0) rotate(0)'
    				},
    				'15%, 35%': {
    					transform: 'translateZ(0) rotate(90deg)'
    				},
    				'65%, 85%': {
    					transform: 'translateZ(0) rotate(270deg)'
    				},
    				'100%': {
    					transform: 'translateZ(0) rotate(360deg)'
    				}
    			},
    			marquee: {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			'marquee-vertical': {
    				from: {
    					transform: 'translateY(0)'
    				},
    				to: {
    					transform: 'translateY(calc(-100% - var(--gap)))'
    				}
    			}
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};
export default config;
