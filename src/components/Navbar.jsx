import bg from "../assets/images/more/15.jpg";
import logo from "../assets/images/more/logo1.png";

const Navbar = () => {
  return (
    <div className="w-full h-20 relative">
      <img src={bg} className="w-full h-full object-cover+" alt="" />
      <div className="w-full h-full absolute top-0 left-0 flex gap-3 items-center justify-center">
        <img src={logo} className="w-10" alt="" />
        <h2 className="text-white text-3xl">Espresso Emporium</h2>
      </div>
    </div>
  );
};

export default Navbar;
