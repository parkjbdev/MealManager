import {
  AppBar as MaterialAppBar,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography
} from "@material-ui/core";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import React, {MouseEventHandler} from "react";
import HideOnScroll from "./HideOnScroll";

const style = (theme: Theme) => createStyles({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
})
const useStyles = makeStyles(style)

const AppBar = (props: { title: string, menuOpen: boolean, handleDrawerOpen: MouseEventHandler }) => {
  const classes = useStyles()
  
  return (
    <HideOnScroll {...props}>
      <MaterialAppBar className={clsx(classes.appBar, {
        [classes.appBarShift]: props.menuOpen,
      })}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit"
                      aria-label="menu" onClick={props.handleDrawerOpen}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6">{props.title}</Typography>
        </Toolbar>
      </MaterialAppBar>
    </HideOnScroll>
  );
};

export default AppBar;