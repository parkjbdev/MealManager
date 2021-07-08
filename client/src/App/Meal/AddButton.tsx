import React from 'react';
import {createStyles, Fab, makeStyles, Theme, Tooltip} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      margin: theme.spacing(2),
    }
  }),
);


const AddButton = (props: { className?: string, onClick: Function }) => {
  const classes = useStyles();
  
  return (
    <Tooltip
      title="추가"
      className={props.className}
      /*style={{
        "width": "fit-content",
        "height": "fit-content"
      }}*/>
      <Fab color="primary" className={classes.fab}>
        <AddIcon />
      </Fab>
      {/*<button type="button"*/}
      {/*        style={{display: "none"}}*/}
      {/*        id="add-button"*/}
      {/*        onClick={() => props.onClick()}*/}
      {/*>*/}
      {/*</button>*/}
      
      {/*<label htmlFor="add-button">*/}
      {/*  <Fab component="span">*/}
      {/*    <AddIcon/>*/}
      {/*  </Fab>*/}
      {/*</label>*/}
    </Tooltip>
  );
};

AddButton.defaultProps = {
  className: ''
};

export default AddButton;
