import React from 'react'
import Button from '@material-ui/core/Button'

import logo from '../../assets/germanShepherd.svg'

const Header: React.FC = () => {
	return (
		<header className="App-header">
			<img
				src={logo}
				className="App-logo"
				alt="Pet Icon by Chanut Is Industries"
			/>
			<Button variant="contained" color="primary">
				Hello World
			</Button>
		</header>
	)
}

export default Header
