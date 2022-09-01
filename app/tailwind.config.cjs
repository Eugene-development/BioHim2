/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./node_modules/symax/**/*.{html,js,svelte,ts}', './src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				header: '',
				white: '#ffffff',
				purple: '#3f3cbb',
				midnight: '#121063',
				metal: '#565584',
				tahiti: '#3ab7bf',
				silver: '#ecebff',
				'bubble-gum': '#ff77e9',
				bermuda: '#78dcca',
				main: 'rgb(13 26 33)'
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio')
	]
};
