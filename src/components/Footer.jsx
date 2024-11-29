import logo from "../assets/images/more/logo1.png";

const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="max-w-7xl mx-auto px-5 flex flex-col gap-1 justify-center items-center py-10">
        <img src={logo} className="w-16" alt="" />
        <h1 className="text-3xl font-bold">Espresso Emporium</h1>
        <p>
          Always ready to be your friend. Come & Contact with us to share your
          memorable moments, to share with your best companion.
        </p>
      </div>
    </div>
  );
};

export default Footer;
