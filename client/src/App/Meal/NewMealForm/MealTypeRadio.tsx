import {FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  label: {
    display: "flex",
    flexDirection: "row"
  }
})

const MealTypeRadio = (props: { selected: string, onChange: Function }) => {
  const classes = useStyles()
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">식사구분</FormLabel>
      <RadioGroup aria-label="mealtype" name="mealtype" value={props.selected}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event)}
                  row >
        <FormControlLabel value="lunch" control={<Radio/>} label="점심"/>
        <FormControlLabel value="dinner" control={<Radio/>} label="저녁"/>
      </RadioGroup>
    </FormControl>
  )
}

export default MealTypeRadio