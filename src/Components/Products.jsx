import { useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const allProducts = useLoaderData();

 
  return (
    <div className="mt-10 px-5 md:px-0">
      <div>
        <p className="text-2xl font-bold mb-5">New Products</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {allProducts.slice(0, 4).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
      <div className="my-10">
        <p className="text-2xl font-bold mb-5 ">Fetured Products</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {allProducts.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
