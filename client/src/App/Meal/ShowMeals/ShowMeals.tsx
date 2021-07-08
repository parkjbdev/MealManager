import React, {useEffect, useState} from 'react';
import MealCard from "../MealCard/MealCard";
import IMeal from "../IMeal";
import {makeStyles} from "@material-ui/core";
import option from '../../../option.json'

const useStyles = makeStyles({
    flexContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, 18rem)",
      justifyContent: "center",
      margin: "1rem",
      padding: 0
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
    <div className={classes.flexContainer}>
      {meals.map(meal => <MealCard key={meal._id} meal={meal}/>)}
    </div>
  );
};

export default ShowMeals;