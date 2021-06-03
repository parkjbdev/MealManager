import React, {useState} from 'react';
import '../resource/stylesheet/App.css';
import ShowMeals from "./Meal/ShowMeals/ShowMeals";
import SelectMealMonth from "./Meal/ShowMeals/SelectMealMonth";
import NewMealForm from "./Meal/NewMealForm/NewMealForm";

function App() {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  return (
    <div className="App">
      <SelectMealMonth month={selectedMonth} onChange={setSelectedMonth}/>
      <ShowMeals year={selectedMonth.getFullYear()} month={selectedMonth.getMonth() + 1}/>
      
      <NewMealForm />
    </div>
  );
}

export default App;
