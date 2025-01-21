import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./routes/Routes";
export let route = createBrowserRouter(ROUTES);

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
