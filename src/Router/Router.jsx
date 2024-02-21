import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import ErrorPage from "../Pages/ErrorPage";
import Details from "../Components/Details";
import MyCart from "../Pages/MyCart";
import UpdateProduct from "../Components/UpdateProduct";

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
        element : <MyCart/>,
        loader : () => fetch(`http://localhost:5000/myCart`)

      },
      {
        path : 'updateProduct/:id',
        element : <UpdateProduct/>,
        loader : ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
      }
    ],
  },
]);

export default Router;
