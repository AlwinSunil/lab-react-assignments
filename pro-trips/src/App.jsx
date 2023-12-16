import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import RegistrationForm from "./components/RegistrationForm";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/registration-form" element={<RegistrationForm />} />
      </Routes>
    </>
  );
}

export default App;
