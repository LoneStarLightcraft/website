import { createMuiTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./ContactPage";
import { Home } from "./HomePage";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 350, // adds the `mobile` breakpoint
      sm: 530,
      md: 770,
      lg: 900,
      xl: 1535,
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
