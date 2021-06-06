import React from 'react';
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

const DrawerListItem = (props: { text: string, icon: JSX.Element, onClick: Function }) => {
  return (
    <ListItem button key={props.text} onClick={() => props.onClick()}>
      <ListItemIcon>
        {props.icon}
      </ListItemIcon>
      <ListItemText primary={props.text}/>
    </ListItem>
  );
};

export default DrawerListItem;
