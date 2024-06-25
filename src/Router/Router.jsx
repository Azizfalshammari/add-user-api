import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import CharacterDetails from "../Pages/CharacterDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/:id",
    element: <CharacterDetails/>,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
