import {CardActionArea, makeStyles} from "@material-ui/core";
import {useRef} from "react";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const useStyles = makeStyles({
  cardActionArea: {
    width: "fit-content",
  },
  addIcon: {
  }
})

const InputImage = (props: { onChange: Function, file: string }) => {
  const classes = useStyles()
  const inputFileRef = useRef<HTMLInputElement>(null)
  
  const onImgClick = () => {
    if (inputFileRef.current != null)
      inputFileRef.current.click()
  }
  
  return (
    <div>
      <input
        accept="image/*"
        style={{display: "none"}}
        ref={inputFileRef}
        type="file"
        onChange={(event) => props.onChange(event)}
      />
      
      <CardActionArea className={classes.cardActionArea} onClick={onImgClick}>
        {
          props.file === '' ?
            <AddAPhotoIcon className={classes.addIcon}/> :
            <img width="1000px" src={props.file} alt=""/>
        }
      </CardActionArea>
    </div>
  );
};

export default InputImage;