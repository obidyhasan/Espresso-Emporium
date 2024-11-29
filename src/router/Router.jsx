import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import ErrorLayout from "../pages/ErrorLayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import CoffeeDetails from "../components/CoffeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorLayout></ErrorLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee",
        element: <UpdateCoffee></UpdateCoffee>,
      },
      {
        path: "/coffeeDetails",
        element: <CoffeeDetails></CoffeeDetails>,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
