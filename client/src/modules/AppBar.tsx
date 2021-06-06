import React, {useState} from 'react'
import clsx from 'clsx';
import * as MaterialStyle from '@material-ui/core/styles'
import {
  AppBar,
  Container,
  CssBaseline,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu'
import AppDrawer from "./Drawer";
import App from "../App/App";

const drawerWidth = 240
const style = (theme: MaterialStyle.Theme) =>
  MaterialStyle.createStyles({
    root: {
      flexGrow: 1,
      display: 'flex'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })

const useStyles = MaterialStyle.makeStyles(style)

function HideOnScroll(props: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  );
}

export default function MainAppBar(props: { title: string }) {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false)
  
  const handleDrawerOpen = () => {
    setMenuOpen(true)
  }
  const handleDrawerClose = () => {
    setMenuOpen(false)
  }
  
  return (
    <div className={classes.root}>
      <CssBaseline/>
      
      {/* App Bar */}
      <HideOnScroll {...props}>
        <AppBar className={clsx(classes.appBar, {
          [classes.appBarShift]: menuOpen,
        })}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit"
                        aria-label="menu" onClick={handleDrawerOpen}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6">{props.title}</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      
      {/* Drawer Menu */}
      <AppDrawer open={menuOpen} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose}/>
      
      {/* Main Content */}
      <main className={clsx(classes.content, {
        [classes.contentShift]: menuOpen,
      })}>
        <Toolbar/>
        <Container>
          <App/>
        </Container>
      </main>
    </div>
  );
}