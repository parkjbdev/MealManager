import React from 'react';
import {createMuiTheme, ThemeProvider, Typography} from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const CardName = (props: {name: string}) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography gutterBottom variant="h5" component="h2">
        {props.name}
      </Typography>
    </ThemeProvider>
);
};

export default CardName;
