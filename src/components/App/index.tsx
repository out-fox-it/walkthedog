import { FunctionComponent } from 'preact'
import { Box, Typography } from '@material-ui/core'

import { Logo } from '../Logo'

export const App: FunctionComponent = () => (
	<Box
		component="header"
		my="2em"
		display="flex"
		flexDirection="column"
		alignItems="center"
	>
		<Logo width={256} height={256} />
		<Typography variant="h2" component="h1" align="center">
			Walk The Dog!
		</Typography>
	</Box>
)
