import React, {useState} from 'react';
import '../resource/stylesheet/App.css';
import SelectMealMonth from "./Meal/ShowMeals/SelectMealMonth";
import NewMealFormModal from "./Meal/NewMealFormModal";
import {Container, makeStyles} from "@material-ui/core";
import AddButton from "./Meal/AddButton";
import ShowMeals from "./Meal/ShowMeals/ShowMeals";

const useStyles = makeStyles({
  addButton: {
    // position: "-webkit-sticky",
    position: "fixed",
    bottom: "5%",
    right: "5%"
  }
})

function ShowMealPage() {
  const classes = useStyles()
  const [formOpen, setFormOpen] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  
  const handleFormOpen = () => setFormOpen(true)
  const handleFormClose = () => setFormOpen(false)
  
  return (
    <Container>
      <SelectMealMonth month={selectedMonth} onChange={setSelectedMonth}/>
      <ShowMeals year={selectedMonth.getFullYear()} month={selectedMonth.getMonth() + 1}/>
      <NewMealFormModal open={formOpen} handleClose={handleFormClose}/>
      <AddButton onClick={handleFormOpen} className={classes.addButton}/>
    </Container>
  );
}

export default ShowMealPage;
