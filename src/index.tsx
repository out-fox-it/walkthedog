import { CssBaseline, ThemeProvider } from '@material-ui/core'
import firebase from 'firebase'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../src/components/App/App'
import firebaseConfig from './config/firebaseConfig'
import './index.css'
import theme from './theme'

firebase.initializeApp(firebaseConfig)
firebase.analytics()

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
