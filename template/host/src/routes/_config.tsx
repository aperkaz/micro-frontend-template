import { createBrowserRouter } from "react-router-dom";
import Index from "./index";
import Remote1 from "./remote1";
import Remote2 from "./remote2";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/remote1",
    element: <Remote1 />,
  },
  {
    path: "/remote2",
    element: <Remote2 />,
  },
]);
