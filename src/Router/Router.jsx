import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import ErrorPage from "../Pages/ErrorPage";
import Details from "../Components/Details";
import MyCart from "../Pages/MyCart";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch(`/products.json`),
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "details/:id",
        element: <Details />,
        loader: () => fetch(`/products.json`),
      },
      {
        path : "/mycart",
        element : <MyCart/>

      }
    ],
  },
]);

export default Router;
