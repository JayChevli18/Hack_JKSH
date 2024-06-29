import "./Loginotp.css"; // Make sure to import your CSS file
import React from "react";
import ReactDOM from "react-dom/client";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Loginotp = () => {
  return (
    <>
      <div id="particles-js" class="snow"></div>

      <main style={{ width: "400px" }}>
        <div class="right-side" align="center" style={{ marginLeft: "220px" }}>
          <form>
            <label for="otp" class="otp" style={{ fontSize: "25px" }}>
              Otp
            </label>
            <input type="Number" placeholder="Enter OTP" name="otp" required />
            <div align="center">
              <button type="submit" class="login-btn">
                Verfiy
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Loginotp;
