import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Pizza from "./pages/Pizza/Pizza";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Pizza",
    element: <Pizza />,
  },
 
]);

export default router;
