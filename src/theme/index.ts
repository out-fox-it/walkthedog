import { createMuiTheme } from '@material-ui/core/styles'

const orangeLight = '#ffca81'
const orangeMain = '#ff950b'
const orangeDark = '#ee690a'

const salmonLight = '#cf8589'
const salmonMain = '#bc5353'
const salmonDark = '#9c4844'

const theme = createMuiTheme({
	palette: {
		primary: {
			light: orangeLight,
			main: orangeMain,
			dark: orangeDark,
			contrastText: '#fff',
		},
		secondary: {
			light: salmonLight,
			main: salmonMain,
			dark: salmonDark,
			contrastText: '#000',
		},
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				body: {
					backgroundColor: salmonMain,
				},
			},
		},
	},
})

export default theme
