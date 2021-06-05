import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@material-ui/core";
import React from "react";

const MealTypeRadio = (props: { selected: string, onChange: Function }) => {
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">식사구분</FormLabel>
        <RadioGroup aria-label="mealtype" name="mealtype" value={props.selected}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event)}
                    row>
          <FormControlLabel value="lunch" control={<Radio/>} label="점심"/>
          <FormControlLabel value="dinner" control={<Radio/>} label="저녁"/>
        </RadioGroup>
      </FormControl>
    </div>
  
  )
}

export default MealTypeRadio