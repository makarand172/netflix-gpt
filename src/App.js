import { Outlet, useNavigate } from "react-router-dom";
import Header from "./layout/header/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import {
  addUserCredentials,
  removeUserCredentials,
} from "./store/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // signedIn
        const { uid, email, displayName, photoURL, providerData } = user;
        dispatch(
          addUserCredentials({
            uid,
            email,
            displayName,
            photoURL,
            providerData: providerData.map((provider) => ({
              providerId: provider.providerId,
              uid: provider.uid,
              email: provider.email,
              displayName: provider.displayName,
              photoURL: provider.photoURL,
            })),
          })
        );
        navigate("/browse");
      } else {
        // SignedOut
        dispatch(removeUserCredentials());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
