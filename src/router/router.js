import { Outlet, createBrowserRouter } from "react-router-dom";

import Navbar from "../components/Navbar";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);
