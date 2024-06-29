import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Display = () => {
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  var data = location.state;
  console.log(data.fullName);

  return(<div>
    <h1>Hello, Hiral T. Kotwani!</h1>
  </div>);
};

export default Display;
