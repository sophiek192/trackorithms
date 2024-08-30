import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Game";
import CTFPage from "./pages/Modules";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/1",
    element: <Game />,
  },
  {
    path: "/modules/security",
    element: <CTFPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
