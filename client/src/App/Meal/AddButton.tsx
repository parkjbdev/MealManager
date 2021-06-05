import React from 'react';
import {Fab} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const AddButton = (props: { className?: string, onClick: Function }) => {
  return (
    <div className={props.className}>
      <button type="button"
              style={{display: "none"}}
              id="add-button"
              onClick={() => props.onClick()}
      >
      </button>
      
      <label htmlFor="add-button">
        <Fab component="span">
          <AddIcon/>
        </Fab>
      </label>
    </div>
  );
};

AddButton.defaultProps = {
  className: ''
};

export default AddButton;
