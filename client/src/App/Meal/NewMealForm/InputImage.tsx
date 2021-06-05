import {CardActionArea, makeStyles} from "@material-ui/core";
import {useRef} from "react";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const useStyles = makeStyles({
  cardActionArea: {
    width: "fit-content",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "darkgray"
  },
  addIcon: {
    width: "3em",
    height: "3em",
    margin: "5em",
    color: "whitesmoke"
  },
  img: {
    // width: "inherit"
    maxWidth: "30%",
    maxHeight: "50%"
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
            <img className={classes.img} src={props.file} alt=""/>
        }
      </CardActionArea>
    </div>
  );
};

export default InputImage;