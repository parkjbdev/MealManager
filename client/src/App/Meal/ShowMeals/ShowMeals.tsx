import React, {useEffect, useState} from 'react';
import MealCard from "../MealCard/MealCard";
import IMeal from "../IMeal";
import {Grid, makeStyles} from "@material-ui/core";
import option from '../../../option.json'

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
    const res = await fetch(`${option.server}/meals/${year}/${month}/`)
    return await res.json()
  }
  
  useEffect(() => {
    fetchMeals(props.year, props.month)
      .then(setMeals)
  }, [props.year, props.month]);
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {meals.map(meal => <MealCard key={meal._id} meal={meal}/>)}
      </Grid>
    </div>
  );
};

export default ShowMeals;