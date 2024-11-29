import coffeeImg from "../assets/images/coffee/1.png";

import { FaEye } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CoffeeCard = () => {
  return (
    <div className="bg-[#F5F4F1] flex items-center justify-between rounded py-5">
      <figure>
        <img src={coffeeImg} className="w-36" alt="" />
      </figure>
      <div className=" flex-1 flex justify-center">
        <div className="space-y-1">
          <p className="font-sans">
            <span className="font-sans font-semibold">Name: </span>
            Americano coffee
          </p>
          <p className="font-sans">
            <span className="font-sans font-semibold">Chef: </span>Mrs. Morisha
          </p>
          <p className="font-sans">
            <span className="font-sans font-semibold">Price: </span>
            890 Taka
          </p>
        </div>
      </div>
      <div className="flex flex-col mr-5 gap-2">
        <Link
          to={"/coffeeDetails"}
          className="btn bg-[#D2B48C] text-white rounded"
        >
          <FaEye></FaEye>
        </Link>
        <Link
          to={"/updateCoffee"}
          className="btn bg-[#3C393B] text-white rounded"
        >
          <MdEdit className="text-lg"></MdEdit>
        </Link>
        <button className="btn bg-[#EA4744] text-white rounded">
          <MdDelete className="text-lg"></MdDelete>
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
