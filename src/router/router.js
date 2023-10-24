import { Outlet, createBrowserRouter } from "react-router-dom";

import Navigation from "../components/Navigation";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navigation />
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
      {
        path: ":categoryName",
        element: <Home />,
      },
    ],
  },
]);
