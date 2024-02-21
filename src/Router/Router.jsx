import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import ErrorPage from "../Pages/ErrorPage";
import Details from "../Components/Details";
import MyCart from "../Pages/MyCart";
import UpdateProduct from "../Components/UpdateProduct";
import PrivetRoute from "./PrivetRoute";
import Login from "../Pages/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch(`https://clothing-store-server-pink.vercel.app/products`),
      },
      {
        path: "/add-product",
        element: <PrivetRoute> <AddProduct /></PrivetRoute>,
      },
      {
        path: "details/:id",
        element: <PrivetRoute>  <Details /> </PrivetRoute>,
        loader: ({params}) => fetch(`https://clothing-store-server-pink.vercel.app/products/${params.id}`),
      },
      {
        path : "/mycart",
        element : <PrivetRoute> <MyCart/> </PrivetRoute>,
        loader : () => fetch(`https://clothing-store-server-pink.vercel.app/myCart`)

      },
      {
        path : 'updateProduct/:id',
        element : <UpdateProduct/>,
        loader : ({params}) => fetch(`https://clothing-store-server-pink.vercel.app/products/${params.id}`)
      },
    ],
  },
  {
    path : 'login',
    element : <Login/>
  }
]);

export default Router;
