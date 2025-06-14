import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../../pages/login/Login";
import Browse from "../../pages/browse/Browse";
import "./body.css";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div className="body-container">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
