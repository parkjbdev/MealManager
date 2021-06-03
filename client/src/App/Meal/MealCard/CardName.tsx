import React from 'react';
import {Typography} from "@material-ui/core";

const CardName = (props: {name: string}) => {
  return (
    <Typography gutterBottom variant="h5" component="h2">
      {props.name}
    </Typography>
  );
};

export default CardName;
