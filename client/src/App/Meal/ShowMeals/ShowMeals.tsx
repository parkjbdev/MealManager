import React, {useEffect, useState} from 'react';
import MealCard from "../MealCard/MealCard";
import IMeal from "../IMeal";
import option from '../../../option.json'
import StackGrid from "react-stack-grid";
import useWindowDimensions from "../../../utils/useWindowDimensions";

const ShowMeals = (props: { year: number, month: number }) => {
  const [meals, setMeals] = useState<IMeal[]>([])
  const {width} = useWindowDimensions();
  
  const fetchMeals = async (year: number, month: number) => {
    const res = await fetch(`${option.server}/meals/${year}/${month}/`)
    return await res.json()
  }
  
  useEffect(() => {
    fetchMeals(props.year, props.month)
      .then(setMeals)
  }, [props.year, props.month]);
  
  return (
    <StackGrid columnWidth={width <= 820 ? '100%' : 400} monitorImagesLoaded={true} itemComponent="div">
      {meals.map(meal => <MealCard key={meal._id} meal={meal}/>)}
    </StackGrid>
  );
};

export default ShowMeals;