import React from 'react'
import * as Material from '@material-ui/core'
import * as MaterialStyle from '@material-ui/core/styles'
import * as MaterialIcon from '@material-ui/icons'


const style = (theme: MaterialStyle.Theme) =>
	MaterialStyle.createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
	})

const useStyles = MaterialStyle.makeStyles(style)

interface AppBarProp {
	title: string
}

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
	children: React.ReactElement;
}

function HideOnScroll(props: Props) {
	const {children, window} = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = Material.useScrollTrigger({target: window ? window() : undefined});

	return (
		<Material.Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Material.Slide>
	);
}

export default function AppBar(props: AppBarProp) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<React.Fragment>
				<Material.CssBaseline/>

				<HideOnScroll {...props}>
					<Material.AppBar>
						<Material.Toolbar>
							<Material.IconButton edge="start" className={classes.menuButton} color="inherit"
												 aria-label="menu">
								<MaterialIcon.Menu/>
							</Material.IconButton>
							<Material.Typography variant="h6">{props.title}</Material.Typography>
						</Material.Toolbar>
					</Material.AppBar>
				</HideOnScroll>

				<Material.Toolbar/>

				<Material.Container>
					<Material.Box my={2}>
						{[...new Array(12)]
							.map(
								() => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
							)
							.join('\n')}
					</Material.Box>
				</Material.Container>
			</React.Fragment>
		</div>
	);
}