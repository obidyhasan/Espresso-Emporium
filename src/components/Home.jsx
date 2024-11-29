import { Link } from "react-router-dom";
import icon1 from "../assets/images/icons/1.png";
import icon2 from "../assets/images/icons/2.png";
import icon3 from "../assets/images/icons/3.png";
import icon4 from "../assets/images/icons/4.png";
import { LuCoffee } from "react-icons/lu";
import CoffeeCard from "./CoffeeCard";

import cup1 from "../assets/images/cups/Rectangle 10.png";
import cup2 from "../assets/images/cups/Rectangle 11.png";
import cup3 from "../assets/images/cups/Rectangle 12.png";
import cup4 from "../assets/images/cups/Rectangle 13.png";
import cup5 from "../assets/images/cups/Rectangle 14.png";
import cup6 from "../assets/images/cups/Rectangle 15.png";
import cup7 from "../assets/images/cups/Rectangle 16.png";
import cup8 from "../assets/images/cups/Rectangle 9.png";
import { useEffect, useState } from "react";

const Home = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);

  return (
    <div>
      {/* Hero section */}
      <div className="hero-bg ">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto px-5 py-64">
          <div></div>
          <div className="text-white space-y-5">
            <h2 className="text-4xl">
              Would you like a Cup of Delicious Coffee?
            </h2>
            <p className="font-sans text-xs text-gray-300">
              Its coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn btn-sm rounded-none bg-[#E3B577] border-none text-[#242222] text-base px-5">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <div className="bg-[#ECEAE3]">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 py-10">
          <div className="space-y-1">
            <img src={icon1} className="w-14 h-14 object-contain" alt="" />
            <h3 className="text-2xl text-[#242222]">Awesome Aroma</h3>
            <p className="font-sans text-xs text-[#242222]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>

          <div className=" space-y-1">
            <img src={icon2} className="w-14 h-14 object-contain" alt="" />
            <h3 className="text-2xl text-[#242222]">High Quality</h3>
            <p className="font-sans text-xs text-[#242222]">
              We served the coffee to you maintaining the best quality
            </p>
          </div>

          <div className=" space-y-1">
            <img src={icon3} className="w-14 h-14 object-contain" alt="" />
            <h3 className="text-2xl text-[#242222]">Pure Grades</h3>
            <p className="font-sans text-xs text-[#242222]">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>

          <div className=" space-y-1">
            <img src={icon4} className="w-14 h-14 object-contain" alt="" />
            <h3 className="text-2xl text-[#242222]">Proper Roasting</h3>
            <p className="font-sans text-xs text-[#242222]">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>

      {/* Add Coffee */}
      <section className="py-16 max-w-7xl mx-auto px-5">
        <div className="flex flex-col items-center gap-2">
          <h5 className="font-sans text-sm text-gray-600">
            --- Sip & Savor ---
          </h5>
          <h2 className="text-4xl text-primary">Our Popular Products</h2>
          <Link
            to={"/addCoffee"}
            className="btn btn-sm rounded-none bg-secondary text-base text-primary"
          >
            Add Coffee <LuCoffee />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>
      </section>

      {/* Follow on Instagram */}
      <section className="py-16 max-w-7xl mx-auto px-5">
        <div className="flex flex-col items-center gap-2">
          <h5 className="font-sans text-sm text-gray-600">Follow Us Now</h5>
          <h2 className="text-4xl text-primary">Our Popular Products</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-20">
          <img
            src={cup1}
            className="w-full h-[300px] object-cover rounded-lg"
            alt=""
          />
          <img
            src={cup2}
            className="w-full h-[300px] object-cover rounded-lg"
            alt=""
          />
          <img
            src={cup3}
            className="w-full h-[300px] object-cover rounded-lg"
            alt=""
          />
          <img
            src={cup4}
            className="w-full h-[300px] object-cover rounded-lg"
            alt=""
          />
          <img
            src={cup5}
            className="w-full h-[300px] object-cover rounded-lg"
            alt=""
          />
          <img
            src={cup6}
            className="w-full h-[300px] object-cover rounded-lg"
            alt=""
          />
          <img
            src={cup7}
            className="w-full h-[300px] object-cover rounded-lg"
            alt=""
          />
          <img
            src={cup8}
            className="w-full h-[300px] object-cover rounded-lg"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
