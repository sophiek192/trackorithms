import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/levels",
    element: <Game />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
