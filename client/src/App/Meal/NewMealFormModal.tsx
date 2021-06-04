import React, {useState} from 'react';
import NewMealForm from "./NewMealForm/NewMealForm";
import {Backdrop, createStyles, Fab, Fade, makeStyles, Modal, Theme} from "@material-ui/core";
import AddButton from "./AddButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

const NewMealFormModal = (props: {className: any}) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <div className={props.className}>
      <AddButton onClick={handleOpen}/>
      
      <Modal aria-labelledby="transition-modal-title"
             aria-describedby="transition-modal-description"
             className={classes.modal}
             open={open}
             onClose={handleClose}
             closeAfterTransition
             BackdropComponent={Backdrop}
             BackdropProps={{
               timeout: 500,
             }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <NewMealForm/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default NewMealFormModal;
