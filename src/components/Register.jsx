import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  function handelRegister(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((result) => {
        const createdAt = result?.user?.metadata?.creationTime;

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ name, email, createdAt }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Success",
                text: "Register Successfully",
                icon: "success",
              });

              e.target.reset();
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
        <h1 className="text-center mt-8 text-primary text-3xl">Register</h1>

        <form onSubmit={handelRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-4">
            <button className="btn bg-secondary rounded border-none text-primary text-xl">
              Register
            </button>
          </div>
        </form>

        <p className="text-center mb-7 text-base">
          {"Already have an account? "}{" "}
          <Link to={"/login"} className="text-secondary text-lg">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
