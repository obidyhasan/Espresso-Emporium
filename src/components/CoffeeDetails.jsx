import { useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, chef, price, photo, supplier, category, details } = coffee;

  return (
    <div className="mx-5 my-20">
      <div className="max-w-7xl mx-auto px-5 bg-[#F4F3F0] py-10 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex items-center justify-center">
          <img src={photo} alt="" />
        </div>

        <div className="flex items-center">
          <div>
            <h2 className="text-2xl font-bold mb-5">Niceties</h2>
            <div className="space-y-1">
              <p className="font-sans">
                <span className="font-sans font-semibold">Name: </span>
                {name}
              </p>
              <p className="font-sans">
                <span className="font-sans font-semibold">Chef: </span>
                {chef}
              </p>
              <p className="font-sans">
                <span className="font-sans font-semibold">Supplier: </span>
                {supplier}
              </p>
              <p className="font-sans">
                <span className="font-sans font-semibold">Price: </span>
                {price} Taka
              </p>
              <p className="font-sans">
                <span className="font-sans font-semibold">Category: </span>
                {category}
              </p>
              <p className="font-sans">
                <span className="font-sans font-semibold">Details: </span>
                {details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
