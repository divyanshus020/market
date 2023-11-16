import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Insure from "./components/insure.jsx";
import Aif from "./pages/Aif.jsx";
import Home from "./pages/Home.jsx";
import Insider from "./components/insider.jsx";
import Partner from "./pages/Partner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/insurance",
        element: <Insure />,
      },
      {
        path: "/aif",
        element: <Aif />,
      },
      {
        path: "/aif/:id",
        element: <Insider />,
      },
      {
        path: "/becomepartner",
        element: <Partner />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
