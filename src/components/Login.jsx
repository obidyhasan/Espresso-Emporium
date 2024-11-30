import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function handelLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((result) => {
        const lastLogin = result.user?.metadata?.lastSignInTime;
        fetch("https://espresso-emporium-server-jade-nine.vercel.app/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email, lastLogin }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.modifiedCount > 0) {
              Swal.fire({
                title: "Success",
                text: "Login Successfully",
                icon: "success",
              });

              navigate("/");
            }
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div className="bg-base-200 flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm my-32 mx-5">
        <h1 className="text-center mt-8 text-primary text-3xl">Login</h1>

        <form onSubmit={handelLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-base">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-4">
            <button className="btn bg-secondary rounded border-none text-primary text-xl">
              Login
            </button>
          </div>
        </form>

        <p className="text-center mb-7 text-base">
          {"Don't have an account? "}{" "}
          <Link to={"/register"} className="text-secondary text-lg">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
