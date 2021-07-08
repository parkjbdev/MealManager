import React from 'react';
import {Button, makeStyles} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import option from '../../../option.json'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const deleteMeal = async (id: string) => {
  const res = await fetch(`${option.server}/${id}`, {method: 'DELETE'})
  const data = await res.json()
  // TODO: DELETE from cards
}

const DeleteMealButton = (props: { id: string }) => {
  const classes = useStyles();
  return (
    <Button
      size="small"
      color="secondary"
      className={classes.button}
      startIcon={<DeleteIcon/>}
      onClick={() => deleteMeal(props.id)}>
      삭제
    </Button>
  );
};

export default DeleteMealButton;
