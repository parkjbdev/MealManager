import React from 'react';
import {Divider, Drawer, IconButton, List, makeStyles, useTheme} from "@material-ui/core";
import * as MaterialStyle from "@material-ui/core/styles";
import DrawerListItem from "./DrawerListItem";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import TodayIcon from '@material-ui/icons/Today';
import DownloadIcon from "@material-ui/icons/GetApp"
import InfoIcon from '@material-ui/icons/Info';
import GitHubIcon from '@material-ui/icons/GitHub';

const drawerWidth = 240

const style = (theme: MaterialStyle.Theme) =>
  MaterialStyle.createStyles({
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

const AppDrawer = (props: { open: boolean, handleDrawerClose: () => void, handleDrawerOpen: () => void }) => {
  const classes = useStyles();
  const theme = useTheme();
  
  return (
    <>
      {/* Drawer */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
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
          <DrawerListItem text='Show Meals' icon={<FastfoodIcon/>} onClick={() => console.log('show meals')}/>
          <DrawerListItem text='Calendar' icon={<TodayIcon/>} onClick={() => console.log('calendar')}/>
          <DrawerListItem text='Download' icon={<DownloadIcon/>} onClick={() => console.log('download')}/>
        </List>
        
        <Divider/>
        <List>
          <DrawerListItem text='Github' icon={<GitHubIcon/>} onClick={() => window.open('https://github.com/parkjbdev/MealManager')}/>
          <DrawerListItem text='About' icon={<InfoIcon/>} onClick={() => console.log('about')}/>
        </List>
      </Drawer>
      
    </>
  );
};

export default AppDrawer;
