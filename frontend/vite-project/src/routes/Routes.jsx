import UserRoot from "../pages/UserRoot";
import Favorites from "../pages/favorites/Favorites";
import Home from "../pages/home/Home";
import AddProduct from "../pages/addproduct/AddProduct";

const ROUTES = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
    ],
  },
];

export default ROUTES;
