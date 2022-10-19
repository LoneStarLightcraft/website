import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact } from "./ContactPage";
import { Home } from "./HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
