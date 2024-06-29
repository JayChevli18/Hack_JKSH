import "./Signup.css"; // Make sure to import your CSS file

const Signup = () => {
  return (
    <>
      <div id="particles-js" className="snow"></div>

      <main>
        <div className="left-side"></div>

        <div className="right-side">
          <form>
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

            <label htmlFor="email">Full Name</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              name="Fullname"
              id="Fullname"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="password"
              required
            />

            <label htmlFor="password">Phone</label>
            <input
              type="number"
              placeholder="Enter Phone"
              name="phone"
              id="phone"
              required
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

export default Signup;
