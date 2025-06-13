import { useState } from "react";
import Header from "../../layout/header/Header";
import "./login.css";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div className="login-container">
      <img
        className="background-image"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg"
        alt="logo"
      />
      <Header />
      <form
        onSubmit={(e) => {
          e.stopPropagation();
          handleFormSubmit(e);
        }}
        className="login-form-container"
      >
        <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <div className="name-box">
            <input
              className="text-input"
              id="name"
              name="name"
              type="text"
              placeholder=""
              value={formValues.name}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <label className="text-label" htmlFor="name">
              Full Name
            </label>
          </div>
        )}
        <div className="email-box">
          <input
            className="text-input"
            id="email"
            name="email"
            type="text"
            placeholder=""
            value={formValues.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label className="text-label" htmlFor="email">
            Email or mobile number
          </label>
        </div>
        <div className="pass-box">
          <input
            id="password"
            name="password"
            className="text-input"
            type="password"
            placeholder=""
            value={formValues.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label className="text-label" htmlFor="password">
            Password
          </label>
        </div>

        <button type="submit" className="signin-btn">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn && (
          <>
            <div className="or-sec">
              <label>OR</label>
            </div>

            <button className="signin-code-btn">Use a sign-in code</button>
          </>
        )}

        {isSignIn ? (
          <p>
            New to Netflix?
            <button
              type="button"
              onClick={() => {
                setIsSignIn(!isSignIn);
                setFormValues({
                  name: "",
                  email: "",
                  password: "",
                });
              }}
              className="signup-btn"
            >
              Sign up now.
            </button>
          </p>
        ) : (
          <p>
            Already have an account?
            <button
              type="button"
              onClick={() => {
                setIsSignIn(!isSignIn);
                setFormValues({
                  name: "",
                  email: "",
                  password: "",
                });
              }}
              className="signup-btn"
            >
              Sign In.
            </button>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
