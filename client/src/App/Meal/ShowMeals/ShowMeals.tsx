import React, {useState} from 'react';
import MealCard from "../MealCard/MealCard";
import IMeal from "../IMeal";
import {Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    }
  }
)

const ShowMeals = (props: { year: number, month: number }) => {
  const classes = useStyles()
  const [meals, setMeals] = useState<IMeal[]>([])
  
  const fetchMeals = async (year: number, month: number) => {
    const res = await fetch(`./meals/${year}/${month}/`)
    const data = await res.json()
    setMeals(data)
  }
  fetchMeals(props.year, props.month)
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {meals.map(meal => <MealCard meal={meal}/>)}
      </Grid>
    </div>
  
  );
};

export default ShowMeals;