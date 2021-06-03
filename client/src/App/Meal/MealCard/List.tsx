import React from 'react';
import {Typography} from "@material-ui/core";

const List = (props: { list: string[] }) => {
  return (
    <div>
      <Typography variant="body2" color="textSecondary" component="p">
        {props.list}
      </Typography>
    </div>
  );
};

export default List;
