import "./Login.css"; // Make sure to import your CSS file
import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [getemail, setemail] = useState("");
  const [getpassword, setpassword] = useState("");
  const [getid, setid] = useState("");
  const [getflag, setflag] = useState(false);
  const [getname, setname] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = getemail;
    const password = getpassword;

    fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.success === true) {
          //setname = result.success.name;
          setname(result.data.fullName);
          navigate("/display", { state: { fullName: getname } });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    // <>
    //   <div id="particles-js" className="snow"></div>

    //   <main>
    //     <div className="left-side"></div>

    //     <div className="right-side">
    //       <form onSubmit={handleSubmit}>
    //         <div className="btn-group" style={{ justifyContent: "center" }}>
    //           <button className="btn" type="button">
    //             <img
    //               className="logo"
    //               src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d1c98974-c62d-4071-8bd2-ab859fc5f4e9"
    //               alt=""
    //             />
    //             <span>Sign in with Google</span>
    //           </button>
    //         </div>

    //         <div className="or">OR</div>

    //         <label htmlFor="email">Email</label>
    //         <input
    //           type="text"
    //           placeholder="Enter Email"
    //           name="email"
    //           id="email"
    //           required
    //           value={getemail}
    //           onChange={(e) => setemail(e.target.value)}
    //         />

    //         <label htmlFor="password">Password</label>
    //         <input
    //           type="password"
    //           placeholder="Enter Password"
    //           name="password"
    //           id="password"
    //           required
    //           value={getpassword}
    //           onChange={(e) => setpassword(e.target.value)}
    //         />
    //         <div align="center">
    //           <button type="submit" className="login-btn">
    //             Sign in
    //           </button>
    //         </div>

    //         <div className="links">
    //           <a href="javascript">Forgot password?</a>
    //           <a href="/signup">Do not have an account?</a>
    //         </div>
    //       </form>
    //     </div>
    //   </main>
    // </>

    <>
      <div id="particles-js" className="snow"></div>

      <main>
        <div className="left-side"></div>

        <div className="right-side">
          <form onSubmit={handleSubmit}>
            <div className="btn-group" style={{ justifyContent: "center" }}>
              <button className="btn" type="button">
                <img
                  className="logo"
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d1c98974-c62d-4071-8bd2-ab859fc5f4e9"
                  alt=""
                />
                <span>Sign in with Google</span>
              </button>
            </div>

            <div className="or">OR</div>

            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
              value={getemail}
              onChange={(e) => setemail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="password"
              required
              value={getpassword}
              onChange={(e) => setpassword(e.target.value)}
            />
            <div align="center">
              <button type="submit" className="login-btn">
                Sign in
              </button>
            </div>

            <div className="links">
              <a href="javascript">Forgot password?</a>
              {/* <Link to="/signup">Do not have an account?</Link> */}
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
