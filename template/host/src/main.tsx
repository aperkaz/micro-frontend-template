import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/_config";
import { notifications } from './globals';

declare global {
  interface Window { hostMethods: {
    notifications: {
      push: (payload: { message: string }) => void;
    }
  }; }
}

window.hostMethods = { notifications }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
