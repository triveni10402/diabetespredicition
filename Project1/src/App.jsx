import React from "react";
import Login from "./pages/Login_signup/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Login_signup/Signup.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
