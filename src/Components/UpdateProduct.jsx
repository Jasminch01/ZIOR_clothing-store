import axios from "axios";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const productUpdate = useLoaderData({});

  const handleSumbit = (e) => {
    e.preventDefault();
    const formA = e.target;
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const type = form.get("type");
    const image = form.get("photo");
    const price = form.get("price");
    const brand = form.get("brand");
    const details = form.get("discription");
    const rating = form.get("rating");

    const product = {
      name,
      type,
      image,
      price,
      brand,
      details,
      rating,
    };

    axios.put(`http://localhost:5000/updateProduct/${productUpdate._id}`, product).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        navigate(location?.state ? location.state : "/");
        formA.reset();
        alert("product aded success");
      }
    });
  };

  return (
    <div className="h-screen">
      <div className="hero min-h-screen ">
        <div>
          <div className="my-10">
            <p className="text-3xl text-center font-bold ">Add Product</p>
          </div>
          <div className="w-full shadow-2xl lg:w-96">
            <form className="card-body" onSubmit={handleSumbit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={productUpdate.name}
                  placeholder="Product Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Type</span>
                </label>
                <input
                  type="text"
                  name="type"
                  defaultValue={productUpdate.type}
                  placeholder="Product Type"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={productUpdate.imge}
                  placeholder="Photo url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue={productUpdate.price}
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Brand Name</span>
                </label>
                <input
                  defaultValue={productUpdate.brand}
                  type="text"
                  name="brand"
                  placeholder="Brand"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  defaultValue={productUpdate.rating}
                  placeholder="Rating"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Discription</span>
                </label>
                <textarea
                  type="text"
                  name="discription"
                  defaultValue={productUpdate.details}
                  placeholder="Discription"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="p-3 bg-green-500 rounded-lg text-white uppercase">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
