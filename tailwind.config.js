/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primaryYellow: '#F4C20D',
				naturalWhite: '#F3F5FA',
				footerWhite: '#CFD3D7',
				secondaryBlack: '#101010',
				cardbg: 'rgba(232, 10, 140, 0.06)',
			},
		},
		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
			roboto: 'Roboto',
			oswald: 'Oswald',
			poppins: 'poppins',
			tilt: 'Tilt Neon',
		},
	},
	plugins: [],
};
