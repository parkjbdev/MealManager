import React, {useState} from 'react';
import '../resource/stylesheet/App.css';
import SelectMealMonth from "./Meal/ShowMeals/SelectMealMonth";
import NewMealFormModal from "./Meal/NewMealFormModal";
import {createStyles, makeStyles, Theme} from "@material-ui/core";
import AddButton from "./Meal/AddButton";
import ShowMeals from "./Meal/ShowMeals/ShowMeals";

const useStyles = makeStyles((theme: Theme) => createStyles({
  addButton: {
    position: "fixed",
    bottom: theme.spacing(4),
    right: theme.spacing(4)
  }
}))

function ShowMealPage() {
  const classes = useStyles()
  const [formOpen, setFormOpen] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  
  const handleFormOpen = () => setFormOpen(true)
  const handleFormClose = () => setFormOpen(false)
  
  return (
    <>
      <SelectMealMonth month={selectedMonth} onChange={setSelectedMonth}/>
      <ShowMeals year={selectedMonth.getFullYear()} month={selectedMonth.getMonth() + 1}/>
      <NewMealFormModal open={formOpen} handleClose={handleFormClose}/>
      <AddButton onClick={handleFormOpen} className={classes.addButton}/>
    </>
  );
}

export default ShowMealPage;
