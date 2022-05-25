import React from "react";
import { toast } from "react-toastify";

const Alladmin = ({ refetch, user: { email, role, _id } }) => {
  const makeAdmin = () => {
    fetch(`https://rocky-fjord-46983.herokuapp.com/user/admin/${email}`, {
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
        if (data.modifiedCount > 0) {
          toast.success("done");
          refetch();
        }
      });
  };

  const deleteUser = (id) => {
    fetch(`https://rocky-fjord-46983.herokuapp.com/user/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
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
        <button
          onClick={() => deleteUser(_id)}
          disabled={role === "admin"}
          className="btn btn-xs text-red-600"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default Alladmin;
