import React from 'react';
import ModifyIcon from '@material-ui/icons/Create';
import {Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const modifyMeal = async (id: string) => {
  // const res = await fetch(`${option.server}/${id}`, {method: 'DELETE'})
  // const data = await res.json()
  // TODO: DELETE from cards
}

const ModifyMealButton = (props: { id: string }) => {
  const classes = useStyles();
  
  return (
    <Button
      size="small"
      color="primary"
      className={classes.button}
      startIcon={<ModifyIcon/>}
      onClick={() => modifyMeal(props.id)}>
      수정
    </Button>
  
  );
};

export default ModifyMealButton;
