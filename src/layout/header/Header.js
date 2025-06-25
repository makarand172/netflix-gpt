import { useDispatch, useSelector } from "react-redux";
import "./header.css";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { ApplicationConstants } from "../../utils/appConstants";
import { toggleGpt } from "../../store/slices/gptSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.auth.userCredentials);
  const gptToggle = useSelector((store) => store.gpt.gptToggle);
  const dispatch = useDispatch();
  const gptToggleHandler = () => {
    dispatch(toggleGpt());
  };

  const signOutHandler = () => {
    signOut(auth);
  };

  function headerBackgroundStyle() {
    if (user) {
      return {
        background:
          "linear-gradient(180deg,rgba(3, 3, 3, 0.61) 0%, rgba(255, 255, 255, 0) 100%, rgba(199, 199, 199, 0) 100%)",
      };
    } else {
      return {};
    }
  }
  return (
    <header className="header-container" style={headerBackgroundStyle()}>
      <div className="header-content">
        <img src={ApplicationConstants.LOGO_URL} alt="logo" />
        {user && (
          <nav className="header-nav-section">
            <button className="gpt-search-button" onClick={gptToggleHandler}>
              {gptToggle ? "Home Page" : "GPT Search"}
            </button>
            <img
              className="user-logo"
              src={ApplicationConstants.USER_AVATAR}
              alt="user logo "
            />
            <label>{user?.email} </label>
            <button
              onClick={() => {
                signOutHandler();
              }}
              className="signout-btn"
            >
              Sign Out
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
