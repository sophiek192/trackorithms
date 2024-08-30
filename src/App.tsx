import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Game";
import CTFPage from "./pages/Modules";
import Front from "./pages/frontend-station";
import Landing from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/levels",
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
  {
    path: "/landing",
    element: <Landing />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
