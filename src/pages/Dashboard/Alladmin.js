import React from "react";
import { toast } from "react-toastify";

const Alladmin = ({ refetch, user: { email, role } }) => {
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Make sure your are admin");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("done");
          refetch();
        }
      });
  };

  return (
    <tr>
      <td>{email}</td>
      <td>
        {role === "admin" ? (
          "Admin"
        ) : (
          <button onClick={makeAdmin} className="btn btn-xs text-green-500">
            make admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs text-red-600">delete</button>
      </td>
    </tr>
  );
};

export default Alladmin;
