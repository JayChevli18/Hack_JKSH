import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Display = () => {
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  var data = location.state;
  console.log(data);

  return <h1>hello</h1>;
};

export default Display;
