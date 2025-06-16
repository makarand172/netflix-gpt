import { useSelector } from "react-redux";
import "./header.css";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";

const Header = () => {
  const user = useSelector((store) => store.auth.userCredentials);
  const signOutHandler = () => {
    console.log("came here");
    signOut(auth);
  };
  return (
    <div className="header-container">
      <img
        src="
https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="header-right-section">
          <img
            className="user-logo"
            src="https://occ-0-2484-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
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
        </div>
      )}
    </div>
  );
};

export default Header;
