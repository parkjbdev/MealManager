import {CardActionArea, Fab, makeStyles} from "@material-ui/core";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import React from "react";

const useStyles = makeStyles({
  cardActionArea: {
    width: "fit-content"
  }
})

const PreviewImage = (props: { file: string }) => {
  const classes = useStyles()
  return (
    <div>
      <CardActionArea className={classes.cardActionArea}>
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