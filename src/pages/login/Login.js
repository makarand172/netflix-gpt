import { useState } from "react";
import "./login.css";
import { validateFormData } from "../../utils/validate";
import { auth } from "../../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(null);
    const error = validateFormData(formValues.email, formValues.password);
    if (error) return setErrorMessage(error);

    if (!isSignIn) {
      // signup logic
      setShowSpinner(true);
      createUserWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      )
        .then((userCredential) => {
          setErrorMessage("User has been registered successfully!");
          setTimeout(() => {
            setIsSignIn(true);
          }, 2000);
        })
        .catch((error) => {
          setErrorMessage(error.code + "-" + error.message);
        })
        .finally(() => {
          setShowSpinner(false);
        });
    } else {
      // singin logic
      setShowSpinner(true);
      signInWithEmailAndPassword(auth, formValues.email, formValues.password)
        .then((userCredential) => {
          // Signed in
          setErrorMessage("Login Successfull Enjoy your Movies!");
          setTimeout(() => {
            navigate("/browse");
          }, 1000);
        })
        .catch((error) => {
          setErrorMessage(error.code + "-" + error.message);
        })
        .finally(() => {
          setShowSpinner(false);
        });
    }
  };

  const reset = () => {
    setFormValues({
      name: "",
      email: "",
      password: "",
    });
    setErrorMessage("");
  };

  return (
    <div className="login-container">
      <img
        className="background-image"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg"
        alt="logo"
      />

      <div className="login-wrapper">
        <form
          onSubmit={(e) => {
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
              Email
            </label>
          </div>
          <div className="pass-box">
            <input
              id="password"
              name="password"
              className="text-input"
              type={showPass ? "text" : "password"}
              placeholder=""
              value={formValues.password}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <label className="text-label" htmlFor="password">
              Password
            </label>
            <span
              className="eye-icon"
              onClick={() => {
                setShowPass(!showPass);
              }}
            >
              {showPass ? "🙈" : "🐵"}
            </span>
          </div>

          <p className="error-message">{errorMessage}</p>

          <button type="submit" className="signin-btn">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          {/* {isSignIn && (
          <>
            <div className="or-sec">
              <label>OR</label>
            </div>

            <button className="signin-code-btn">Use a sign-in code</button>
          </>
        )} */}

          {isSignIn ? (
            <p>
              New to Netflix?
              <button
                type="button"
                onClick={() => {
                  setIsSignIn(!isSignIn);
                  reset();
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
                  reset();
                }}
                className="signup-btn"
              >
                Sign In.
              </button>
            </p>
          )}
        </form>
        {showSpinner && (
          <div className="spinner-overlay">
            <div className="loader"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
