import React, { Component } from 'react';
import Main from './components/main';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#FF99C8',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      contrastText: "#FFFFFF"
    },
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Main />
      </MuiThemeProvider>

    );

  }

}

export default App;
