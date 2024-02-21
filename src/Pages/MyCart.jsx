import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const cartItems = useLoaderData();
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item._id} className="mt-5 mb-10 bg-gray-300 p-4">
          <div className="flex gap-6 items-center">
            <div>
              <img src={item.image} alt="" className="w-40" />
            </div>
            <div >
              <p>{item.name}</p>
              <p>Brand : {item.brand}</p>
              <p>Price :{item.price}</p>
              <p>Type :{item.price}</p>
              <p>Rating :{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCart;
