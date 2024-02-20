import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
  const allProducts = useLoaderData();
  return (
    <div className="mt-10 px-5 md:px-0">
      <div>
        <p className="text-2xl font-bold mb-5">New Products</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {allProducts.slice(0, 4).map((product, idx) => (
            <Link to={`/details/${product._id}`} key={idx}>
              <div className="flex flex-col">
                <figure>
                  <img
                    src={product.image}
                    alt="Shoes"
                    className="h-64 w-full"
                  />
                </figure>
                <div className="text-center mt-3">
                  <h2 className="text-lg font-medium">{product.name}</h2>
                  <p>Rating: {product.rating}</p>
                  <p className="font-medium">Price : $200</p>
                </div>
                <div className="text-center mt-5">
                  <button className="py-2 px-3 border text-gray-500 hover:bg-green-500 hover:text-white uppercase font-medium">
                    Add To Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="my-10">
        <p className="text-2xl font-bold mb-5 ">Fetured Products</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {allProducts.map((product, idx) => (
            <Link to={`/details/${product._id}`} key={idx}>
              <div className="flex flex-col">
                <figure>
                  <img
                    src={product.image}
                    alt="Shoes"
                    className="h-64 w-full"
                  />
                </figure>
                <div className="text-center mt-3">
                  <h2 className="text-lg font-medium">{product.name}</h2>
                  <p>Rating: {product.rating}</p>
                  <p className="font-medium">Price : $200</p>
                </div>
                <div className="text-center mt-5">
                  <button className="p-2 border text-gray-500 hover:bg-green-500 hover:text-white uppercase font-medium">
                    Add To Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
