import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadUser = useLoaderData();
  const [users, setUsers] = useState(loadUser);

  function handelUserDelete(id) {
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
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success",
              });

              const remainingUser = users.filter((user) => user._id !== id);
              setUsers(remainingUser);
            }
          });
      }
    });
  }

  return (
    <div className="max-w-7xl mx-auto px-5 my-20">
      <div className="overflow-x-auto">
        <table className="table text-base">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Create At</th>
              <th>Last Login</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user.name || "N/A"}</td>
                <td>{user?.email || "N/A"}</td>
                <td className="text-sm">{user?.createdAt || "N/A"}</td>
                <td className="text-sm">{user?.lastLogin || "N/A"}</td>
                <td className="flex gap-3">
                  <button className="btn">E</button>
                  <button
                    onClick={() => handelUserDelete(user._id)}
                    className="btn"
                  >
                    D
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
