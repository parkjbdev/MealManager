import React from 'react';
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom"

const DrawerListItem = (props: { text: string, icon: JSX.Element, link: string }) => {
  return (
    <ListItem button key={props.text} component={Link} to={props.link}>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.text}/>
    </ListItem>
  );
};

export default DrawerListItem;
