import { useSelector } from "react-redux";
import "./header.css";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { ApplicationConstants } from "../../utils/appConstants";

const Header = () => {
  const user = useSelector((store) => store.auth.userCredentials);
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
