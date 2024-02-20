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
        loader: () => fetch(`http://localhost:5000/products`),
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "details/:id",
        element: <Details />,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path : "/mycart",
        element : <MyCart/>

      }
    ],
  },
]);

export default Router;
