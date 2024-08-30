import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Game";
import CTFPage from "./pages/Modules";
import Front from "./pages/frontend-station";

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
    path: "/2",
    element: <CTFPage />,
  },
  {
    path: "/frontend-station",
    element: <Front />,
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
