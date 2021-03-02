import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Home from '../../pages/Home'

const Routes: React.FC = () => (
	<Switch>
		<Route path="/" component={Home} />
	</Switch>
)

const App: React.FC = () => (
	<>
		<Routes />
	</>
)

export default App
