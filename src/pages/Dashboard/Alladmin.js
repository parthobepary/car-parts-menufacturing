import React from "react";

const Alladmin = ({user: {email}}) => {
  return (
    <tr>
      <td>{email}</td>
      <td><button className="btn btn-xs text-green-500">make admin</button></td>
      <td><button className="btn btn-xs text-red-600">delete</button></td>
    </tr>
  );
};

export default Alladmin;
