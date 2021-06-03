import React from 'react';
import DateFnsUtils from "@date-io/date-fns";
import {ThemeProvider, unstable_createMuiStrictModeTheme} from "@material-ui/core";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import koLocale from 'date-fns/locale/ko'


const theme = unstable_createMuiStrictModeTheme()
const SelectMealMonth = (props: { month: Date, onChange: Function }) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={koLocale}>
        <DatePicker
          format="yyyy년 MM월"
          label="조회년월 선택"
          variant="inline"
          openTo="month"
          views={["month", "year"]}
          value={props.month}
          onChange={month => {
            if (!month) return
            props.onChange(month)
          }}
        />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default SelectMealMonth;
