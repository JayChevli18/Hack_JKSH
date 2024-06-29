import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Loginotp from "../Loginotp/Loginotp";
import Display from "../Display";
function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/otp" element={<Loginotp />}></Route>
        <Route exact path="/display" element={<Display />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
