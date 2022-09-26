module.exports = {
	purge: ['./resource/**/*.{vue,js,php}'],
	content: [],
	darkMode: false,
	theme: {
		extend: {
			colors:{
				'secondary-black-light': {
					DEFAULT: '#6B7280',
					'50': '#CDD0D5',
					'100': '#C2C5CC',
					'200': '#ACB0BA',
					'300': '#969BA7',
					'400': '#7F8694',
					'500': '#6B7280',
					'600': '#515761',
					'700': '#383C43',
					'800': '#1E2024',
					'900': '#050506'
				},
				'secondary-black-default':{
					DEFAULT: '#000000',
					'50': '#ADADAD',
					'100': '#A3A3A3',
					'200': '#8F8F8F',
					'300': '#7A7A7A',
					'400': '#666666',
					'500': '#525252',
					'600': '#3D3D3D',
					'700': '#292929',
					'800': '#141414',
					'900': '#000000'
				},
				'secondary-red-light': {
					DEFAULT: '#FF6F6F',
					'50': '#FFFEFE',
					'100': '#FFE9E9',
					'200': '#FFC1C1',
					'300': '#FF9898',
					'400': '#FF6F6F',
					'500': '#FF3737',
					'600': '#FE0000',
					'700': '#C60000',
					'800': '#8E0000',
					'900': '#560000'
				},
				'secondary-red-default': {
					DEFAULT: '#E81313',
					'50': '#FCDFDF',
					'100': '#FBCCCC',
					'200': '#F8A6A6',
					'300': '#F58181',
					'400': '#F25B5B',
					'500': '#EE3535',
					'600': '#E81313',
					'700': '#B40F0F',
					'800': '#800B0B',
					'900': '#4C0606'
				},
				'secondary-red-dark': {
					DEFAULT: '#8E0000',
					'50': '#FF5D56',
					'100': '#FF4E47',
					'200': '#FF2F28',
					'300': '#FF1009',
					'400': '#EA0500',
					'500': '#CB0300',
					'600': '#AD0100',
					'700': '#8E0000',
					'800': '#650001',
					'900': '#3C0001'
				},
				'secondary-yellow-light': {
					DEFAULT: '#FFEBB8',
					'50': '#FFF3D7',
					'100': '#FFF0CC',
					'200': '#FFEBB8',
					'300': '#FFE194',
					'400': '#FFD871',
					'500': '#FFD04D',
					'600': '#FFC729',
					'700': '#FFBF05',
					'800': '#E1A800',
					'900': '#BD8E00'
				},
				'secondary-yellow-default': {
					DEFAULT: '#FFD469',
					'50': '#FFEFD4',
					'100': '#FFEAC5',
					'200': '#FFE1A6',
					'300': '#FFDA88',
					'400': '#FFD469',
					'500': '#FFC72C',
					'600': '#EEB500',
					'700': '#B08A00',
					'800': '#735D00',
					'900': '#362D00'
				},
				'secondary-yellow-dark': {
					DEFAULT: '#FFD469',
					'50': '#FFE79C',
					'100': '#FFE492',
					'200': '#FFDC7D',
					'300': '#FFD469',
					'400': '#FFC031',
					'500': '#F8A800',
					'600': '#C07E00',
					'700': '#885700',
					'800': '#4F3100',
					'900': '#170E00'
				},
			},
		},
	},
	plugins: [],
}
