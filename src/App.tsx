import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <></>,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={routerConfig} />;
};

export default App;
