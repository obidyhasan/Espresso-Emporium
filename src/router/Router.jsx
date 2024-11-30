import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import ErrorLayout from "../pages/ErrorLayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import CoffeeDetails from "../components/CoffeeDetails";
import PrivateRouter from "./PrivateRouter";
import Login from "../components/Login";
import Register from "../components/Register";
import Users from "../components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorLayout></ErrorLayout>,
    children: [
      {
        path: "/",
        element: (
          <PrivateRouter>
            <Home></Home>
          </PrivateRouter>
        ),
      },
      {
        path: "/addCoffee",
        element: (
          <PrivateRouter>
            <AddCoffee></AddCoffee>
          </PrivateRouter>
        ),
      },
      {
        path: "/updateCoffee/:id",
        element: (
          <PrivateRouter>
            <UpdateCoffee></UpdateCoffee>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "/coffeeDetails/:id",
        element: (
          <PrivateRouter>
            <CoffeeDetails></CoffeeDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/users",
        element: (
          <PrivateRouter>
            <Users></Users>
          </PrivateRouter>
        ),
        loader: () => fetch("http://localhost:5000/users"),
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
