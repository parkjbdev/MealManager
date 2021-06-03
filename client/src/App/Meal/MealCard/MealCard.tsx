import React from 'react';
import IMeal from "../IMeal";
import option from '../../../option.json'

import {Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles,} from "@material-ui/core";
import DeleteMealButton from "./DeleteMealButton";
import CardName from "./CardName";
import List from "./List";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const MealCard = (props: { meal: IMeal }) => {
  const classes = useStyles()
  const id = props.meal._id
  const name = props.meal.name
  const imgsrc = `${option.server}/${props.meal.imgPath}`.replaceAll('\\', '/')
  const menus = props.meal.menus
  const snacks = props.meal.snacks
  return (
    <Grid item>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imgsrc}
            title={name}
          />
          <CardContent>
            <CardName name={name}/>
            <List list={menus}/>
            <List list={snacks}/>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <DeleteMealButton id={id}/>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default MealCard;
