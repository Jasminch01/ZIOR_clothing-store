import axios from "axios";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const handleAddToCart = async () => {
    const res = await axios.post(`https://clothing-store-server-pink.vercel.app/addToCart`, product);
    if (res.data.acknowledged) {
      alert("cart added successfully");
    }
  };

  return (
    <div>
      <Link to={`/details/${product._id}`}>
        <div className="flex flex-col">
          <figure>
            <img src={product.image} alt="Shoes" className="h-64 w-full" />
          </figure>
          <div className="text-center mt-3">
            <h2 className="text-lg font-medium">{product.name}</h2>
            <p>Rating: {product.rating}</p>
            <p className="font-medium">Price : $200</p>
          </div>
        </div>
      </Link>
      <div className="text-center mt-5">
        <button
          onClick={() => handleAddToCart()}
          className="py-2 px-3 border text-gray-500 hover:bg-green-500 hover:text-white uppercase font-medium"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
