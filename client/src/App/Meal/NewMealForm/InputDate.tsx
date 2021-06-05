import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import React from "react";
import {makeStyles, ThemeProvider, unstable_createMuiStrictModeTheme} from "@material-ui/core";

const theme = unstable_createMuiStrictModeTheme()
const useStyles = makeStyles({
    datepicker: {
      fontSize: 1
    }
  }
)
const InputDate = (props: { date: MaterialUiPickersDate, onChange: (date: MaterialUiPickersDate) => void }) => {
  const classes = useStyles()
  return (
    <div>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            className={classes.datepicker}
            value={props.date}
            margin="normal"
            label="날짜 선택"
            onChange={props.onChange}
            format="yyyy년 MM월 dd일"
          />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </div>
  )
}

export default InputDate