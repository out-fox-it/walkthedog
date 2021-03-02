import React from 'react'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import Header from '../components/Header'
import Page from '../components/Page'

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		box: {
			padding: theme.spacing(2),
			boxShadow: 'none',
			backgroundColor: theme.palette.secondary.main,
		},
	})
)

const Home: React.FC = () => {
	const classes = useStyles()

	return (
		<Page className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Box className={classes.box}>
						<Header />
					</Box>
				</Grid>
				<Grid item xs={6}>
					<Box className={classes.box}>xs=6</Box>
				</Grid>
				<Grid item xs={6}>
					<Box className={classes.box}>xs=6</Box>
				</Grid>
			</Grid>
		</Page>
	)
}

export default Home
