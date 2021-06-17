import React from 'react';
import {createStyles, Divider, Drawer, IconButton, List, makeStyles, Theme, useTheme} from "@material-ui/core";
import DrawerListItem from "./DrawerListItem";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import TodayIcon from '@material-ui/icons/Today';
import DownloadIcon from "@material-ui/icons/GetApp"
import InfoIcon from '@material-ui/icons/Info';
import GitHubIcon from '@material-ui/icons/GitHub';

const drawerWidth = 300
const style = (theme: Theme) => createStyles({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
})
const useStyles = makeStyles(style)

const AppDrawer = (props: { menuOpen: boolean, handleDrawerClose: () => void, handleDrawerOpen: () => void }) => {
  const classes = useStyles();
  const theme = useTheme();
  
  return (
    <>
      {/* Drawer */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.menuOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {/* Drawer Header */}
        <div className={classes.drawerHeader}>
          <IconButton onClick={props.handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
          </IconButton>
        </div>
        
        {/* Drawer */}
        <Divider/>
        <List>
          <DrawerListItem text='Show Meals' icon={<FastfoodIcon/>} link="/meals"/>
          <DrawerListItem text='Calendar' icon={<TodayIcon/>} link="/calendar"/>
          <DrawerListItem text='Download' icon={<DownloadIcon/>} link="/download"/>
        </List>
        
        <Divider/>
        <List>
          <DrawerListItem text='Github' icon={<GitHubIcon/>} link="/github"/>
          <DrawerListItem text='About' icon={<InfoIcon/>} link="/about"/>
        </List>
      </Drawer>
      {/*<div style={{display: "", zIndex: 1000, opacity: "50%", width: "100%", height: "1000px", backgroundColor: "black"}}>haha</div>*/}
    </>
  );
};

export default AppDrawer;
