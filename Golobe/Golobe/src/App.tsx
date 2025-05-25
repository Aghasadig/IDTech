import { createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    element: <div>aslkdjsalkdaslkd</div>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
