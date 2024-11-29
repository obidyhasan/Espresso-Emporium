import PropTypes from "prop-types";
import Swal from "sweetalert2";

import { FaEye } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, price, photo } = coffee;

  function handelCoffeeDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });

              const remaining = coffees.filter((coff) => coff._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  }

  return (
    <div className="bg-[#F5F4F1] flex items-center justify-between rounded py-5">
      <figure>
        <img src={photo} className="w-36" alt="" />
      </figure>
      <div className=" flex-1 flex justify-center">
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
            <span className="font-sans font-semibold">Price: </span>
            {price} Taka
          </p>
        </div>
      </div>
      <div className="flex flex-col mr-5 gap-2">
        <Link
          to={`/coffeeDetails/${_id}`}
          className="btn bg-[#D2B48C] text-white rounded"
        >
          <FaEye></FaEye>
        </Link>
        <Link
          to={`/updateCoffee/${_id}`}
          className="btn bg-[#3C393B] text-white rounded"
        >
          <MdEdit className="text-lg"></MdEdit>
        </Link>
        <button
          onClick={() => handelCoffeeDelete(_id)}
          className="btn bg-[#EA4744] text-white rounded"
        >
          <MdDelete className="text-lg"></MdDelete>
        </button>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.array,
  setCoffees: PropTypes.func,
};

export default CoffeeCard;
