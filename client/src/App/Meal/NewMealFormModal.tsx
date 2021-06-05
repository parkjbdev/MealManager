import React from 'react';
import NewMealForm from "./NewMealForm/NewMealForm";
import {
  Backdrop,
  createStyles,
  Fade,
  makeStyles,
  Modal,
  Theme,
  ThemeProvider,
  unstable_createMuiStrictModeTheme
} from "@material-ui/core";

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
      padding: theme.spacing(2, 1, 3),
      overflow: 'auto',
      maxWidth: "95%"
    },
  }),
);

const theme = unstable_createMuiStrictModeTheme()

const NewMealFormModal = (props: { open: boolean, handleClose: Function, className?: string }) => {
  const classes = useStyles()
  return (
    <div className={props.className}>
      <ThemeProvider theme={theme}>
        <Modal aria-labelledby="transition-modal-title"
               aria-describedby="transition-modal-description"
               className={classes.modal}
               open={props.open}
               onClose={() => props.handleClose()}
               closeAfterTransition
               BackdropComponent={Backdrop}
               BackdropProps={{
                 timeout: 500,
               }}>
          <Fade in={props.open}>
            <div className={classes.paper}>
              <NewMealForm handleClose={props.handleClose}/>
            </div>
          </Fade>
        </Modal>
      </ThemeProvider>
    </div>
  );
};

NewMealFormModal.defaultProps = {
  className: ''
};

export default NewMealFormModal;
