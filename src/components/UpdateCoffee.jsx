import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, price, photo, supplier, category, details } = coffee;

  const navigate = useNavigate();

  function handelUpdateCoffee(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const price = form.price.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const coffeeInfo = {
      name,
      chef,
      supplier,
      price,
      category,
      details,
      photo,
    };

    fetch(
      `https://espresso-emporium-server-jade-nine.vercel.app/coffees/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(coffeeInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: `${name} update successfully!`,
            icon: "success",
          });
          navigate("/");
        }
      });
  }

  return (
    <div className="mx-5 my-20">
      <div className="max-w-7xl mx-auto px-5 bg-[#F4F3F0] py-10">
        <div className="text-center space-y-2">
          <h2 className="font-bold text-2xl">Update Existing Coffee Details</h2>
          <p className="max-w-2xl mx-auto font-sans text-xs">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form onSubmit={handelUpdateCoffee} className="m-5 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Name</span>
              </label>
              <input
                type="text"
                defaultValue={name}
                placeholder="Enter coffee name"
                className="input rounded "
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Chef</span>
              </label>
              <input
                type="text"
                defaultValue={chef}
                placeholder="Enter coffee chef"
                className="input rounded"
                name="chef"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Supplier</span>
              </label>
              <input
                type="text"
                defaultValue={supplier}
                placeholder="Enter supplier name"
                className="input rounded "
                name="supplier"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Price</span>
              </label>
              <input
                type="number"
                defaultValue={price}
                placeholder="Enter coffee price"
                className="input rounded"
                name="price"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Category</span>
              </label>
              <input
                type="text"
                defaultValue={category}
                placeholder="Enter coffee category"
                className="input rounded "
                name="category"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Details</span>
              </label>
              <input
                type="text"
                defaultValue={details}
                placeholder="Enter coffee details"
                className="input rounded"
                name="details"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Photo URL</span>
            </label>
            <input
              type="text"
              defaultValue={photo}
              placeholder="Enter photo url"
              className="input rounded"
              name="photo"
              required
            />
          </div>

          <div>
            <button className="btn w-full bg-secondary rounded mt-3 text-base">
              Update Coffee Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
