import type { FunctionComponent } from 'preact'
import { useEffect, useMemo, useState } from 'preact/hooks'
import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'
import { timeToString, TimeUnit, toTime } from '@utils/time'
import type { Time } from '@utils/time/types'

import type { Walk } from '../../types'
import { WalkActions } from '../WalkActions'

const useStyles = makeStyles((theme) => ({
	button: {
		padding: theme.spacing(6),
	},
	currentWalk: {
		flexGrow: 1,
		marginRight: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',

		[theme.breakpoints.down('sm')]: {
			marginRight: theme.spacing(0),
			marginBottom: theme.spacing(2),
			padding: theme.spacing(2, 0),
		},
	},
}))

const initialWalkTime = { fragments: [{ value: 0, unit: TimeUnit.Seconds }] }

export const WalkControl: FunctionComponent<{
	walk: Walk | null
	onWalkStart: () => void
	onWalkStop: () => void
	onWalkChange: (walk: Walk) => void
}> = ({ walk, onWalkStart, onWalkStop, onWalkChange }) => {
	const { button, currentWalk } = useStyles()

	const [walkTime, setWalkTime] = useState<Time>(initialWalkTime)

	const startedAt = useMemo(() => walk?.startedAt, [walk])

	useEffect(() => {
		if (startedAt) {
			const setCurrentWalkTime = () => setWalkTime(toTime(startedAt))
			const interval = setInterval(setCurrentWalkTime, 1000)

			return () => clearInterval(interval)
		}
	}, [startedAt, setWalkTime])

	return (
		<Box
			display="flex"
			justifyContent="center"
			flexDirection={{ xs: 'column', md: 'row' }}
		>
			{!walk ? (
				<Button
					className={button}
					variant="contained"
					color="primary"
					size="large"
					endIcon={<PlayCircleOutlineIcon />}
					onClick={onWalkStart}
					fullWidth
				>
					Start
				</Button>
			) : (
				<>
					<Paper className={currentWalk} elevation={3}>
						<Typography variant="h5" align="center" color={walkTime.color}>
							UŽ VENČÍŠ: {timeToString(walkTime)}
						</Typography>
						<WalkActions
							walkActions={walk.walkActions}
							onWalkActionsChange={(walkActions) =>
								onWalkChange({ ...walk, walkActions })
							}
						/>
					</Paper>
					<Button
						className={button}
						variant="contained"
						color="secondary"
						size="large"
						startIcon={<PauseCircleOutlineIcon />}
						onClick={() => {
							onWalkStop()
							setWalkTime(initialWalkTime)
						}}
					>
						Stop
					</Button>
				</>
			)}
		</Box>
	)
}
