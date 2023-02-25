import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FlumeEditor } from "./flume/FlumeEditor";
import { ReactFlowEditor } from "./react-flow/ReactFlowEditor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/flume",
    element: <FlumeEditor />,
  },
  {
    path: "/react-flow",
    element: <ReactFlowEditor />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
