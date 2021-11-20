import React from 'react';
import Route from './router'
import './App.css';
import 'rsuite/styles/index.less'; 
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    "fontFamily": "Poppins", 
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
});


function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Route />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
