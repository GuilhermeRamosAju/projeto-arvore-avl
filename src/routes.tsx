import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import TreeCreation from "./pages/TreeCreation";

const router = createBrowserRouter([
  {
    path: "/projeto-arvore-avl",
    element: <Home />,
  },
  {
    path: "/projeto-arvore-avl/tree-creation",
    element: <TreeCreation />,
  },
]);

export default router;
