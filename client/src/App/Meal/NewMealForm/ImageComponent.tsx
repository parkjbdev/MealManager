import {CardActionArea, Fab} from "@material-ui/core";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import React from "react";

const PreviewImage = (props: { file: string }) => {
  return (
    <div>
      <CardActionArea>
        <img height="100%" src={props.file} alt=""/>
      </CardActionArea>
    </div>
  )
}
const InputImage = (props: { onChange: Function }) => {
  return (
    <div>
      <input
        accept="image/*"
        style={{display: "none"}}
        id="contained-button-file"
        type="file"
        onChange={(event) => props.onChange(event)}
      />
      
      <label htmlFor="contained-button-file">
        <Fab component="span">
          <AddAPhotoIcon/>
        </Fab>
      </label>
    </div>
  )
}

export {PreviewImage, InputImage}