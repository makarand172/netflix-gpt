import { useSelector } from "react-redux";
import "./browse.css";
const Browse = () => {
  const user = useSelector((store) => store.auth.userCredentials);
  return <div className="browse-container">welcome {user?.email}</div>;
};

export default Browse;
