const UpdateCoffee = () => {
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

        <form className="m-5 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl">Name</span>
              </label>
              <input
                type="text"
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
