import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import React from "react";
import {ThemeProvider, unstable_createMuiStrictModeTheme} from "@material-ui/core";

const theme = unstable_createMuiStrictModeTheme()
const InputDate = (props: { date: MaterialUiPickersDate, onChange: Function }) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          value={props.date}
          onChange={date => {
            props.onChange(date)
          }}
          format="yyyy년 MM월 dd일"
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}

export default InputDate