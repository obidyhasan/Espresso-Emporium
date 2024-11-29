import img from "../assets/images/404/404.gif";

const ErrorLayout = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <img src={img} alt="" />
    </div>
  );
};

export default ErrorLayout;
