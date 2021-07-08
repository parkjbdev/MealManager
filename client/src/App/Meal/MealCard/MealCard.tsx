import React from 'react';
import IMeal from "../IMeal";
import option from '../../../option.json'

import {Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles,} from "@material-ui/core";
import DeleteMealButton from "./DeleteMealButton";
import CardName from "./CardName";
import List from "./List";
import ModifyMealButton from "./ModifyMealButton";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: "1rem",
    alignSelf: "flex-start",
    columnGap: 0
  }
});

const MealCard = (props: { meal: IMeal }) => {
  const classes = useStyles()
  const id = props.meal._id
  const name = props.meal.name
  const imgsrc = `${option.server}/${props.meal.imgPath}`.replaceAll('\\', '/')
  const menus = props.meal.menus
  const snacks = props.meal.snacks
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          image={imgsrc}
          title={name}
          component="img"
        />
      </CardActionArea>
      <CardContent>
        <CardName name={name}/>
        <List list={menus}/>
        <List list={snacks}/>
      </CardContent>
      <CardActions style={{"float": "right"}}>
        <ModifyMealButton id={id}/>
        <DeleteMealButton id={id}/>
      </CardActions>
    </Card>
  )
}

export default MealCard;
