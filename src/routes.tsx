import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import TreeCreation from "./pages/TreeCreation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tree-creation",
    element: <TreeCreation />,
  },
]);

export default router;
