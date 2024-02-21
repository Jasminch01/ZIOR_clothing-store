import { Link, useLoaderData} from "react-router-dom";

const Details = () => {
  const detailsProduct = useLoaderData();
  const {_id, image, name, type, price, rating, brand, details } = detailsProduct;

  return (
    <div className="md:flex flex-row px-5 md:p-0 items-center my-20 justify-between gap-5">
      <div className="flex-1 rounded-lg border-gray-300 border-2">
        <img src={image} alt="" className="h-[60vh] w-full" />
      </div>
      <div>
        <p className="text-2xl font-semibold">{name}</p>
        <p className="font-medium">Type : {type}</p>
        <p className="font-medium">Price : {price}</p>
        <p className="font-medium">Rating : {rating}</p>
        <p className="font-medium">Brand : {brand}</p>
        <p>product id {_id}</p>
        <p>{details}</p>
        <div className="mt-3 ">
          <Link to={`/updateProduct/${_id}`}>
          <button className="py-2 px-3 bg-green-500 text-white uppercase font-medium">
            Update
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
