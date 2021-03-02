import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		customBox: {
			maxWidth: '100vh',
			margin: '0 auto',
			textAlign: 'center',
		},
	})
)

const Page: React.FC<{ className?: string }> = ({ children }) => {
	const classes = useStyles()

	return <Box className={classes.customBox}>{children}</Box>
}

export default Page
