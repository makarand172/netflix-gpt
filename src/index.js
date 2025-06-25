import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Error from "./components/Error/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import GptSearch from "./pages/gptSearch/GptSearch";
const Login = lazy(() => import("./pages/login/Login"));
const Browse = lazy(() => import("./pages/browse/Browse"));

const Loader = () => <div>Loading.....</div>;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "Browse",
        element: (
          <Suspense fallback={<Loader />}>
            <Browse />
          </Suspense>
        ),
      },
      {
        path: "GptSearch",
        element: (
          <Suspense fallback={<Loader />}>
            <GptSearch />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
